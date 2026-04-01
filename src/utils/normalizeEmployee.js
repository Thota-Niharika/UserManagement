/**
 * normalizeEmployee.js
 *
 * Single normalization layer between the backend and the UI.
 * Handles diverse backend formats (named fields, arrays, JSON strings)
 * and normalizes them into a consistent shape for the UI.
 */

/**
 * Formatters for backend date formats (LocalDate/LocalDateTime arrays or strings)
 */
export const formatDate = (date) => {
    if (!date) return '-';
    // Handle Java LocalDate array [year, month, day]
    if (Array.isArray(date)) {
        if (date.length === 0) return '-';
        if (date.length === 1) return String(date[0]);
        const [year, month, day] = date;
        return `${year}-${String(month || 1).padStart(2, '0')}-${String(day || 1).padStart(2, '0')}`;
    }
    // Handle Java LocalDate object {year, month, day}
    if (date && typeof date === 'object') {
        const y = date.year || date.Year;
        const m = date.monthValue || date.month || date.Month || 1;
        const d = date.dayOfMonth || date.day || date.Day || 1;
        if (y) return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    }
    // Handle string formatting - be smart about timestamps vs calendar dates
    if (typeof date === 'string') {
        if (date.includes('T')) {
            let d;
            if (date.endsWith('Z')) {
                d = new Date(date);
            } else {
                d = new Date(date + 'Z');
            }
            if (!isNaN(d.getTime())) {
                return d.toLocaleDateString('en-CA'); // YYYY-MM-DD
            }
            return date.split('T')[0];
        }
        return date;
    }
    return String(date);
};

export const formatDateTime = (date) => {
    if (!date) return { date: '-', time: '-' };
    if (Array.isArray(date)) {
        const [year, month, day, hour, minute] = date;
        return {
            date: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
            time: `${String(hour || 0).padStart(2, '0')}:${String(minute || 0).padStart(2, '0')}`
        };
    }
    if (typeof date === 'string') {
        if (date.includes('T')) {
            let d;
            if (date.endsWith('Z')) {
                d = new Date(date);
            } else {
                d = new Date(date + 'Z');
            }
            if (!isNaN(d.getTime())) {
                return {
                    date: d.toLocaleDateString('en-CA'),
                    time: d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
                };
            }
        }
        const parts = date.split(/[T ]/);
        return {
            date: parts[0] || '-',
            time: parts[1] ? parts[1].substring(0, 5) : '-'
        };
    }
    return { date: '-', time: '-' };
};

/**
 * Helper: Searches an object (recursively) for keys matching patterns.
 */
export const findByPattern = (obj, patterns) => {
    if (!obj || typeof obj !== 'object') return null;
    for (const key of Object.keys(obj)) {
        if (patterns.some(p => key.toLowerCase().includes(p.toLowerCase()))) {
            let val = obj[key];
            if (typeof val === 'string' && (val.trim().startsWith('{') || val.trim().startsWith('['))) {
                try { val = JSON.parse(val); } catch (e) { }
            }
            if (val !== null && val !== undefined && val !== '-' && val !== '') {
                return val;
            }
        }
    }
    for (const key of Object.keys(obj)) {
        const val = obj[key];
        if (val && typeof val === 'object') {
            if (Array.isArray(val)) {
                for (const item of val) {
                    const found = findByPattern(item, patterns);
                    if (found) return found;
                }
            } else {
                const found = findByPattern(val, patterns);
                if (found) return found;
            }
        }
    }
    return null;
};

/**
 * Helper: Specifically find a proof object by type name.
 */
export const findProof = (obj, typeName) => {
    if (!obj || typeof obj !== 'object') return null;
    const target = typeName.toUpperCase();
    if (Array.isArray(obj)) {
        return obj.find(p => {
            const pt = ((p.proofType || p.type || '')).toUpperCase();
            return pt.includes(target) || target.includes(pt);
        }) || null;
    }
    const proofs = obj.identityProofs || findByPattern(obj, ['identityProofs', 'proofs', 'identities']);
    if (Array.isArray(proofs)) {
        const found = proofs.find(p => {
            const pt = ((p.proofType || p.type || '')).toUpperCase();
            return pt.includes(target) || target.includes(pt);
        });
        if (found) return found;
    }
    return findByPattern(obj, [target + 'Proof', target + '_proof', target]);
};

/**
 * Helper: Recursively search for a value matching patterns.
 */
