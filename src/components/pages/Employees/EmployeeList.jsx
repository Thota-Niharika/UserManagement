import React, { useState, useEffect } from 'react';
import {
  Building2,
  Mail,
  Phone,
  Calendar,
  ExternalLink,
  ShieldCheck,
  ShieldAlert,
  Eye,
  Edit3,
  Trash2,
  Search,
  Filter,
  X,
  ChevronDown,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { hasWorkingDaysPassed } from '../../../utils/dateUtils';
import AddEmployeeModal from './AddEmployeeModal';
import EditEmployeeModal from './EditEmployeeModal';
import ViewEmployeeModal from './ViewEmployeeModal';
import apiService from '../../../services/api';
import Toast from '../../common/Toast';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    department: 'All',
    status: 'All',
    entity: 'All',
    assignmentStatus: 'All'
  });

  const [departments, setDepartments] = useState([]);
  const [roles, setRoles] = useState([]);
  const [entities, setEntities] = useState([]);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const getDeptName = d => d.deptName || d.name || d.departmentName || d;
  const getDeptCode = d => d.deptCode || d.deptId || d.id;
  const getRoleName = r => r.roleName || r.name || r;
  const getRoleCode = r => r.roleCode || r.roleId || r.id;
  const getEntityName = e => e.entityName || e.name || e;
  const getEntityCode = e => e.entityCode || e.entityId || e.id;

  const formatDate = (date) => {
    if (!date) return '-';
    // Handle Java LocalDate array [year, month, day]
    if (Array.isArray(date)) {
      const [year, month, day] = date;
      return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    }
    // Handle string formatting - be smart about timestamps vs calendar dates
    if (typeof date === 'string') {
      if (date.includes('T')) {
        // If it's a timestamp, try to parse it properly (treating as UTC if no offset given)
        let d;
        if (date.endsWith('Z')) {
          d = new Date(date);
        } else {
          // Force UTC interpretation to prevent 1-day shift in local parse
          d = new Date(date + 'Z');
        }

        if (!isNaN(d.getTime())) {
          return d.toLocaleDateString('en-CA'); // YYYY-MM-DD locally
        }
        return date.split('T')[0];
      }
      return date;
    }
    return String(date);
  };

  const formatDateTime = (date) => {
    if (!date) return { date: '-', time: '-' };

    // Handle Java LocalDateTime array [year, month, day, hour, minute]
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
            date: d.toLocaleDateString('en-CA'), // YYYY-MM-DD
            time: d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) // HH:MM
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

  const normalizeEmployee = (emp, freshDepts = null, freshRoles = null, freshEntities = null) => {
    if (!emp) return null;

    // Use passed lists or fall back to component state
    const dList = freshDepts || departments;
    const rList = freshRoles || roles;
    const eList = freshEntities || entities;

    // --- DEBUG LOGGING (Temporary) ---
    if (emp.name || emp.fullName) {
      console.log(`[DEBUG] Normalizing Employee: ${emp.name || emp.fullName}`, emp);
    }

    // --- PRE-PARSING ---
    // Try to parse ANY string that looks like JSON to expand the search space
    let expandedEmp = { ...emp };
    Object.keys(emp).forEach(key => {
      const val = emp[key];
      if (typeof val === 'string' && val.length > 2 && (val.trim().startsWith('{') || val.trim().startsWith('['))) {
        try {
          const parsed = JSON.parse(val);
          if (parsed && typeof parsed === 'object') {
            if (!Array.isArray(parsed)) {
              expandedEmp = { ...expandedEmp, ...parsed };
            }
          }
        } catch (e) { }
      } else if (val && typeof val === 'object' && !Array.isArray(val)) {
        // Also merge actual objects into the flat search space
        expandedEmp = { ...expandedEmp, ...val };
      }
    });

    const findByPattern = (obj, patterns) => {
      if (!obj || typeof obj !== 'object') return null;

      // 1. Direct search (Keys)
      for (const key of Object.keys(obj)) {
        if (patterns.some(p => key.toLowerCase().includes(p.toLowerCase()))) {
          let val = obj[key];
          if (typeof val === 'string' && (val.trim().startsWith('{') || val.trim().startsWith('['))) {
            try { val = JSON.parse(val); } catch (e) { }
          }
          // IGNORE falsy values, empty strings, and dashes to allow deeper search
          if (val !== null && val !== undefined && val !== '-' && val !== '') {
            if (typeof val === 'string' && val.trim() === '') return null; // Continue search
            return val;
          }
        }
      }

      // 2. Recursive search
      for (const key of Object.keys(obj)) {
        const val = obj[key];
        if (val && typeof val === 'object') {
          if (Array.isArray(val)) {
            // Recurse into arrays
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

    // Helper: Specifically find a proof object by type name in any array/object
    const findProof = (obj, typeName) => {
      if (!obj || typeof obj !== 'object') return null;

      // If it's an array (likely identityProofs)
      if (Array.isArray(obj)) {
        return obj.find(p => p.proofType === typeName || p.type === typeName) || null;
      }

      // If it's the root object, look for a field that is the array
      const proofs = obj.identityProofs || findByPattern(obj, ['identityProofs', 'proofs', 'identities']);
      if (Array.isArray(proofs)) {
        const found = proofs.find(p => p.proofType === typeName || p.type === typeName);
        if (found) return found;
      }

      // Fallback: search for a key that contains the type name and looks like a proof
      return findByPattern(obj, [typeName + 'Proof', typeName + '_proof', typeName]);
    };

    // Helper: Specifically scavenge for a string path
    const scavengePath = (obj, patterns) => {
      const val = findByPattern(obj, patterns);
      if (typeof val === 'string') return val;
      if (val && typeof val === 'object') {
        // If it's an object, look for commonly used path keys inside it
        return val.filePath || val.path || val.certificatePath || val.panPath || val.aadharPath || val.photoPath || val.url || findByPattern(val, ['path', 'url', 'file']);
      }
      return null;
    };

    // Helper: Robustly normalize an education/internship object
    const normalizeEdu = (item) => {
      if (!item || item === '-') return null;
      let parsed = item;
      if (typeof item === 'string' && (item.trim().startsWith('{') || item.trim().startsWith('['))) {
        try { parsed = JSON.parse(item); } catch (e) { }
      }
      if (!parsed || typeof parsed !== 'object' || parsed === '-') return null;

      // Extract raw values using patterns
      const rawInst = parsed.institutionName || parsed.school || parsed.college || parsed.instituteName || parsed.institute || findByPattern(parsed, ['institute', 'school', 'college', 'university', 'board', 'institution', 'collage', 'acadamy']);
      const rawYear = parsed.passoutYear || parsed.year || parsed.yop || parsed.completionYear || findByPattern(parsed, ['year', 'passout', 'date', 'passing', 'completion', 'duration']);
      const rawScore = parsed.percentageCgpa || parsed.percentage || parsed.cgpa || parsed.grade || parsed.score || parsed.marks || findByPattern(parsed, ['percentage', 'cgpa', 'marks', 'score', 'grade']);

      // Ensure we have an object to work with
      const result = {
        ...parsed,
        institutionName: rawInst || '-',
        passoutYear: rawYear || '-',
        percentageCgpa: rawScore || '-',
        certificatePath: parsed.certificatePath || scavengePath(parsed, ['certificate', 'certPath', 'doc', 'file', 'image']),
        marksMemoPath: parsed.marksMemoPath || scavengePath(parsed, ['marksMemo', 'marks', 'memo', 'transcript'])
      };

      // Final check: if all major fields are "-", it's essentially empty
      if (result.institutionName === '-' && result.passoutYear === '-' && result.percentageCgpa === '-') return null;
      return result;
    };

    // 1. Department Mapping
    let dept = emp.deptName || emp.departmentName || findByPattern(emp, ['deptName', 'department', 'dept', 'dept_name']) || '-';
    let deptDisplay = (typeof dept === 'string' && dept !== '-') ? dept : (dept?.name || dept?.deptName || '-');

    // If we have a code or ID, look up in master list
    if (deptDisplay === '-' || (typeof dept === 'string' && dept.length < 5)) {
      const found = dList.find(d => getDeptCode(d) === dept || getDeptName(d) === dept);
      if (found) deptDisplay = getDeptName(found);
    }

    // 2. Role Mapping
    let role = emp.roleName || emp.designation || findByPattern(emp, ['roleName', 'designation', 'role', 'role_name']) || '-';
    let roleDisplay = (typeof role === 'string' && role !== '-') ? role : (role?.name || role?.roleName || role?.designation || '-');

    if (roleDisplay === '-' || (typeof role === 'string' && role.length < 5)) {
      const found = rList.find(r => getRoleCode(r) === role || getRoleName(r) === role);
      if (found) roleDisplay = getRoleName(found);
    }

    // 3. Entity Mapping
    let entity = emp.entityName || findByPattern(emp, ['entityName', 'entity', 'entity_name']) || '-';
    let entityDisplay = (typeof entity === 'string' && entity !== '-') ? entity : (entity?.name || entity?.entityName || '-');

    if (entityDisplay === '-' || (typeof entity === 'string' && entity.length < 5)) {
      const found = eList.find(e => getEntityCode(e) === entity || getEntityName(e) === entity);
      if (found) entityDisplay = getEntityName(found);
    }

    // 4. Date Scanning
    let rawOnboarding = expandedEmp.dateOfOnboarding || expandedEmp.onboardingDate || expandedEmp.onboarding_date || expandedEmp.dateOfOnboard || expandedEmp.onboard_date;
    if (!rawOnboarding) {
      rawOnboarding = findByPattern(expandedEmp, ['onboard']);
    }

    let rawInterview = expandedEmp.dateOfInterview || expandedEmp.interviewDate || expandedEmp.interview_date;
    if (!rawInterview) {
      rawInterview = findByPattern(expandedEmp, ['interview']);
    }

    let rawDob = expandedEmp.dateOfBirth || expandedEmp.dob || expandedEmp.date_of_birth;
    if (!rawDob) {
      rawDob = findByPattern(expandedEmp, ['dob', 'birth']);
    }

    // Sort educations by year (ascending) to correctly map SSC -> Inter -> Grad
    const sortedEducations = (expandedEmp.educations || []).sort((a, b) => {
      const yearA = parseInt(a.passoutYear || a.year || 0) || 0;
      const yearB = parseInt(b.passoutYear || b.year || 0) || 0;
      return yearA - yearB;
    });

    const normalized = {
      ...expandedEmp,
      name: expandedEmp.fullName || expandedEmp.name || findByPattern(expandedEmp, ['name']) || '',
      phone: expandedEmp.phoneNumber || expandedEmp.phone || expandedEmp.mobileNumber || '',
      employeeId: expandedEmp.id || expandedEmp.employeeId || expandedEmp.empCode || '',
      onboardingDate: formatDate(rawOnboarding),
      dateOfInterview: formatDate(rawInterview),
      dateOfBirth: formatDate(rawDob),
      dob: formatDate(rawDob),
      deptName: deptDisplay || dept || '-',
      roleName: roleDisplay || role || '-',
      entityName: entityDisplay || entity || '-',
      createdAt: formatDateTime(expandedEmp.createdAt || expandedEmp.createdDate || expandedEmp.created_at || expandedEmp.creationDate || expandedEmp.dateCreated || findByPattern(expandedEmp, ['createdAt', 'createdDate', 'created_at', 'creationDate', 'dateCreated'])),
      // --- AGGRESSIVE DATA SCAVENGING ---
      fullName: expandedEmp.fullName || expandedEmp.name || findByPattern(expandedEmp, ['fullName', 'name']),
      phoneNumber: expandedEmp.phoneNumber || expandedEmp.phone || expandedEmp.mobileNumber,
      bloodGroup: expandedEmp.bloodGroup || findByPattern(expandedEmp, ['bloodGroup', 'blood']) || '-',
      presentAddress: expandedEmp.presentAddress || findByPattern(expandedEmp, ['presentAddress', 'presAddress', 'presAddr']) || '',
      permanentAddress: expandedEmp.permanentAddress || findByPattern(expandedEmp, ['permanentAddress', 'permAddress', 'permAddr']) || '',
      fathersName: expandedEmp.fathersName || findByPattern(expandedEmp, ['fatherName', 'fathersName', 'father']) || '',
      fathersPhone: expandedEmp.fathersPhone || findByPattern(expandedEmp, ['fatherPhone', 'fathers_phone', 'father_phone']) || '',
      mothersName: expandedEmp.mothersName || findByPattern(expandedEmp, ['motherName', 'mothersName', 'mother']) || '',
      mothersPhone: expandedEmp.mothersPhone || findByPattern(expandedEmp, ['motherPhone', 'mothers_phone', 'mother_phone']) || '',
      emergencyContactName: expandedEmp.emergencyContactName || findByPattern(expandedEmp, ['emergencyContactName', 'emergencyName', 'emergencyContact']) || '',
      emergencyNumber: expandedEmp.emergencyNumber || findByPattern(expandedEmp, ['emergencyNumber', 'emergencyPhone', 'emergencyMobile']) || '',
      emergencyRelationship: expandedEmp.emergencyRelationship || findByPattern(expandedEmp, ['emergencyRelationship', 'emergencyRel']) || '',
      bankName: expandedEmp.bankName || findByPattern(expandedEmp, ['bankName', 'bank']) || '',
      branchName: expandedEmp.branchName || findByPattern(expandedEmp, ['branchName', 'branch']) || '',
      accountNumber: expandedEmp.accountNumber || findByPattern(expandedEmp, ['accountNumber', 'accNum', 'account']) || '',
      ifscCode: expandedEmp.ifscCode || findByPattern(expandedEmp, ['ifscCode', 'ifsc']) || '',
      upiId: expandedEmp.upiId || findByPattern(expandedEmp, ['upiId', 'upi']) || '',

      ssc: normalizeEdu(expandedEmp.ssc || findByPattern(expandedEmp, ['ssc', 'matriculation', '10th_standard']) || (sortedEducations?.[0])),
      intermediate: normalizeEdu(expandedEmp.intermediate || findByPattern(expandedEmp, ['intermediate', 'hsc', '12th', 'plus_two']) || (sortedEducations?.[1])),
      graduation: normalizeEdu(expandedEmp.graduation || findByPattern(expandedEmp, ['graduation', 'degree', 'bachelors', 'undergrad']) || (sortedEducations?.[2])),
      postGraduations: (function () {
        const pgRaw = expandedEmp.postGraduations || findByPattern(expandedEmp, ['postGrad', 'masters', 'pg']);
        if (pgRaw) return (Array.isArray(pgRaw) ? pgRaw : [pgRaw]).map(normalizeEdu).filter(Boolean);
        // Fallback: if we used indices 0,1,2 for ssc/inter/grad, any remaining in 'educations' are PG or other
        if (sortedEducations && sortedEducations.length > 3) {
          return sortedEducations.slice(3).map(normalizeEdu).filter(Boolean);
        }
        return [];
      })(),
      otherCertificates: (function () {
        // ... (existing)
        const otherRaw = expandedEmp.otherCertificates || findByPattern(expandedEmp, ['otherCertificates', 'otherCerts', 'certifications']);
        return (Array.isArray(otherRaw) ? otherRaw : (otherRaw ? [otherRaw] : [])).map(cert => ({
          ...cert,
          certificatePath: cert.certificatePath || scavengePath(cert, ['certificate', 'path', 'file'])
        })).filter(Boolean);
      })(),
      internships: (expandedEmp.internships || findByPattern(expandedEmp, ['internships', 'intern']) || []).map(int => ({
        ...int,
        offerLetterPath: int.offerLetterPath || scavengePath(int, ['offer']),
        experienceCertificatePath: int.experienceCertificatePath || scavengePath(int, ['cert', 'relieving', 'exp'])
      })),
      workExperiences: (expandedEmp.workExperiences || findByPattern(expandedEmp, ['workExperiences', 'workHistory', 'jobHistory', 'experience']) || []).map(work => ({
        ...work,
        offerLetterPath: work.offerLetterPath || scavengePath(work, ['offer']),
        relievingLetterPath: work.relievingLetterPath || scavengePath(work, ['relieving']),
        payslipsPath: work.payslipsPath || scavengePath(work, ['payslip', 'payslips']),
        experienceCertificatePath: work.experienceCertificatePath || scavengePath(work, ['cert', 'exp'])
      })),

      // Explicit Document Proofs (for Document Viewer)
      panProof: (function () {
        const p = findProof(expandedEmp, 'PAN');
        if (!p) return null;
        return { ...p, panPath: p.panPath || p.filePath || scavengePath(p, ['path']) };
      })(),
      aadharProof: (function () {
        const a = findProof(expandedEmp, 'AADHAR');
        if (!a) return null;
        return { ...a, aadharPath: a.aadharPath || a.filePath || scavengePath(a, ['path']) };
      })(),
      voterProof: (function () {
        const v = findProof(expandedEmp, 'VOTER');
        if (!v) return null;
        return { ...v, voterPath: v.voterPath || v.filePath || scavengePath(v, ['path']) };
      })(),
      passportProof: (function () {
        const p = findProof(expandedEmp, 'PASSPORT');
        if (!p) return null;
        return { ...p, passportPath: p.passportPath || p.filePath || scavengePath(p, ['path']) };
      })(),

      // Explicit Document Paths (aligned with EmployeeForm.java)
      passbookPath: expandedEmp.passbookPath ||
        scavengePath(expandedEmp, ['passbook', 'bankPassbook', 'passbook_file', 'passbookPath']) ||
        emp.passbookPath ||
        emp.employeeForm?.passbookPath ||
        emp.onboardingForm?.passbookPath ||
        expandedEmp.onboardingForm?.passbookPath || '',

      // Identity Proof paths - extracted from identityProofs list (EmployeeForm has List<IdentityProof> with proofType + filePath)
      panPath: (function () {
        const proof = findProof(expandedEmp, 'PAN');
        return expandedEmp.panPath || proof?.filePath || proof?.panPath || '';
      })(),
      aadharPath: (function () {
        const proof = findProof(expandedEmp, 'AADHAR');
        return expandedEmp.aadharPath || proof?.filePath || proof?.aadharPath || '';
      })(),
      photoPath: (function () {
        const proof = findProof(expandedEmp, 'PHOTO');
        return expandedEmp.photoPath || proof?.filePath || proof?.photoPath || '';
      })(),
      passportPath: (function () {
        const proof = findProof(expandedEmp, 'PASSPORT');
        return expandedEmp.passportPath || proof?.filePath || proof?.passportPath || '';
      })(),
      voterPath: (function () {
        const proof = findProof(expandedEmp, 'VOTER');
        return expandedEmp.voterPath || proof?.filePath || proof?.voterPath || '';
      })(),

      // Smart Summary Counts
      educationCount: (expandedEmp.ssc || findByPattern(expandedEmp, ['ssc']) ? 1 : 0) +
        (expandedEmp.intermediate || findByPattern(expandedEmp, ['intermediate']) ? 1 : 0) +
        (expandedEmp.graduation || findByPattern(expandedEmp, ['graduation']) ? 1 : 0) +
        (expandedEmp.postGraduations?.length || (findByPattern(expandedEmp, ['postGrad'])?.length) || 0) ||
        (expandedEmp.educations?.length || 0),
      internshipCount: expandedEmp.internships?.length || (findByPattern(expandedEmp, ['internships'])?.length) || 0,
      workExperienceCount: expandedEmp.workExperiences?.length || (findByPattern(expandedEmp, ['workExperiences'])?.length) || 0,
      identityProofCount: expandedEmp.identityProofs?.length || (findByPattern(expandedEmp, ['identityProof'])?.length) || 0
    };

    // --- DEBUG LOGGING ---
    if (normalized.name) {
      console.log(`[DEBUG] Final Normalized Passbook for ${normalized.name}:`, normalized.passbookPath);
      if (!normalized.passbookPath) {
        console.warn(`[DEBUG] Passbook MISSING for ${normalized.name}. expandedEmp keys:`, Object.keys(expandedEmp));
      }
    }

    // Final attempt - check nested forms (backend uses both aliases)
    const forms = [emp.employeeForm, emp.onboardingForm, expandedEmp.onboardingForm].filter(Boolean);
    forms.forEach(f => {
      if (normalized.onboardingDate === '-') {
        const d = f.dateOfOnboarding || f.onboardingDate;
        if (d) normalized.onboardingDate = formatDate(d);
      }
      if (normalized.dob === '-') {
        const d = f.dob || f.dateOfBirth;
        if (d) normalized.dob = formatDate(d);
      }
      if (!normalized.bankName) normalized.bankName = f.bankName || '';
      if (!normalized.accountNumber) normalized.accountNumber = f.accountNumber || '';
      if (!normalized.passbookPath) normalized.passbookPath = f.passbookPath || f.passbook_file || '';

      if (f.identityProofs && f.identityProofs.length > 0) {
        f.identityProofs.forEach(proof => {
          const type = (proof.proofType || '').toUpperCase();
          const path = proof.filePath || '';
          if (type === 'PAN' && !normalized.panPath) normalized.panPath = path;
          if (type === 'AADHAR' && !normalized.aadharPath) normalized.aadharPath = path;
          if (type === 'PHOTO' && !normalized.photoPath) normalized.photoPath = path;
          if (type === 'PASSPORT' && !normalized.passportPath) normalized.passportPath = path;
          if (type === 'VOTER' && !normalized.voterPath) normalized.voterPath = path;
        });
      }
    });

    // 5. Dynamic ID Logic
    let displayId = normalized.employeeId;
    if (emp.status?.toLowerCase() === 'active' && hasWorkingDaysPassed(normalized.onboardingDate, 10)) {
      displayId = `EMP/${displayId}`;
    }

    // Sync with Assets assignment from localStorage
    const assignments = JSON.parse(localStorage.getItem('asset_assignments') || '[]');
    const myAssignment = assignments.find(a => a.employeeName === normalized.name);

    return {
      ...normalized,
      displayId,
      hasAssets: !!myAssignment,
      assignedAssetName: myAssignment ? myAssignment.assetName : null,
      assignedAssetDate: myAssignment ? myAssignment.assignedDate : null
    };
  };

  // Fetch all necessary data
  const fetchData = async () => {
    const ensureArray = (data) => {
      if (Array.isArray(data)) return data;
      if (data && typeof data === 'object') {
        if (Array.isArray(data.data)) return data.data;
        if (Array.isArray(data.content)) return data.content;
        if (Array.isArray(data.employees)) return data.employees;
        if (Array.isArray(data.employeeList)) return data.employeeList;
      }
      return [];
    };

    // Load everything in parallel
    try {
      const [deptRes, roleRes, entRes, empRes] = await Promise.all([
        apiService.getDepartments(),
        apiService.getRoles(),
        apiService.getEntities(),
        apiService.getEmployeesWithDetails()
      ]);

      const freshDepts = ensureArray(deptRes);
      const freshRoles = ensureArray(roleRes);
      const freshEntities = ensureArray(entRes);
      const freshEmps = ensureArray(empRes);

      setDepartments(freshDepts);
      setRoles(freshRoles);
      setEntities(freshEntities);

      // Pass fresh master lists to normalizeEmployee to avoid state stale-ness
      setEmployees(freshEmps.map(emp => normalizeEmployee(emp, freshDepts, freshRoles, freshEntities)));

    } catch (e) {
      console.error('Failed to fetch data:', e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddEmployee = async (newEmployee) => {
    try {
      const createdEmployee = await apiService.createEmployee(newEmployee);
      setEmployees([...employees, normalizeEmployee(createdEmployee)]);
      setIsAddModalOpen(false);
      setToast({
        show: true,
        message: 'Employee added successfully! An onboarding link has been sent to their email.',
        type: 'success'
      });
    } catch (error) {
      console.error('Failed to create employee:', error);
      setToast({
        show: true,
        message: 'Failed to add employee: ' + error.message,
        type: 'error'
      });
    }
  };

  const handleUpdateEmployee = async (updatedEmployee) => {
    try {
      // Ensure we have the ID from the selected employee
      const empId = selectedEmployee.id || selectedEmployee.employeeId;
      const updated = await apiService.updateEmployee(empId, updatedEmployee);
      setEmployees(prev => prev.map(emp => (emp.id || emp.employeeId) === empId ? normalizeEmployee(updated) : emp));
      setIsEditModalOpen(false);
      setSelectedEmployee(null);
      setToast({ show: true, message: 'Employee updated successfully!', type: 'success' });
    } catch (error) {
      setToast({ show: true, message: 'Failed to update: ' + error.message, type: 'error' });
    }
  };

  /* Removed Add Dept/Role/Entity handlers as they are moved to Settings */

  const handleApproveOnboarding = (emp) => {
    setSelectedEmployee(emp);
    setIsReviewModalOpen(true);
  };

  const handleRejectOnboarding = (emp) => {
    setSelectedEmployee(emp);
    setIsReviewModalOpen(true);
  };

  const handleReviewSubmit = async (reviewData) => {
    try {
      const empId = selectedEmployee.id || selectedEmployee.employeeId;
      const response = await apiService.reviewOnboarding({
        employeeId: empId,
        status: reviewData.status,
        remarks: reviewData.remarks,
        rejectedDocuments: reviewData.rejectedDocuments || []
      });

      setToast({
        show: true,
        message: `Onboarding ${reviewData.status.toLowerCase()} successfully!`,
        type: 'success'
      });

      setIsReviewModalOpen(false);
      setIsViewModalOpen(false);
      fetchData(); // Refresh list to see updated status
    } catch (error) {
      console.error('Failed to submit review:', error);
      setToast({
        show: true,
        message: 'Failed to submit review: ' + error.message,
        type: 'error'
      });
    }
  };

  const handleDeleteEmployee = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await apiService.deleteEmployee(id);
        setEmployees(employees.filter(emp => (emp.id || emp.employeeId) !== id));
        setToast({ show: true, message: 'Employee deleted successfully!', type: 'success' });
      } catch (error) {
        setToast({ show: true, message: 'Failed to delete: ' + error.message, type: 'error' });
      }
    }
  };

  const handleViewProfile = async (emp) => {
    // 🕵️ Speculative Detailed Fetch: Some lists are summary-only
    try {
      const empId = emp.id || emp.employeeId;
      if (empId) {
        // Try fetching COMPREHENSIVE data first (from OnboardingController which has the full DTO)
        let fullDetails = null;
        try {
          fullDetails = await apiService.getOnboardingDetail(empId);
          console.log(`[DEBUG] Fetched COMPREHENSIVE details for ${empId} from Onboarding API:`, fullDetails);
        } catch (err) {
          console.warn(`[DEBUG] Onboarding API fetch failed for ${empId}, falling back to Employees API:`, err);
          fullDetails = await apiService.get(`/employees/${empId}`);
        }

        if (fullDetails) {
          const normalizedDetail = normalizeEmployee(fullDetails);
          setSelectedEmployee(normalizedDetail);
          setIsViewModalOpen(true);
          return;
        }
      }
    } catch (e) {
      console.warn("Detailed employee fetch failed (Standard for list-only backends):", e);
    }

    // Fallback: Use list data if detail fetch fails
    setSelectedEmployee(emp);
    setIsViewModalOpen(true);
  };

  const handleEditEmployee = (emp) => {
    setSelectedEmployee(emp);
    setIsEditModalOpen(true);
  };

  const handleRejectDocument = async (emp, fieldKey, label) => {
    if (window.confirm(`Are you sure you want to reject the "${label}" for ${emp.name}? This will trigger a re-onboarding email where this field will be empty.`)) {
      try {
        const empId = emp.id || emp.employeeId;
        await apiService.rejectOnboardingDocument(empId, fieldKey, label);
        setToast({ show: true, message: `Document "${label}" rejected successfully. A re-onboarding email has been sent to ${emp.name}.`, type: 'success' });
        fetchData(); // Refresh list to see potentially empty fields or updated status
        setIsViewModalOpen(false); // Close view to refresh state when reopened
      } catch (error) {
        console.error('Failed to reject document:', error);
        setToast({ show: true, message: 'Failed to reject document: ' + error.message, type: 'error' });
      }
    }
  };

  const filteredEmployees = (Array.isArray(employees) ? employees : []).filter(emp => {
    if (!emp) return false;
    const matchesSearch =
      (emp.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(emp.employeeId || emp.empCode || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (emp.roleName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (emp.deptName || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = activeFilters.department === 'All' || emp.deptName === activeFilters.department;
    const matchesStatus = activeFilters.status === 'All' || emp.status?.toLowerCase() === activeFilters.status.toLowerCase();
    const matchesEntity = activeFilters.entity === 'All' || emp.entityName === activeFilters.entity;
    const matchesAssignment = activeFilters.assignmentStatus === 'All' ||
      (activeFilters.assignmentStatus === 'Assigned' ? emp.hasAssets : !emp.hasAssets);
    return matchesSearch && matchesDept && matchesStatus && matchesEntity && matchesAssignment;
  });

  const clearFilter = (key) => {
    setActiveFilters(prev => ({ ...prev, [key]: 'All' }));
  };

  const hasActiveFilters = Object.values(activeFilters).some(v => v !== 'All');

  const statusesList = ['All', 'Active', 'Onboarding', 'Inactive'];
  const departmentsList = ['All', ...departments.map(getDeptName)];
  const entitiesList = ['All', ...entities.map(getEntityName)];

  return (
    <div className="employees-page">
      <header className="page-header">
        <div className="header-title">
          <h1>Employee Directory</h1>
          <p>Global workforce management and HR records.</p>
        </div>
        <div className="header-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'flex-end' }}>
          <button className="primary-btn" onClick={() => setIsAddModalOpen(true)}>Add Employee</button>
        </div>
      </header>

      {/* Modals for Dept, Role, Entity moved to Settings module */}

      <ViewEmployeeModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        employee={selectedEmployee}
        onApprove={(emp) => {
          handleApproveOnboarding(emp);
          setIsViewModalOpen(false);
        }}
        onReject={(emp) => {
          handleRejectOnboarding(emp);
          setIsViewModalOpen(false);
        }}
        onRejectDocument={handleRejectDocument}
      />

      <AddEmployeeModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddEmployee}
        departments={departments}
        roles={roles}
        entities={entities}
      />

      <EditEmployeeModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedEmployee(null);
        }}
        onUpdate={handleUpdateEmployee}
        employee={selectedEmployee}
        departments={departments}
        roles={roles}
        entities={entities}
      />

      <Toast
        message={toast.show ? toast.message : ''}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />

      {isReviewModalOpen && selectedEmployee && (
        <ReviewModal
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
          onSubmit={handleReviewSubmit}
          employee={selectedEmployee}
        />
      )}

      <div className="table-container card">
        <div className="table-controls">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search by name, code, role or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <div className="filter-popover-wrapper">
              <button
                className={`control-btn ${hasActiveFilters ? 'active' : ''}`}
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={16} />
                <span>Filters</span>
                {hasActiveFilters && <span className="filter-indicator" />}
              </button>

              {showFilters && (
                <div className="filter-popover card">
                  <div className="popover-header">
                    <h3>Filter Directory</h3>
                    <button className="icon-btn-sm" onClick={() => setShowFilters(false)}>
                      <X size={14} />
                    </button>
                  </div>

                  <div className="popover-body">
                    <div className="filter-item">
                      <label>Department</label>
                      <select
                        value={activeFilters.department}
                        onChange={(e) => setActiveFilters(prev => ({ ...prev, department: e.target.value }))}
                      >
                        {departmentsList.map(dept => <option key={dept} value={dept}>{dept}</option>)}
                      </select>
                    </div>

                    <div className="filter-item">
                      <label>Entity</label>
                      <select
                        value={activeFilters.entity}
                        onChange={(e) => setActiveFilters(prev => ({ ...prev, entity: e.target.value }))}
                      >
                        {entitiesList.map(ent => <option key={ent} value={ent}>{ent}</option>)}
                      </select>
                    </div>

                    <div className="filter-item">
                      <label>Status</label>
                      <select
                        value={activeFilters.status}
                        onChange={(e) => setActiveFilters(prev => ({ ...prev, status: e.target.value }))}
                      >
                        {statusesList.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>


                    <div className="filter-item">
                      <label>Asset Assignment</label>
                      <select
                        value={activeFilters.assignmentStatus}
                        onChange={(e) => setActiveFilters(prev => ({ ...prev, assignmentStatus: e.target.value }))}
                      >
                        <option value="All">All</option>
                        <option value="Assigned">Assigned</option>
                        <option value="Unassigned">Unassigned</option>
                      </select>
                    </div>
                  </div>

                  <div className="popover-footer">
                    <button
                      className="text-btn"
                      onClick={() => setActiveFilters({ department: 'All', status: 'All', entity: 'All', assignmentStatus: 'All' })}
                    >
                      Reset All
                    </button>
                    <button className="apply-btn" onClick={() => setShowFilters(false)}>
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {
          hasActiveFilters && (
            <div className="active-filters">
              {Object.entries(activeFilters).map(([key, value]) => (
                value !== 'All' && (
                  <div key={key} className="filter-badge">
                    <span className="badge-label">{key}:</span>
                    <span className="badge-value">{value}</span>
                    <button onClick={() => clearFilter(key)}>
                      <X size={12} />
                    </button>
                  </div>
                )
              ))}
              <button
                className="clear-all-link"
                onClick={() => setActiveFilters({ department: 'All', status: 'All', entity: 'All', assignmentStatus: 'All' })}
              >
                Clear all
              </button>
            </div>
          )
        }

        <div className="table-wrapper">
          <table className="employee-table">
            <thead>
              <tr>
                <th>Employee Code</th>
                <th>Name</th>
                <th>Role</th>
                <th>Department</th>
                <th>Entity</th>
                <th>Onboarding Date</th>
                <th>Email ID</th>
                <th>Phone Number</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((emp) => (
                <tr key={emp.id || emp.employeeId}>
                  <td className="emp-id-cell">{emp.displayId || emp.employeeId || emp.empCode || '-'}</td>
                  <td className="emp-name-cell">
                    <div className="name-wrapper">
                      <span>{emp.name}</span>
                    </div>
                  </td>
                  <td>{emp.roleName}</td>
                  <td>{emp.deptName}</td>
                  <td>{emp.entityName}</td>
                  <td className="no-wrap">{emp.onboardingDate}</td>
                  <td>{emp.email}</td>
                  <td className="no-wrap">{emp.phone}</td>
                  <td>
                    <span className={`badge badge-${emp.status.toLowerCase()}`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="action-buttons">
                      <button className="icon-btn-v3" onClick={() => handleViewProfile(emp)} title="View Profile">
                        <Eye size={16} />
                      </button>
                      <button className="icon-btn-v3" onClick={() => handleEditEmployee(emp)} title="Edit Employee">
                        <Edit3 size={16} />
                      </button>
                      <button className="icon-btn-v3 danger" onClick={() => handleDeleteEmployee(emp.id || emp.employeeId)} title="Delete Record">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div >

      <style>{`
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .header-actions {
          display: flex;
          gap: 0.75rem;
        }

        .table-container {
          padding: 0;
          overflow: hidden;
          background: white;
          border-radius: 12px;
          border: 1px solid var(--divider);
          margin-top: 1rem;
        }

        .table-controls {
          padding: 1.25rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--divider);
          background: #fcfcfd;
        }

        .search-box {
          position: relative;
          flex: 1;
          max-width: 400px;
        }

        .search-box svg {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
        }

        .search-box input {
          width: 100%;
          padding: 0.625rem 1rem 0.625rem 2.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.875rem;
          background: white;
        }

        .filter-group {
          display: flex;
          gap: 0.75rem;
        }

        .control-btn {
          background: white;
          border: 1px solid #e2e8f0;
          padding: 0.625rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #475569;
          cursor: pointer;
          position: relative;
          transition: all 0.2s;
        }

        .control-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: #f8faff;
        }

        .control-btn.active {
          border-color: var(--primary);
          color: var(--primary);
          background: #eff6ff;
        }

        .filter-indicator {
          width: 6px;
          height: 6px;
          background: var(--primary);
          border-radius: 50%;
          position: absolute;
          top: 8px;
          right: 8px;
        }

        .filter-popover-wrapper {
          position: relative;
        }

        .filter-popover {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          width: 280px;
          z-index: 100;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--divider);
          background: white;
          border-radius: 12px;
          padding: 0 !important;
          animation: popIn 0.2s ease-out;
          overflow: hidden;
        }

        @keyframes popIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .popover-header {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--divider);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .popover-header h3 {
          font-size: 0.875rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
        }

        .popover-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .filter-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .filter-item label {
          font-size: 0.75rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .filter-item select {
          padding: 0.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.875rem;
          background: #f8fafc;
          outline: none;
        }

        .popover-footer {
          padding: 1rem 1.25rem;
          background: #f8fafc;
          border-top: 1px solid var(--divider);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .text-btn {
          background: none;
          border: none;
          color: #64748b;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
        }

        .text-btn:hover {
          color: var(--primary);
        }

        .apply-btn {
          background: var(--primary);
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
        }

        .active-filters {
          padding: 0.75rem 1.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          align-items: center;
          border-bottom: 1px solid var(--divider);
          background: white;
        }

        .filter-badge {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: #eff6ff;
          color: var(--primary);
          padding: 0.25rem 0.625rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid #dbeafe;
        }

        .badge-label {
          color: #60a5fa;
          text-transform: capitalize;
        }

        .filter-badge button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: var(--primary);
          cursor: pointer;
          padding: 0;
          border-radius: 50%;
        }

        .clear-all-link {
          font-size: 0.75rem;
          font-weight: 600;
          color: #64748b;
          background: none;
          border: none;
          cursor: pointer;
          margin-left: 0.5rem;
        }

        .clear-all-link:hover {
          color: var(--primary);
          text-decoration: underline;
        }

        .icon-btn-sm {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          border: none;
          background: transparent;
          color: #94a3b8;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-btn-sm:hover {
          background: #f1f5f9;
          color: #475569;
        }

        .table-wrapper {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .employee-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 1200px;
          font-size: 0.875rem;
        }

        .employee-table th {
          background: #f8fafc;
          padding: 1rem 1.5rem;
          text-align: left;
          font-weight: 600;
          color: var(--text-muted);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--divider);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .employee-table td {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--divider);
          color: var(--text-main);
          vertical-align: middle;
        }

        .employee-table tr:hover td {
          background: #f1f5f9;
        }

        .emp-id-cell {
          font-family: monospace;
          font-weight: 600;
          color: var(--primary);
        }

        .name-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .mini-avatar {
          width: 32px;
          height: 32px;
          background: var(--primary);
          color: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.75rem;
        }

        .emp-name-cell span {
          font-weight: 600;
        }

        .no-wrap {
          white-space: nowrap;
        }

        .timestamp-group {
          display: flex;
          flex-direction: column;
        }

        .timestamp-group .date {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .timestamp-group .time {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: monospace;
        }

        .text-right {
          text-align: right !important;
        }

        .action-buttons {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
        }

        .icon-btn-v3 {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          transition: all 0.2s;
        }

        .icon-btn-v3:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: #eff6ff;
        }

        .icon-btn-v3.danger:hover {
          color: var(--danger);
          border-color: var(--danger);
          background: #fee2e2;
        }

        .icon-btn-v3.success:hover {
          color: #10b981;
          border-color: #10b981;
          background: #ecfdf5;
        }

        .primary-btn {
          background: var(--primary);
          color: white;
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.875rem;
        }

        .secondary-btn {
          background: white;
          border: 1px solid var(--border-color);
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.875rem;
        }

        @media (max-width: 640px) {
          .page-header {
            flex-direction: column;
            gap: 1rem;
          }
          .header-actions {
            width: 100%;
          }
          .header-actions button {
            flex: 1;
          }
        }
      `}</style>
    </div >
  );
};

const ReviewModal = ({ isOpen, onClose, employee, onSubmit }) => {
  const [status, setStatus] = useState('APPROVED');
  const [remarks, setRemarks] = useState('');
  const [rejectedDocs, setRejectedDocs] = useState([]);

  if (!isOpen) return null;

  const docOptions = [
    { key: 'passbook', label: 'Bank Passbook' },
    { key: 'ssc', label: 'SSC Certificate' },
    { key: 'inter', label: 'Inter Certificate' },
    { key: 'graduation', label: 'Graduation Certificate' },
    { key: 'pan', label: 'PAN Card' },
    { key: 'aadhar', label: 'Aadhar Card' },
    { key: 'photo', label: 'Passport Photo' },
    { key: 'passport', label: 'Passport Document' }
  ];

  const toggleDoc = (key) => {
    setRejectedDocs(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-slide-up" style={{ maxWidth: '450px' }} onClick={e => e.stopPropagation()}>
        <div className="modal-header-banner" style={{ padding: '1.5rem', background: status === 'APPROVED' ? '#10b981' : '#ef4444' }}>
          <div className="header-text">
            <h2>Review Onboarding</h2>
            <p style={{ opacity: 0.9, fontSize: '0.875rem' }}>{employee.name}</p>
          </div>
          <button className="close-btn-light" onClick={onClose}><X size={20} /></button>
        </div>

        <div className="profile-body" style={{ padding: '1.5rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Decision</label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                type="button"
                onClick={() => setStatus('APPROVED')}
                style={{
                  flex: 1, padding: '0.75rem', borderRadius: '10px', border: '2px solid',
                  borderColor: status === 'APPROVED' ? '#10b981' : '#e2e8f0',
                  background: status === 'APPROVED' ? '#ecfdf5' : 'white',
                  color: status === 'APPROVED' ? '#059669' : '#64748b',
                  fontWeight: 700, cursor: 'pointer'
                }}
              >
                Approve
              </button>
              <button
                type="button"
                onClick={() => setStatus('REJECTED')}
                style={{
                  flex: 1, padding: '0.75rem', borderRadius: '10px', border: '2px solid',
                  borderColor: status === 'REJECTED' ? '#ef4444' : '#e2e8f0',
                  background: status === 'REJECTED' ? '#fef2f2' : 'white',
                  color: status === 'REJECTED' ? '#dc2626' : '#64748b',
                  fontWeight: 700, cursor: 'pointer'
                }}
              >
                Reject
              </button>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Remarks</label>
            <textarea
              value={remarks}
              onChange={e => setRemarks(e.target.value)}
              placeholder="e.g. Passbook is blurry..."
              style={{ width: '100%', padding: '0.75rem', borderRadius: '10px', border: '1px solid #e2e8f0', minHeight: '80px', fontSize: '0.875rem' }}
            />
          </div>

          {status === 'REJECTED' && (
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Select Documents for Re-upload</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                {docOptions.map(doc => (
                  <button
                    key={doc.key}
                    type="button"
                    onClick={() => toggleDoc(doc.key)}
                    style={{
                      padding: '0.5rem', borderRadius: '6px', border: '1px solid',
                      fontSize: '0.75rem', textAlign: 'left',
                      borderColor: rejectedDocs.includes(doc.key) ? '#ef4444' : '#e2e8f0',
                      background: rejectedDocs.includes(doc.key) ? '#fee2e2' : '#f8fafc',
                      color: rejectedDocs.includes(doc.key) ? '#dc2626' : '#475569',
                      cursor: 'pointer'
                    }}
                  >
                    {doc.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer-centered" style={{ padding: '1.5rem', background: '#f8fafc' }}>
          <button className="secondary-btn-wide" onClick={onClose} style={{ flex: 1 }}>Cancel</button>
          <button
            className="submit-btn-wide"
            onClick={() => onSubmit({ status, remarks, rejectedDocuments: rejectedDocs })}
            style={{ flex: 2, background: status === 'APPROVED' ? '#10b981' : '#ef4444' }}
          >
            Confirm {status === 'APPROVED' ? 'Approval' : 'Rejection'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