export const scavengeValue = (obj, patterns, seen = new Set(), excludePatterns = []) => {
    if (!obj || seen.has(obj)) return null;
    seen.add(obj);

    const patternsUpper = patterns.map(p => p.toUpperCase());
    const excludeUpper = excludePatterns.map(ex => ex.toUpperCase());

    if (typeof obj === 'object' && !Array.isArray(obj)) {
        const keys = Object.keys(obj);

        // Priority 1: Exact matches or keys containing patterns
        for (const key of keys) {
            const kUpper = key.toUpperCase();
            if (patternsUpper.some(p => kUpper.includes(p))) {
                if (excludeUpper.some(ex => kUpper.includes(ex))) continue;

                let val = obj[key];
                if (typeof val === 'string' && val.length > 2 && (val.trim().startsWith('{') || val.trim().startsWith('['))) {
                    try { val = JSON.parse(val); } catch (e) { }
                }
                if (val !== null && val !== undefined && val !== '-' && val !== '') {
                    return val;
                }
            }
        }
    }

    if (Array.isArray(obj)) {
        for (const item of obj) {
            const nested = scavengeValue(item, patterns, seen, excludePatterns);
            if (nested !== null && nested !== undefined && nested !== '-') return nested;
        }
    } else if (typeof obj === 'object') {
        const keys = Object.keys(obj);
        for (const key of keys) {
            const kUpper = key.toUpperCase();
            if (excludeUpper.some(ex => kUpper.includes(ex))) continue;
            const val = obj[key];
            const nested = scavengeValue(val, patterns, seen, excludePatterns);
            if (nested !== null && nested !== undefined && nested !== '-') return nested;
        }
    }
    return null;
};

/**
 * Helper: Specifically scavenge for a string path.
 * AVOID keys that look like document numbers (ID, No, Number) unless they also contain path-like words.
 */
export const scavengePath = (obj, patterns) => {
    // 1. First try specifically for keys that look like paths/files (aggressive lookup)
    const filePatterns = [...patterns, 'Path', 'File', 'Url', 'CertificatePath', 'FilePath'];
    const val = scavengeValue(obj, filePatterns);

    const isPath = (v) => typeof v === 'string' && (v.includes('/') || v.includes('\\') || (v.includes('.') && v.length > 5) || v.length > 20);

    if (isPath(val)) return val;

    if (val && typeof val === 'object') {
        const subPath = val.filePath || val.path || val.certificatePath || val.url || findByPattern(val, ['PATH', 'FILE', 'URL']);
        if (isPath(subPath)) return subPath;
    }

    // 2. Fallback: try original patterns but filter out strings that look like document numbers
    const fallbackVal = scavengeValue(obj, patterns);
    if (isPath(fallbackVal)) return fallbackVal;

    return null;
};

const normalizeEdu = (item, source = {}, prefix = '') => {
    if (!item || item === '-') {
        if (prefix && source && typeof source === 'object') {
            const p = prefix.toLowerCase();
            const school = scavengeValue(source, [p + 'School', p + 'Institution', p + 'College', p + 'Name', p + '_institution', p + '_college', p + '_name']);
            const yr = scavengeValue(source, [p + 'Year', p + 'Passout', p + 'Date', p + '_year', p + '_passout', p + '_date']);
            const score = scavengeValue(source, [p + 'Percentage', p + 'Cgpa', p + 'Marks', p + '_percentage', p + '_cgpa', p + '_marks']);
            if (school || yr || score) {
                item = {
                    institutionName: school,
                    passoutYear: yr,
                    percentageCgpa: score,
                    percentage: score,
                    hallTicketNo: scavengeValue(source, [p + 'HallTicket', p + 'RollNo', p + 'Id', p + '_hall_ticket', p + '_roll_no']),
                    hallTicketNumber: scavengeValue(source, [p + 'HallTicket', p + 'RollNo', p + 'Id', p + '_hall_ticket', p + '_roll_no']),
                    certificatePath: scavengePath(source, [p + 'Certificate', p + 'File', p + 'Doc', p + '_certificate', p + '_file', p + '_doc', 'post_graduation_certificate_file', 'other_certificate_file']),
                    certificateFilePath: scavengePath(source, [p + 'Certificate', p + 'File', p + 'Doc', p + '_certificate', p + '_file', p + '_doc', 'post_graduation_certificate_file', 'other_certificate_file']),
                    marksMemoPath: scavengePath(source, [p + 'Marks', p + 'Memo', p + 'Transcript', p + '_marks_memo', p + '_memo', p + '_transcript', 'post_graduation_marks_memo_file', 'other_marks_memo_file']),
                    marksMemoFilePath: scavengePath(source, [p + 'Marks', p + 'Memo', p + 'Transcript', p + '_marks_memo', p + '_memo', p + '_transcript', 'post_graduation_marks_memo_file', 'other_marks_memo_file'])
                };
            }
        }
    }
    if (!item || item === '-') return null;
    let parsed = item;
    if (typeof item === 'string' && (item.trim().startsWith('{') || item.trim().startsWith('['))) {
        try { parsed = JSON.parse(item); } catch (e) { }
    }
    if (!parsed || typeof parsed !== 'object' || parsed === '-') return null;

<<<<<<< HEAD
    const rawInst = parsed.institutionName || parsed.collegeName || parsed.universityName || scavengeValue(parsed, ['institution', 'college', 'school', 'university', 'board']);
    const rawYear = parsed.passoutYear || parsed.year || scavengeValue(parsed, ['year', 'passout', 'date', 'passing', 'completion']);
    const rawScore = parsed.percentageCgpa || parsed.percentage || scavengeValue(parsed, ['percentage', 'cgpa', 'marks', 'score', 'grade']);
=======
    const rawInst = parsed.institutionName || scavengeValue(parsed, ['institution', 'college', 'school', 'university', 'board']);
    const rawYear = parsed.passoutYear || scavengeValue(parsed, ['year', 'passout', 'date', 'passing', 'completion']);
    const rawScore = parsed.percentage || parsed.percentageCgpa || scavengeValue(parsed, ['percentage', 'cgpa', 'marks', 'score', 'grade']);
>>>>>>> 62ebbba (commit)

    const result = {
        ...parsed,
        institutionName: rawInst || '-',
        passoutYear: rawYear || '-',
        percentageCgpa: rawScore || '-',
<<<<<<< HEAD
        percentage: rawScore || '-',
        hallTicketNo: parsed.hallTicketNo || parsed.hallTicketNumber || scavengeValue(parsed, ['hallTicket', 'htNumber', 'rollNo']),
        hallTicketNumber: parsed.hallTicketNumber || parsed.hallTicketNo || scavengeValue(parsed, ['hallTicket', 'htNumber', 'rollNo']),
        certificatePath: parsed.certificatePath || parsed.certificateFilePath || scavengePath(parsed, ['certificate', 'certPath', 'doc', 'file']),
        certificateFilePath: parsed.certificateFilePath || parsed.certificatePath || scavengePath(parsed, ['certificate', 'certPath', 'doc', 'file']),
        marksMemoPath: parsed.marksMemoPath || parsed.marksMemoFilePath || scavengePath(parsed, ['marksMemo', 'marks', 'memo', 'transcript']),
        marksMemoFilePath: parsed.marksMemoFilePath || parsed.marksMemoPath || scavengePath(parsed, ['marksMemo', 'marks', 'memo', 'transcript'])
=======
        hallTicketNo: parsed.hallTicketNumber || parsed.hallTicketNo || scavengeValue(parsed, ['hallTicket', 'htNumber', 'rollNo']),
        certificatePath: parsed.certificateFilePath || parsed.certificatePath || scavengePath(parsed, ['certificate', 'certPath', 'doc', 'file']),
        marksMemoPath: parsed.marksMemoFilePath || parsed.marksMemoPath || scavengePath(parsed, ['marksMemo', 'marks', 'memo', 'transcript'])
>>>>>>> 62ebbba (commit)
    };

    if (result.institutionName === '-' && result.passoutYear === '-' && result.percentageCgpa === '-') return null;
    return result;
};

/**
 * Builds a clean identityProofs array from the backend's named proof fields.
 */
const buildIdentityProofs = (source) => {
    if (!source || typeof source !== 'object') return [];

    // --- NEW MODEL: Array of Consolidated IdentityProof Objects ---
    if (Array.isArray(source.identityProofs) && source.identityProofs.length > 0) {
        const idp = source.identityProofs[0];
        const proofs = [];
        if (idp.panFilePath) proofs.push({ type: 'PAN', proofType: 'PAN', documentNumber: idp.panNumber, filePath: idp.panFilePath, status: idp.status, rejectionReason: idp.rejectionReason });
        if (idp.aadhaarFilePath) proofs.push({ type: 'AADHAR', proofType: 'AADHAR', documentNumber: idp.aadhaarNumber, filePath: idp.aadhaarFilePath, status: idp.status, rejectionReason: idp.rejectionReason });
        if (idp.photoFilePath) proofs.push({ type: 'PHOTO', proofType: 'PHOTO', filePath: idp.photoFilePath, status: idp.status, rejectionReason: idp.rejectionReason });
        if (idp.passportFilePath) proofs.push({ type: 'PASSPORT', proofType: 'PASSPORT', filePath: idp.passportFilePath, status: idp.status, rejectionReason: idp.rejectionReason });
        if (idp.voterIdFilePath) proofs.push({ type: 'VOTER', proofType: 'VOTER', filePath: idp.voterIdFilePath, status: idp.status, rejectionReason: idp.rejectionReason });
        if (proofs.length > 0) return proofs;
    }

    // --- OLD MODEL: Backwards compatibility ---
    const proofs = [];

    const findKeyVal = (patterns) => {
        for (const key of Object.keys(source)) {
            if (patterns.some(p => key.toLowerCase().includes(p.toLowerCase()))) {
                const val = source[key];
                if (val && (typeof val === 'object' || (typeof val === 'string' && val.length > 5))) return val;
            }
        }
        return null;
    };

    const pan = source.panProof || findKeyVal(['panProof', 'pan_card', 'pan_file']);
    if (pan) proofs.push({ type: 'PAN', proofType: 'PAN', entityType: 'IDENTITY_PROOF', id: pan.id, ...(typeof pan === 'object' ? { filePath: pan.panFile || pan.path || pan.filePath, ...pan } : { filePath: pan }) });
    else if (source.panPath) proofs.push({ type: 'PAN', proofType: 'PAN', entityType: 'IDENTITY_PROOF', id: null, filePath: source.panPath });

    const aadhar = source.aadharProof || source.aadhaarProof || findKeyVal(['aadharProof', 'aadhaarProof', 'aadhar_card', 'aadhar_file']);
    if (aadhar) proofs.push({ type: 'AADHAR', proofType: 'AADHAR', entityType: 'IDENTITY_PROOF', id: aadhar.id, ...(typeof aadhar === 'object' ? { filePath: aadhar.aadhaarFile || aadhar.aadharFile || aadhar.path || aadhar.filePath, ...aadhar } : { filePath: aadhar }) });
    else if (source.aadharPath) proofs.push({ type: 'AADHAR', proofType: 'AADHAR', entityType: 'IDENTITY_PROOF', id: null, filePath: source.aadharPath });

    const photo = source.photoProof || findKeyVal(['photoProof', 'photo', 'passportPhoto']);
    if (photo) proofs.push({ type: 'PHOTO', proofType: 'PHOTO', entityType: 'IDENTITY_PROOF', id: photo.id, ...(typeof photo === 'object' ? { filePath: photo.photoFile || photo.path || photo.filePath, ...photo } : { filePath: photo }) });
    else if (source.photoPath) proofs.push({ type: 'PHOTO', proofType: 'PHOTO', entityType: 'IDENTITY_PROOF', id: null, filePath: source.photoPath });

    const passport = source.passportProof || findKeyVal(['passportProof', 'passportDoc', 'passport_file', 'passport_document']);
    if (passport) proofs.push({ type: 'PASSPORT', proofType: 'PASSPORT', entityType: 'IDENTITY_PROOF', id: passport.id, ...(typeof passport === 'object' ? { filePath: passport.passportFile || passport.path || passport.filePath, ...passport } : { filePath: passport }) });
    else if (source.passportPath) proofs.push({ type: 'PASSPORT', proofType: 'PASSPORT', entityType: 'IDENTITY_PROOF', id: null, filePath: source.passportPath });

    const voter = source.voterProof || findKeyVal(['voterProof', 'voterId', 'voter_file', 'voter_card']);
    if (voter) proofs.push({ type: 'VOTER', proofType: 'VOTER', entityType: 'IDENTITY_PROOF', id: voter.id, ...(typeof voter === 'object' ? { filePath: voter.voterFile || voter.path || voter.filePath, ...voter } : { filePath: voter }) });
    else if (source.voterPath) proofs.push({ type: 'VOTER', proofType: 'VOTER', entityType: 'IDENTITY_PROOF', id: null, filePath: source.voterPath });

    return proofs;
};

/**
 * Comprehensive normalization logic for employee objects.
 */
export const normalizeEmployee = (emp, departments = [], roles = [], entities = []) => {
    if (!emp) return null;

    // AVOID ARRAY NESTING: If backend returns [{...}] instead of {...}, take the first one
    if (Array.isArray(emp)) {
        console.warn("⚠️ normalizeEmployee received an array instead of an object. Taking the first element.", emp);
        emp = emp[0];
    }
    
    if (!emp) return null;

    console.log("🔍 [DEBUG] normalizeEmployee Input Keys:", Object.keys(emp));

    // --- PRE-PARSING ---
    let expandedEmp = { ...emp };

    // MERGE ONBOARDING FORM DATA
    // When an employee fills onboarding, their main record might be empty but 
    // the nested 'onboardingForm' object holds all the submissions.
    const mergeForm = (form) => {
        if (!form) return;
        let parsed = form;
        if (typeof form === 'string' && (form.trim().startsWith('{') || form.trim().startsWith('['))) {
            try { parsed = JSON.parse(form); } catch (e) { }
        }
        if (!parsed || typeof parsed !== 'object') return;
        
        Object.keys(parsed).forEach(k => {
            const val = parsed[k];
            // Only overwrite if the value exists and the root property is empty/null/'-'
            if (val && val !== '-' && (!expandedEmp[k] || expandedEmp[k] === '-' || expandedEmp[k] === '')) {
                expandedEmp[k] = val;
            }
        });
    };
    mergeForm(emp.onboardingForm);
    mergeForm(emp.onboardingDetails);

    Object.keys(expandedEmp).forEach(key => {
        const val = expandedEmp[key];
        if (typeof val === 'string' && val.length > 2 && (val.trim().startsWith('{') || val.trim().startsWith('['))) {
            try {
                const parsed = JSON.parse(val);
                if (parsed && typeof parsed === 'object') {
                    expandedEmp[key] = parsed;
                }
            } catch (e) { }
        }
    });

    // 1. Identity Proofs
    let identityProofs = buildIdentityProofs(expandedEmp);
    if (identityProofs.length === 0 && Array.isArray(emp.identityProofs)) {
        identityProofs = emp.identityProofs.map(p => ({
            ...p,
            entityType: p.entityType || 'IDENTITY_PROOF',
            id: p.id || (p.type || p.proofType || '').toUpperCase()
        }));
    }

    // 2. Department/Role/Entity Lookup
    const getDeptName = d => d.deptName || d.name || d.departmentName || d;
    const getDeptCode = d => d.deptCode || d.deptId || d.id;
    const getRoleName = r => r.roleName || r.name || r;
    const getRoleCode = r => r.roleCode || r.roleId || r.id;
    const getEntityName = e => e.entityName || e.name || e;
    const getEntityCode = e => e.entityCode || e.entityId || e.id;

    let dept = expandedEmp.deptName || expandedEmp.dept || findByPattern(emp, ['deptName', 'department', 'dept']) || '-';
    let deptDisplay = (typeof dept === 'string' && dept !== '-') ? dept : (dept?.name || dept?.deptName || '-');
    if (deptDisplay === '-' || (typeof dept === 'string' && dept.length < 5)) {
        const found = departments.find(d => getDeptCode(d) === dept || getDeptName(d) === dept);
        if (found) deptDisplay = getDeptName(found);
    }

    let role = expandedEmp.roleName || expandedEmp.role || expandedEmp.designation || findByPattern(emp, ['roleName', 'designation', 'role']) || '-';
    let roleDisplay = (typeof role === 'string' && role !== '-') ? role : (role?.name || role?.roleName || role?.designation || '-');
    if (roleDisplay === '-' || (typeof role === 'string' && role.length < 5)) {
        const found = roles.find(r => getRoleCode(r) === role || getRoleName(r) === role);
        if (found) roleDisplay = getRoleName(found);
    }

    let entity = expandedEmp.entityName || expandedEmp.entity || findByPattern(emp, ['entityName', 'entity']) || '-';
    let entityDisplay = (typeof entity === 'string' && entity !== '-') ? entity : (entity?.name || entity?.entityName || '-');
    if (entityDisplay === '-' || (typeof entity === 'string' && entity.length < 5)) {
        const found = entities.find(e => getEntityCode(e) === entity || getEntityName(e) === entity);
        if (found) entityDisplay = getEntityName(found);
    }

    // 3. Education Sorting
    const sortedEducations = (expandedEmp.educations || []).sort((a, b) => {
        const yearA = parseInt(a.passoutYear || a.year || 0) || 0;
        const yearB = parseInt(b.passoutYear || b.year || 0) || 0;
        return yearA - yearB;
    });

    const sscYearVal = (function () {
        const found = expandedEmp.ssc || scavengeValue(expandedEmp, ['ssc', '10th', 'secondary']) || sortedEducations[0];
        const yr = found ? parseInt(found.passoutYear || found.year || 0) : null;
        return yr;
    })();

    const bankBlock = expandedEmp.bankDetails || {};

    const normalized = {
        ...expandedEmp,
        identityProofs,
        name: expandedEmp.fullName || expandedEmp.name || findByPattern(expandedEmp, ['name']) || 'Unknown Employee',
        phone: expandedEmp.phoneNumber || expandedEmp.phone || expandedEmp.mobileNumber || '-',
        employeeId: (expandedEmp.employeeId || expandedEmp.empId || expandedEmp.id || '').toString().trim(),
        empCode: expandedEmp.empId || expandedEmp.emp_id || expandedEmp.empNo || expandedEmp.empCode || '-',
        onboardingDate: formatDate(
            expandedEmp.dateOfOnboarding || 
            expandedEmp.onboardingDate || 
            expandedEmp.joiningDate || 
            expandedEmp.dateOfJoining ||
            expandedEmp.onboardDate ||
            expandedEmp.onboarding_date ||
            expandedEmp.joining_date ||
            expandedEmp.hiring_date ||
            expandedEmp.doj ||
            expandedEmp.date_of_onboard ||
            expandedEmp.registration_date ||
            (function() {
                // Specific search to avoid picking up the whole "onboardingForm" object
                const patterns = ['onboard_date', 'dateOfOnboarding', 'onboardingDate', 'date_of_onboarding', 'joiningDate', 'dateOfJoining', 'hiringDate', 'doj', 'registration_date'];
                const val = findByPattern(expandedEmp, patterns);
                // Ensure we don't return the whole onboardingForm or identityProofs object
                if (val && typeof val === 'object' && !Array.isArray(val) && !val.year) return null; 
                return val;
            })()
        ),
        dateOfInterview: formatDate(expandedEmp.dateOfInterview || expandedEmp.interviewDate || findByPattern(expandedEmp, ['interview'])),
        dateOfBirth: formatDate(expandedEmp.dateOfBirth || expandedEmp.dob || findByPattern(expandedEmp, ['dob', 'birth'])),
        deptName: deptDisplay,
        roleName: roleDisplay,
        entityName: entityDisplay,
        createdAt: formatDateTime(expandedEmp.createdAt || expandedEmp.createdDate || findByPattern(expandedEmp, ['createdAt', 'createdDate'])),

        bloodGroup: expandedEmp.bloodGroup || findByPattern(expandedEmp, ['bloodGroup', 'blood']) || '-',
<<<<<<< HEAD
        // Bank details: backend now nests these under `bankDetails` object; fall back to top-level for legacy
        bankName: (expandedEmp.bankDetails?.bankName) || expandedEmp.bankName || findByPattern(expandedEmp, ['bankName', 'bank']) || '',
        branchName: (expandedEmp.bankDetails?.branchName) || expandedEmp.branchName || expandedEmp.branch || findByPattern(expandedEmp, ['branchName', 'branch']) || '',
        accountNumber: (expandedEmp.bankDetails?.accountNumber) || expandedEmp.accountNumber || findByPattern(expandedEmp, ['accountNumber', 'account']) || '',
        ifscCode: (expandedEmp.bankDetails?.ifscCode) || expandedEmp.ifscCode || findByPattern(expandedEmp, ['ifscCode', 'ifsc']) || '',
        upiId: (expandedEmp.bankDetails?.upiId) || expandedEmp.upiId || findByPattern(expandedEmp, ['upiId', 'upi']) || '',
        bankDocumentType: (expandedEmp.bankDetails?.documentType) || expandedEmp.documentType || expandedEmp.bankDocumentType || findByPattern(expandedEmp, ['docType', 'documentType', 'bankDocumentType']) || 'PASSBOOK',
        documentFilePath: (expandedEmp.bankDetails?.documentFilePath) || expandedEmp.documentFilePath || expandedEmp.passbookPath || scavengePath(expandedEmp, ['passbook', 'bankPassbook', 'documentFilePath']),
=======
        bankName: expandedEmp.bankName || bankBlock.bankName || findByPattern(expandedEmp, ['bankName', 'bank']) || '',
        branchName: expandedEmp.branchName || bankBlock.branchName || expandedEmp.branch || findByPattern(expandedEmp, ['branchName', 'branch']) || '',
        accountNumber: expandedEmp.accountNumber || bankBlock.accountNumber || findByPattern(expandedEmp, ['accountNumber', 'account']) || '',
        ifscCode: expandedEmp.ifscCode || bankBlock.ifscCode || findByPattern(expandedEmp, ['ifscCode', 'ifsc']) || '',
        upiId: expandedEmp.upiId || bankBlock.upiId || findByPattern(expandedEmp, ['upiId', 'upi']) || '',
        documentType: expandedEmp.documentType || bankBlock.documentType || scavengeValue(expandedEmp, ['documentType', 'docType']) || 'PASSBOOK',
        documentFilePath: expandedEmp.documentFilePath || bankBlock.documentFilePath || expandedEmp.passbookPath || scavengePath(expandedEmp, ['documentFilePath', 'passbook', 'bankPassbook']),
        passbookPath: expandedEmp.passbookPath || bankBlock.documentFilePath || expandedEmp.documentFilePath || scavengePath(expandedEmp, ['documentFilePath', 'passbook', 'bankPassbook']),
>>>>>>> 62ebbba (commit)

        ssc: normalizeEdu(
            expandedEmp.ssc ||
            scavengeValue(expandedEmp, ['ssc', '10th', 'secondary']),
            expandedEmp,
            'ssc'
        ) || normalizeEdu(
            sortedEducations.find(e => (e.institutionName || '').toLowerCase().includes('school') || (e.educationType || '').toLowerCase() === 'ssc') || sortedEducations[0]
        ),
        intermediate: normalizeEdu(
            expandedEmp.intermediate ||
            scavengeValue(expandedEmp, ['inter', '12th', 'higherSecondary']),
            expandedEmp,
            'inter'
        ) || normalizeEdu(
            sortedEducations.find(e => (e.institutionName || '').toLowerCase().includes('college') || (e.educationType || '').toLowerCase().includes('inter') || (e.passoutYear && sscYearVal && parseInt(e.passoutYear) > sscYearVal && parseInt(e.passoutYear) <= sscYearVal + 3)) ||
            (sortedEducations.length > 1 ? sortedEducations[1] : null)
        ),
        graduation: normalizeEdu(
            expandedEmp.graduation ||
            scavengeValue(expandedEmp, ['graduation', 'degree', 'ug', 'undergrad']),
            expandedEmp,
            'grad'
        ) || normalizeEdu(
            sortedEducations.find(e => {
                const type = (e.educationType || '').toLowerCase();
                const inst = (e.institutionName || '').toLowerCase();
                return type.includes('grad') || type === 'ug' || inst.includes('university') || inst.includes('degree') || (e.passoutYear && sscYearVal && parseInt(e.passoutYear) > sscYearVal + 3);
            }) ||
            (sortedEducations.length > 2 ? sortedEducations[2] : null)
        ),
        postGraduations: (function () {
            const pgRaw = expandedEmp.postGraduations || findByPattern(expandedEmp, ['postGrad', 'masters', 'pg']);
            if (pgRaw) return (Array.isArray(pgRaw) ? pgRaw : [pgRaw]).map(normalizeEdu).filter(Boolean);
            if (sortedEducations.length > 3) return sortedEducations.slice(3).map(normalizeEdu).filter(Boolean);
            return [];
        })(),
        otherCertificates: (function () {
            const certs = expandedEmp.otherCertificates || findByPattern(expandedEmp, ['otherCert', 'certification', 'certs']);
            return (Array.isArray(certs) ? certs : (certs ? [certs] : [])).map(c => ({
                ...c,
                instituteName: c.instituteName || c.institute || c.school || findByPattern(c, ['institute', 'school', 'college']) || '-',
                certificateNumber: c.certificateNumber || c.certNumber || findByPattern(c, ['certificateNumber', 'certNumber', 'regNo']) || '-',
                certificatePath: c.certificatePath || scavengePath(c, ['certificate', 'certPath', 'file'])
            }));
        })(),

        internships: (expandedEmp.internships || findByPattern(expandedEmp, ['internship']) || []).map(int => ({
            ...int,
            companyName: int.companyName || int.company || int.employer || findByPattern(int, ['company', 'employer']) || '-',
            joiningDate: formatDate(int.joiningDate || int.joining || findByPattern(int, ['joining', 'startDate'])),
            relievingDate: formatDate(int.relievingDate || int.relieving || int.endDate || findByPattern(int, ['relieving', 'endDate'])),
            internshipId: int.internshipId || int.id || findByPattern(int, ['internshipId', 'id']) || '-',
            duration: int.duration || findByPattern(int, ['duration', 'period']) || '-',
            offerLetterPath: int.offerLetterPath || scavengePath(int, ['offerLetter', 'offer']),
            experienceCertificatePath: int.experienceCertificatePath || int.relievingLetterPath || scavengePath(int, ['experienceCertificate', 'experienceCert', 'relievingLetter', 'certificate'])
        })),
        workExperiences: (expandedEmp.workExperiences || findByPattern(expandedEmp, ['workHistory', 'workExperience', 'experience']) || []).map(work => ({
            ...work,
            companyName: work.companyName || work.company || work.employer || findByPattern(work, ['company', 'employer']) || '-',
            yearsOfExp: work.yearsOfExp || work.years || work.duration || findByPattern(work, ['years', 'duration', 'experience']) || '-',
            offerLetterPath: work.offerLetterPath || scavengePath(work, ['offerLetter', 'offer']),
            relievingLetterPath: work.relievingLetterPath || scavengePath(work, ['relievingLetter', 'relieving']),
            payslipsPath: work.payslipsPath || scavengePath(work, ['payslip', 'salarySlip']),
            experienceCertificatePath: work.experienceCertificatePath || work.experienceCert || scavengePath(work, ['experienceCertificate', 'experienceCert', 'certificate'])
        })),

        fathersName: expandedEmp.fathersName || scavengeValue(expandedEmp, ['fatherName', 'fathersName']),
        fathersPhone: expandedEmp.fathersPhone || scavengeValue(expandedEmp, ['fatherPhone', 'fathersPhone']),
        mothersName: expandedEmp.mothersName || scavengeValue(expandedEmp, ['motherName', 'mothersName']),
        mothersPhone: expandedEmp.mothersPhone || scavengeValue(expandedEmp, ['motherPhone', 'mothersPhone']),
        emergencyContactName: expandedEmp.emergencyContactName || scavengeValue(expandedEmp, ['emergencyName', 'emergencyContactName']),
        emergencyRelationship: expandedEmp.emergencyRelationship || scavengeValue(expandedEmp, ['emergencyRel', 'emergencyRelationship']),
        emergencyNumber: expandedEmp.emergencyNumber || scavengeValue(expandedEmp, ['emergencyPhone', 'emergencyNumber']),

        presentAddress: expandedEmp.presentAddress || scavengeValue(expandedEmp, ['presentAddress', 'presAddress']),
        permanentAddress: expandedEmp.permanentAddress || scavengeValue(expandedEmp, ['permanentAddress', 'permAddress']),

<<<<<<< HEAD
        // Hybrid support for legacy and new bank document paths
        passbookPath: expandedEmp.documentFilePath || expandedEmp.passbookPath || scavengePath(expandedEmp, ['passbook', 'bankPassbook', 'documentFilePath']),
=======
>>>>>>> 62ebbba (commit)
        panPath: expandedEmp.panPath || findProof(expandedEmp, 'PAN')?.filePath || scavengePath(expandedEmp, ['pan_card', 'pan_file', 'panProof']),
        aadharPath: expandedEmp.aadharPath || findProof(expandedEmp, 'AADHAR')?.filePath || scavengePath(expandedEmp, ['aadhar_card', 'aadhar_file', 'aadharProof']),
        photoPath: expandedEmp.photoPath || expandedEmp.passportPhotoPath || findProof(expandedEmp, 'PHOTO')?.filePath || findProof(expandedEmp, 'PASSPORT')?.filePath || scavengePath(expandedEmp, ['photo', 'passportPhoto', 'profilePhoto', 'profilePic', 'avatar', 'passport_photo', 'profile_photo', 'passport_file', 'Photo', 'Image', 'face']),
        voterPath: expandedEmp.voterPath || findProof(expandedEmp, 'VOTER')?.filePath || scavengePath(expandedEmp, ['voter', 'voterId', 'voter_file', 'voterProof', 'voter_proof']),
        passportPath: expandedEmp.passportPath || findProof(expandedEmp, 'PASSPORT')?.filePath || scavengePath(expandedEmp, ['passport', 'passportDoc', 'passport_document', 'passport_file', 'passportProof', 'passport_proof']),

        panNumber: (() => {
            if (expandedEmp.identityProofs?.length > 0 && expandedEmp.identityProofs[0].panNumber) return expandedEmp.identityProofs[0].panNumber;
            const looksLikeFile = (v) => typeof v === 'string' && /\.(png|jpg|jpeg|gif|webp|pdf|avif|jfif|bmp|svg|tiff|avif)$/i.test(v);
            const proof = findProof(expandedEmp, 'PAN');
            const raw = expandedEmp.panNumber || proof?.panNumber || proof?.documentNumber || scavengeValue(expandedEmp, ['panNumber', 'panId', 'panNo', 'pan_number', 'pan']);
            if (!raw || typeof raw !== 'string') return raw || null;
            const s = raw.trim();
            if (looksLikeFile(s) || s.length > 25 || s.includes('/') || s.includes('\\')) return null;
            return s;
        })(),
        aadharNumber: (() => {
            if (expandedEmp.identityProofs?.length > 0 && expandedEmp.identityProofs[0].aadhaarNumber) return expandedEmp.identityProofs[0].aadhaarNumber;
            const looksLikeFile = (v) => typeof v === 'string' && /\.(png|jpg|jpeg|gif|webp|pdf|avif|jfif|bmp|svg|tiff|avif)$/i.test(v);
<<<<<<< HEAD
            const proof = findProof(expandedEmp, 'AADHAR') || findProof(expandedEmp, 'AADHAAR');
            const raw = expandedEmp.aadharNumber || expandedEmp.aadhaarNumber || proof?.aadhaarNumber || proof?.aadharNumber || proof?.documentNumber || scavengeValue(expandedEmp, ['aadhaarNumber', 'aadharNumber', 'aadharId', 'aadharNo', 'aadhar_number', 'aadhar', 'aadhaar']);
=======
            const raw = expandedEmp.aadhaarNumber || expandedEmp.aadharNumber || expandedEmp.aadharProof?.aadhaarNumber || findProof(expandedEmp, 'AADHAR')?.documentNumber || findProof(expandedEmp, 'AADHAR')?.aadhaarNumber || scavengeValue(expandedEmp, ['aadhaarNumber', 'aadharNumber', 'aadharId', 'aadharNo', 'aadhar_number', 'aadhar']);
>>>>>>> 62ebbba (commit)
            if (!raw || typeof raw !== 'string') return raw || null;
            const s = raw.trim();
            if (looksLikeFile(s) || s.length > 25 || s.includes('/') || s.includes('\\')) return null;
            return s;
        })(),

        educationCount: 0, // placeholder, calculated below
        internshipCount: 0, // placeholder
        workExperienceCount: 0, // placeholder
        identityProofCount: identityProofs.length
    };

    // Recalculate counts based on normalized data
    normalized.educationCount = (normalized.ssc ? 1 : 0) + 
                             (normalized.intermediate ? 1 : 0) + 
                             (normalized.graduation ? 1 : 0) + 
                             (normalized.postGraduations?.length || 0) + 
                             (normalized.otherCertificates?.length || 0);
    normalized.internshipCount = (normalized.internships || []).length;
    normalized.workExperienceCount = (normalized.workExperiences || []).length;

    console.log("✅ [DEBUG] normalizeEmployee Normalized Output:", {
        id: normalized.id,
        ssc: !!normalized.ssc,
        voter: !!normalized.voterPath,
        passport: !!normalized.passportPath
    });

    return normalized;
};

import { buildFileUrl } from './file';

/**
 * Build a safe, backend-compatible image URL
 */
// export const getFileUrl = (pathOrObj) => buildFileUrl(pathOrObj);
export const getFileUrl = (path) => {
    if (!path) return "/placeholder.png";

    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const cleanPath = path
        .replace(/\\/g, "/")
        .replace(/^\/+/, "");

    return `${BASE_URL}/${cleanPath}`;
};

/**
 * Get proof image URL from normalized employee
 */
export const getProofUrl = (normalizedEmployee, type) => {
    if (!normalizedEmployee?.identityProofs) return '/no-image.png';

    const target = type.toUpperCase();
    // hyper-robust: case-insensitive and substring match
    const found = normalizedEmployee.identityProofs.find(p => {
        const pt = ((p.proofType || p.type || '')).toUpperCase();
        return pt.includes(target) || target.includes(pt);
    });

    const proof = found || normalizedEmployee.identityProofs[0];
    if (!proof?.filePath) return '/no-image.png';

    return buildFileUrl(proof.filePath);
};
