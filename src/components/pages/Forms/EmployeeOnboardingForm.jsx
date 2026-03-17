import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Upload, Plus, Trash2, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import apiService from '../../../services/api';
import { findByPattern, findProof, scavengeValue, scavengePath } from '../../../utils/normalizeEmployee';

const EmployeeOnboardingForm = () => {
    const [searchParams] = useSearchParams();

    // Extract token robustly
    const token = useMemo(() => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('token') || searchParams.get('token');
    }, [searchParams]);

    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [rejectedFields, setRejectedFields] = useState([]);

    useEffect(() => {
        if (token) {
            fetchExistingData(token);
        }
    }, [token]);

    const fetchExistingData = async (onboardingToken) => {
        setLoading(true);
        try {
            console.log("🔍 Fetching existing onboarding data for token:", onboardingToken);
            const data = await apiService.getOnboardingByToken(onboardingToken);
            if (data) {
                console.log("✅ [DEBUG] Oboarding Data Found:", data);
                console.log("📦 [DEBUG] Data Keys:", Object.keys(data));
                if (data.rejectedDocuments) {
                    setRejectedFields(data.rejectedDocuments);
                }
                mapEmployeeToForm(data);
            }
        } catch (error) {
            console.error("❌ Failed to fetch existing data:", error);
        } finally {
            setLoading(false);
        }
    };

    const mapEmployeeToForm = (empRaw) => {
        if (!empRaw) return;

        // --- PRE-PARSING (Align with normalizeEmployee.js) ---
        let emp = { ...empRaw };
        Object.keys(empRaw).forEach(key => {
            const val = empRaw[key];
            if (typeof val === 'string' && val.length > 2 && (val.trim().startsWith('{') || val.trim().startsWith('['))) {
                try {
                    const parsed = JSON.parse(val);
                    if (parsed && typeof parsed === 'object') {
                        emp[key] = parsed;
                    }
                } catch (e) { }
            }
        });

        // --- Map Personal ---
        setPersonal({
            fullName: emp.fullName || '',
            phone: emp.phoneNumber || emp.phone || '',
            bloodGroup: emp.bloodGroup || '',
            email: emp.email || '',
            permAddress: emp.permanentAddress || emp.permAddress || '',
            presAddress: emp.presentAddress || emp.presAddress || '',
            fatherName: emp.fathersName || emp.fatherName || '',
            fatherPhone: emp.fathersPhone || emp.fatherPhone || '',
            motherName: emp.mothersName || emp.motherName || '',
            motherPhone: emp.mothersPhone || emp.motherPhone || '',
            emergencyName: emp.emergencyContactName || emp.emergencyName || '',
            emergencyRel: emp.emergencyRelationship || emp.emergencyRel || '',
            emergencyPhone: emp.emergencyNumber || emp.emergencyPhone || '',
            dateOfBirth: emp.dateOfBirth ? (Array.isArray(emp.dateOfBirth) ? formatDate(emp.dateOfBirth) : emp.dateOfBirth.split('T')[0]) : '',
        });

        const mapEdu = (eduRaw, patterns = []) => {
            let edu = eduRaw;
            if (!edu && patterns.length > 0) {
                edu = scavengeValue(emp, patterns);
            }

            // If scavenge found a string (likely flattened field), try to find other sibling fields
            if (typeof edu === 'string' && patterns.length > 0) {
                const prefix = patterns[0].toLowerCase();
                const school = scavengeValue(emp, [prefix + 'School', prefix + 'Institution', prefix + 'College', prefix + 'Name']) || edu;
                const ht = scavengeValue(emp, [prefix + 'HallTicket', prefix + 'RollNo', prefix + 'Id']);
                const yr = scavengeValue(emp, [prefix + 'Year', prefix + 'Passout', prefix + 'Date']);
                const score = scavengeValue(emp, [prefix + 'Percentage', prefix + 'Cgpa', prefix + 'Marks']);
                const cert = scavengePath(emp, [prefix + 'Certificate', prefix + 'File', prefix + 'Doc']);
                const memo = scavengePath(emp, [prefix + 'Marks', prefix + 'Memo', prefix + 'Transcript']);

                edu = {
                    institutionName: school,
                    hallTicketNo: ht,
                    passoutYear: yr,
                    percentageCgpa: score,
                    certificatePath: cert,
                    marksMemoPath: memo
                };
            }

            if (!edu) return { institutionName: '', htNumber: '', year: '', percentage: '', certificate: null, marksMemo: null };

            const certPath = edu.certificatePath || edu.certificateFilePath || scavengePath(edu, ['certificate', 'certPath', 'doc', 'file']);
            const memoPath = edu.marksMemoPath || edu.marksMemoFilePath || scavengePath(edu, ['marksMemo', 'marks', 'memo', 'transcript']);

            return {
                institutionName: edu.institutionName || scavengeValue(edu, ['institution', 'college', 'school', 'university', 'board']) || '',
                htNumber: edu.hallTicketNo || edu.hallTicketNumber || scavengeValue(edu, ['hallTicket', 'htNumber', 'rollNo']) || '',
                year: edu.passoutYear || scavengeValue(edu, ['year', 'passout', 'date', 'passing', 'completion']) || '',
                percentage: edu.percentageCgpa || edu.percentage || scavengeValue(edu, ['percentage', 'cgpa', 'marks', 'score', 'grade']) || '',
                certificate: certPath ? { name: certPath.split('/').pop(), isServerFile: true, path: certPath } : null,
                marksMemo: memoPath ? { name: memoPath.split('/').pop(), isServerFile: true, path: memoPath } : null,
            };
        };

        // --- Map Education ---
        const eduState = {
            ssc: mapEdu(emp.ssc, ['ssc', '10th', 'secondary']),
            inter: mapEdu(emp.intermediate, ['inter', '12th', 'higherSecondary']),
            grad: mapEdu(emp.graduation, ['graduation', 'degree', 'ug']),
            postGrad: (emp.postGraduations || []).map(pg => mapEdu(pg)),
            otherCerts: (emp.otherCertificates || []).map(cert => ({
                institute: cert.instituteName || scavengeValue(cert, ['institute', 'school', 'college']) || '',
                certNumber: cert.certificateNumber || scavengeValue(cert, ['certificateNumber', 'regNo']) || '',
                certificate: (cert.certificatePath || scavengePath(cert, ['certificate', 'file'])) ? {
                    name: (cert.certificatePath || scavengePath(cert, ['certificate', 'file'])).split('/').pop(),
                    isServerFile: true,
                    path: cert.certificatePath || scavengePath(cert, ['certificate', 'file'])
                } : null,
            })),
        };
        console.log("📚 [DEBUG] Mapped Education State:", eduState);
        setEducation(eduState);

        // --- Map Experience ---
        setExperience({
            internships: (emp.internships || []).map(int => ({
                company: int.companyName || '',
                joining: int.joiningDate || '',
                relieving: int.relievingDate || '',
                id: int.internshipId || '',
                duration: int.duration || '',
                offerLetter: int.offerLetterPath ? { name: int.offerLetterPath.split('/').pop(), isServerFile: true, path: int.offerLetterPath } : null,
                relievingLetter: int.experienceCertificatePath ? { name: int.experienceCertificatePath.split('/').pop(), isServerFile: true, path: int.experienceCertificatePath } : null,
            })),
            workHistory: (emp.workExperiences || []).map(work => ({
                company: work.companyName || '',
                years: work.yearsOfExp || '',
                offerLetter: work.offerLetterPath ? { name: work.offerLetterPath.split('/').pop(), isServerFile: true, path: work.offerLetterPath } : null,
                relievingLetter: work.relievingLetterPath ? { name: work.relievingLetterPath.split('/').pop(), isServerFile: true, path: work.relievingLetterPath } : null,
                payslips: work.payslipsPath ? { name: work.payslipsPath.split('/').pop(), isServerFile: true, path: work.payslipsPath } : null,
                experienceCert: work.experienceCertificatePath ? { name: work.experienceCertificatePath.split('/').pop(), isServerFile: true, path: work.experienceCertificatePath } : null,
            }))
        });

        // --- Map Bank ---
        setBank({
            name: emp.bankName || '',
            branch: emp.branchName || '',
            accNumber: emp.accountNumber || '',
            ifsc: emp.ifscCode || '',
            docType: emp.passbookPath ? 'Passbook' : 'Passbook',
            docImage: emp.passbookPath ? { name: emp.passbookPath.split('/').pop(), isServerFile: true, path: emp.passbookPath } : null,
            upiId: emp.upiId || ''
        });

        // --- Map Documents ---
        const pan = findProof(emp, 'PAN') || emp.panProof || scavengeValue(emp, ['pan_card', 'pan_file', 'panProof']) || {};
        const aadhar = findProof(emp, 'AADHAR') || emp.aadharProof || scavengeValue(emp, ['aadhar_card', 'aadhar_file', 'aadharProof']) || {};
        const photo = findProof(emp, 'PHOTO') || emp.photoProof || scavengeValue(emp, ['photo', 'passportPhoto', 'photoProof']) || {};
        const passport = findProof(emp, 'PASSPORT') || emp.passportProof || scavengeValue(emp, ['passport', 'passportDoc', 'passport_file', 'passportProof']) || {};
        const voter = findProof(emp, 'VOTER') || emp.voterProof || scavengeValue(emp, ['voter', 'voterId', 'voter_file', 'voterProof']) || {};

        const getDocPath = (doc) => {
            if (!doc) return null;
            const isStrPath = (v) => typeof v === 'string' && (v.includes('/') || v.includes('\\') || v.includes('.'));
            if (isStrPath(doc)) return doc;
            if (typeof doc === 'object') {
                return doc.filePath || doc.path || doc.certificatePath || doc.url || Object.values(doc).find(isStrPath);
            }
            return null;
        };

        const docState = {
            panNumber: pan.documentNumber || scavengeValue(emp, ['panNumber', 'panId', 'panNo']) || '',
            panCard: getDocPath(pan) ? { name: getDocPath(pan).split('/').pop(), isServerFile: true, path: getDocPath(pan) } : null,
            aadharNumber: aadhar.documentNumber || scavengeValue(emp, ['aadharNumber', 'aadharId', 'aadharNo']) || '',
            aadharCard: getDocPath(aadhar) ? { name: getDocPath(aadhar).split('/').pop(), isServerFile: true, path: getDocPath(aadhar) } : null,
            passportPhoto: getDocPath(photo) ? { name: getDocPath(photo).split('/').pop(), isServerFile: true, path: getDocPath(photo) } : null,
            passportDoc: getDocPath(passport) ? { name: getDocPath(passport).split('/').pop(), isServerFile: true, path: getDocPath(passport) } : null,
            voterId: getDocPath(voter) ? { name: getDocPath(voter).split('/').pop(), isServerFile: true, path: getDocPath(voter) } : null,
        };
        console.log("📄 [DEBUG] Mapped Documents State:", docState);
        setDocuments(docState);
    };

    const formatDate = (arr) => {
        if (!arr || !Array.isArray(arr)) return '';
        const [y, m, d] = arr;
        return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    };


    const validateStep = (currentStep) => {
        let newErrors = {};

        if (currentStep === 1) {
            const required = ['fullName', 'phone', 'email', 'dateOfBirth', 'permAddress', 'presAddress', 'fatherName', 'fatherPhone', 'motherName', 'motherPhone', 'emergencyName', 'emergencyRel', 'emergencyPhone'];
            for (const field of required) {
                if (!personal[field]) {
                    newErrors[field] = 'This field is required';
                }
            }
        } else if (currentStep === 2) {
            const levels = ['ssc', 'inter', 'grad'];
            for (const level of levels) {
                const data = education[level];
                if (!data.institutionName) newErrors[`${level}_institutionName`] = 'Required';
                if (!data.htNumber) newErrors[`${level}_htNumber`] = 'Required';
                if (!data.year) newErrors[`${level}_year`] = 'Required';
                if (!data.percentage) newErrors[`${level}_percentage`] = 'Required';
                if (!data.certificate) newErrors[`${level}_certificate`] = 'Required';
            }
        } else if (currentStep === 4) {
            const requiredBank = ['name', 'branch', 'accNumber', 'ifsc', 'upiId'];
            for (const field of requiredBank) {
                if (!bank[field]) {
                    newErrors[field] = 'Required';
                }
            }
            if (!bank.docImage) {
                newErrors['bankDoc'] = 'Required';
            }
        } else if (currentStep === 5) {
            if (!documents.panNumber) newErrors['panNumber'] = 'Required';
            if (!documents.panCard) newErrors['panCard'] = 'Required';
            if (!documents.aadharNumber) newErrors['aadharNumber'] = 'Required';
            if (!documents.aadharCard) newErrors['aadharCard'] = 'Required';
            if (!documents.passportPhoto) newErrors['passportPhoto'] = 'Required';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            // Wait for DOM update and scroll to first error
            setTimeout(() => {
                const firstError = document.querySelector('.input-group.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
            return false;
        }

        return true;
    };

    const goToStep = (nextStep) => {
        if (nextStep > step) {
            if (!validateStep(step)) return;
        }
        setErrors({}); // Clear errors when moving
        setStep(nextStep);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // --- State ---
    const [personal, setPersonal] = useState({
        fullName: '',
        phone: '',
        bloodGroup: '',
        email: '',
        permAddress: '',
        presAddress: '',
        fatherName: '',
        fatherPhone: '',
        motherName: '',
        motherPhone: '',
        emergencyName: '',
        emergencyRel: '',
        emergencyPhone: '',
        dateOfBirth: '',
    });

    const [education, setEducation] = useState({
        ssc: { institutionName: '', htNumber: '', year: '', percentage: '', certificate: null, marksMemo: null },
        inter: { institutionName: '', htNumber: '', year: '', percentage: '', certificate: null, marksMemo: null },
        grad: { institutionName: '', htNumber: '', year: '', percentage: '', certificate: null, marksMemo: null },
        postGrad: [], // Array of objects
        otherCerts: [], // { institute: '', certNumber: '', certificate: null }
    });

    const [experience, setExperience] = useState({
        internships: [], // { company: '', joining: '', relieving: '', id: '', duration: '', offerLetter: null, relievingLetter: null }
        workHistory: []  // { company: '', years: '', offerLetter: null, relievingLetter: null, payslips: null, experienceCert: null }
    });

    const [documents, setDocuments] = useState({
        panNumber: '',
        panCard: null,
        aadharNumber: '',
        aadharCard: null,
        passportPhoto: null,
        passportDoc: null,
        voterId: null
    });

    const [livePhoto, setLivePhoto] = useState(null);

    const [bank, setBank] = useState({
        name: '',
        branch: '',
        accNumber: '',
        ifsc: '',
        docType: 'PASSBOOK',
        docImage: null,
        upiId: ''
    });

    // --- Handlers ---
    const isFieldRejected = (fieldName) => {
        if (!rejectedFields || rejectedFields.length === 0) return false;
        return rejectedFields.some(rf => {
            const pattern = rf.toLowerCase();
            const field = fieldName.toLowerCase();
            return field.includes(pattern) || pattern.includes(field);
        });
    };

    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setPersonal(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrs = { ...prev };
                delete newErrs[name];
                return newErrs;
            });
        }
    };

    const handleEduChange = (level, field, value) => {
        setEducation(prev => ({
            ...prev,
            [level]: { ...prev[level], [field]: value }
        }));
        const errKey = `${level}_${field}`;
        if (errors[errKey]) {
            setErrors(prev => {
                const newErrs = { ...prev };
                delete newErrs[errKey];
                return newErrs;
            });
        }
    };

    const handleFileChange = (section, level, field, file, index = null) => {
        if (section === 'education') {
            if (index !== null) {
                const newArr = [...education[level]];
                newArr[index][field] = file;
                setEducation(prev => ({ ...prev, [level]: newArr }));
            } else {
                setEducation(prev => ({
                    ...prev,
                    [level]: { ...prev[level], [field]: file }
                }));
                const errKey = `${level}_${field}`;
                if (errors[errKey]) {
                    setErrors(prev => {
                        const newErrs = { ...prev };
                        delete newErrs[errKey];
                        return newErrs;
                    });
                }
            }
        } else if (section === 'experience') {
            const newArr = [...experience[level]];
            newArr[index][field] = file;
            setExperience(prev => ({ ...prev, [level]: newArr }));
        } else if (section === 'bank') {
            setBank(prev => ({ ...prev, [field]: file }));
            if (field === 'docImage' && errors.bankDoc) {
                setErrors(prev => {
                    const newErrs = { ...prev };
                    delete newErrs.bankDoc;
                    return newErrs;
                });
            }
        } else if (section === 'documents') {
            setDocuments(prev => ({ ...prev, [field]: file }));
            if (errors[field]) {
                setErrors(prev => {
                    const newErrs = { ...prev };
                    delete newErrs[field];
                    return newErrs;
                });
            }
        }
    };

    const handleBankChange = (e) => {
        const { name, value } = e.target;
        setBank(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrs = { ...prev };
                delete newErrs[name];
                return newErrs;
            });
        }
    };

    const handleDocumentChange = (e) => {
        const { name, value } = e.target;
        setDocuments(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrs = { ...prev };
                delete newErrs[name];
                return newErrs;
            });
        }
    };

    // Dynamic Lists Handlers
    const addPostGrad = () => {
        setEducation(prev => ({
            ...prev,
            postGrad: [...prev.postGrad, { institutionName: '', year: '', percentage: '', certificate: null }]
        }));
    };

    const updatePostGrad = (index, field, value) => {
        const newArr = [...education.postGrad];
        newArr[index][field] = value;
        setEducation(prev => ({ ...prev, postGrad: newArr }));
    };

    const removePostGrad = (index) => {
        setEducation(prev => ({
            ...prev,
            postGrad: prev.postGrad.filter((_, i) => i !== index)
        }));
    };

    const addCert = () => {
        setEducation(prev => ({
            ...prev,
            otherCerts: [...prev.otherCerts, { institute: '', certNumber: '', certificate: null }]
        }));
    };

    const updateCert = (index, field, value) => {
        const newArr = [...education.otherCerts];
        newArr[index][field] = value;
        setEducation(prev => ({ ...prev, otherCerts: newArr }));
    };

    const removeCert = (index) => {
        setEducation(prev => ({
            ...prev,
            otherCerts: prev.otherCerts.filter((_, i) => i !== index)
        }));
    };

    // Internship Handlers
    const addInternship = () => {
        setExperience(prev => ({
            ...prev,
            internships: [...prev.internships, { company: '', joining: '', relieving: '', id: '', duration: '', offerLetter: null, relievingLetter: null }]
        }));
    };

    const updateInternship = (index, field, value) => {
        const newArr = [...experience.internships];
        newArr[index][field] = value;
        setExperience(prev => ({ ...prev, internships: newArr }));
    };

    const removeInternship = (index) => {
        setExperience(prev => ({ ...prev, internships: prev.internships.filter((_, i) => i !== index) }));
    };

    // Work History Handlers
    const addWork = () => {
        setExperience(prev => ({
            ...prev,
            workHistory: [...prev.workHistory, { company: '', years: '', offerLetter: null, relievingLetter: null, payslips: null, experienceCert: null }]
        }));
    };

    const updateWork = (index, field, value) => {
        const newArr = [...experience.workHistory];
        newArr[index][field] = value;
        setExperience(prev => ({ ...prev, workHistory: newArr }));
    };

    const removeWork = (index) => {
        setExperience(prev => ({ ...prev, workHistory: prev.workHistory.filter((_, i) => i !== index) }));
    };

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            if (!file) {
                resolve(null);
                return;
            }
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Final validation check for the last step
        if (!validateStep(5)) return;

        // Explicit bank details validation
        if (!bank.name || !bank.accNumber || !bank.ifsc || !bank.branch) {
            alert("Please fill all bank details");
            return;
        }

        const ifsc = bank.ifsc.toUpperCase().trim();
        const ifscPattern = /^[A-Z]{4}0[0-9]{6}$/;
        if (!ifscPattern.test(ifsc)) {
            alert("Invalid IFSC Code. Example: SBIN0001234");
            return;
        }

        try {
            console.log("🚀 Starting Onboarding Submission (Action Plan: Multipart)...");

            // Helper to validate path length and get filename
            const getFileInfo = (file, fieldName) => {
                if (!file) return null;
                const fileName = file.name || 'document';
                console.log(`📄 Field: ${fieldName}, Name: ${fileName}, Length: ${fileName.length}`);

                if (fileName.length > 200) {
                    throw new Error(`Filename for ${fieldName} is too long (${fileName.length} chars). Max 200.`);
                }
                return fileName;
            };

            const mapEducation = (edu, type) => {
                if (!edu) return null;
                return {
                    educationType: type,
                    institutionName: edu.institutionName || '',
                    hallTicketNumber: edu.htNumber || '',
                    passoutYear: edu.year || '',
                    percentage: edu.percentage || '',
                    certificateFilePath: getFileInfo(edu.certificate, "Edu Cert"),
                    marksMemoFilePath: getFileInfo(edu.marksMemo, "Edu Marks")
                };
            };

            // 1. Prepare JSON DTO (Reverting to separate fields to avoid 'Unrecognized field "educations"' error)
            const jsonData = {
                fullName: personal.fullName,
                email: personal.email,
                phoneNumber: personal.phone,
                dateOfBirth: personal.dateOfBirth,
                bloodGroup: personal.bloodGroup,
                permanentAddress: personal.permAddress,
                presentAddress: personal.presAddress,
                fathersName: personal.fatherName,
                fathersPhone: personal.fatherPhone,
                mothersName: personal.motherName,
                mothersPhone: personal.motherPhone,
                emergencyContactName: personal.emergencyName,
                emergencyRelationship: personal.emergencyRel,
                emergencyNumber: personal.emergencyPhone,
                bankDetails: {
                    bankName: bank.name,
                    branchName: bank.branch,
                    accountNumber: bank.accNumber,
                    ifscCode: ifsc,
                    upiId: bank.upiId,
                    documentType: bank.docType
                },
                documentFilePath: getFileInfo(bank.docImage, "Bank Document"),
                ssc: mapEducation(education.ssc, 'SSC'),
                intermediate: mapEducation(education.inter, 'INTERMEDIATE'),
                graduation: mapEducation(education.grad, 'GRADUATION'),
                postGraduations: education.postGrad.map(pg => mapEducation(pg, 'POST_GRADUATION')),
                otherCertificates: education.otherCerts.map(cert => ({
                    instituteName: cert.institute,
                    certificateNumber: cert.certNumber,
                    certificateFilePath: getFileInfo(cert.certificate, "Other Cert")
                })),
                internships: experience.internships.map(int => ({
                    companyName: int.company,
                    joiningDate: int.joining,
                    relievingDate: int.relieving,
                    internshipId: int.id,
                    duration: int.duration,
                    offerLetterPath: getFileInfo(int.offerLetter, "Internship Offer"),
                    experienceCertificatePath: getFileInfo(int.relievingLetter, "Internship Cert")
                })),
                workExperiences: experience.workHistory.map(work => ({
                    companyName: work.company,
                    yearsOfExperience: work.years,
                    offerLetterPath: getFileInfo(work.offerLetter, "Work Offer"),
                    relievingLetterPath: getFileInfo(work.relievingLetter, "Work Relieving"),
                    payslipsPath: getFileInfo(work.payslips, "Work Payslip"),
                    experienceCertificatePath: getFileInfo(work.experienceCert, "Work Exp Cert")
                })),
                panProof: {
                    panNumber: documents.panNumber
                },
                aadharProof: {
                    aadhaarNumber: documents.aadharNumber
                },
                photoProof: {},
                passportProof: {
                    passportNumber: documents.passportNumber
                },
                voterProof: {
                    voterNumber: documents.voterNumber
                }
            };

            console.log("Submit Payload:", JSON.stringify(jsonData, null, 2));

            // 2. Build FormData - Send JSON
            const tokenFromUrl = new URLSearchParams(window.location.search).get('token');
            const submitUrl = '/api/onboarding/submit';
            const query = `?token=${encodeURIComponent(token || tokenFromUrl || '')}`;

            console.log('Token from URL:', token || tokenFromUrl);
            console.log('Current page URL:', window.location.href);
            console.log('Full request URL will be:', submitUrl + query);
            console.log('Method: POST');

            const formData = new FormData();
            // 1. Add the entire DTO as a JSON Blob under key "data" (matching backend requirement)
            formData.append('data', new Blob([JSON.stringify(jsonData)], {
                type: 'application/json'
            }));

            // Log FormData entries for verification
            console.log('📦 FormData entries:');
            for (let [key, value] of formData.entries()) {
                console.log(key, value instanceof File ? `📄 File: ${value.name} (${value.size} bytes)` : (value instanceof Blob ? '📦 Blob/JSON' : value));
            }

            // 2. Add files (with correct part names matching backend @RequestPart)
            // Use helper to append only if it's a real File (not an existing server file object)
            const appendFile = (key, file) => {
                if (file && file instanceof File) {
                    formData.append(key, file);
                }
            };

            if (education.otherCerts.length > 0) {
                education.otherCerts.forEach((cert, index) => {
                    // User specified 'other_certificate_file' and 'other_marks_memo_file' without index
                    appendFile(`other_certificate_file`, cert.certificate);
                    appendFile(`other_marks_memo_file`, cert.marksMemo);
                });
            }

            appendFile('bank', bank.docImage);
            appendFile('ssc_certificate', education.ssc.certificate);
            appendFile('ssc_marks_memo', education.ssc.marksMemo);
            appendFile('inter_certificate', education.inter.certificate);
            appendFile('inter_marks_memo', education.inter.marksMemo);
            
            // User specified grad_certificate_0, grad_certificate_1 etc. 
            // Our form has one graduation, but we support indexing just in case.
            appendFile('grad_certificate_0', education.grad.certificate);
            appendFile('grad_marks_memo_0', education.grad.marksMemo);

            education.postGrad.forEach((pg, i) => {
                // User specified 'post_graduation_certificate_file' without index
                appendFile(`post_graduation_certificate_file`, pg.certificate);
                appendFile(`post_graduation_marks_memo_file`, pg.marksMemo);
            });

            experience.internships.forEach((int, i) => {
                appendFile(`internship_offer_letter_${i}`, int.offerLetter);
                appendFile(`internship_experience_certificate_${i}`, int.relievingLetter);
            });

            experience.workHistory.forEach((work, i) => {
                appendFile(`experience_offer_letter_${i}`, work.offerLetter);
                appendFile(`experience_relieving_letter_${i}`, work.relievingLetter);
                appendFile(`experience_payslips_${i}`, work.payslips);
                appendFile(`experience_certificate_${i}`, work.experienceCert);
            });

            appendFile('pan', documents.panCard);
            appendFile('aadhaar', documents.aadharCard);
            appendFile('photo', documents.passportPhoto);
            appendFile('passport', documents.passportDoc);
            appendFile('voter', documents.voterId);

            // Detailed logging for debugging
            const response = await apiService.submitOnboarding(formData, token);
            console.log("✅ Onboarding Submit Success:", response);

            alert('Registration successful! Our team will review your application.');
            setStep(1);
        } catch (error) {
            console.error("❌ Submission Failed:", error.message);
            if (error instanceof TypeError) {
                alert("Server unreachable or blocked by browser.");
            } else {
                alert("Submission failed: " + error.message);
            }
        }
    };

    // --- Render ---
    return (
        <div className="form-container">
            <div className="form-card">
                <div className="form-header">
                    <h1>Employee Onboarding</h1>
                    <p>Please fill out your details accurately.</p>
                </div>

                {loading && (
                    <div className="loading-overlay">
                        <div className="spinner"></div>
                        <p>Loading your details...</p>
                    </div>
                )}

                <div className="step-indicator">
                    <span className={step >= 1 ? 'active' : ''}>1. Personal</span>
                    <span className="line"></span>
                    <span className={step >= 2 ? 'active' : ''}>2. Education</span>
                    <span className="line"></span>
                    <span className={step >= 3 ? 'active' : ''}>3. Experience</span>
                    <span className="line"></span>
                    <span className={step >= 4 ? 'active' : ''}>4. Bank</span>
                    <span className="line"></span>
                    <span className={step >= 5 ? 'active' : ''}>5. Documents</span>
                    {/* <span className="line"></span>
                    <span className={step >= 6 ? 'active' : ''}>6. Live Photo</span> */}
                </div>

                <form onSubmit={handleSubmit}>
                    {/* SECTION 1: PERSONAL */}
                    {step === 1 && (
                        <div className="form-section animate-fade-in">
                            <h2>Personal Details</h2>
                            <div className="row">
                                <Input label="Full Name (as per Aadhar)" name="fullName" val={personal.fullName} fn={handlePersonalChange} req error={errors.fullName} rejected={isFieldRejected('fullName')} />
                                <Input label="Phone Number" name="phone" val={personal.phone} fn={handlePersonalChange} req type="tel" error={errors.phone} rejected={isFieldRejected('phone')} />
                            </div>
                            <div className="row">
                                <Input label="Email ID" name="email" val={personal.email} fn={handlePersonalChange} req type="email" error={errors.email} rejected={isFieldRejected('email')} />
                                <div className={`input-group ${errors.bloodGroup || isFieldRejected('bloodGroup') ? 'error' : ''}`}>
                                    <label>Blood Group {isFieldRejected('bloodGroup') && <span className="rejected-badge">Rejected</span>}</label>
                                    <select name="bloodGroup" value={personal.bloodGroup} onChange={handlePersonalChange} className={`form-input ${errors.bloodGroup || isFieldRejected('bloodGroup') ? 'error' : ''}`}>
                                        <option value="">Select</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                    </select>
                                    {errors.bloodGroup && <span className="error-msg">{errors.bloodGroup}</span>}
                                    {isFieldRejected('bloodGroup') && <span className="error-msg">This field was rejected.</span>}
                                </div>
                                <Input label="Date of Birth" name="dateOfBirth" val={personal.dateOfBirth} fn={handlePersonalChange} req type="date" error={errors.dateOfBirth} rejected={isFieldRejected('dateOfBirth')} />
                            </div>

                            <h3>Address</h3>
                            <div className="row">
                                <div className={`input-group ${errors.permAddress || isFieldRejected('permanentAddress') ? 'error' : ''}`}>
                                    <label>Permanent Address {isFieldRejected('permanentAddress') && <span className="rejected-badge">Rejected</span>}</label>
                                    <textarea name="permAddress" value={personal.permAddress} onChange={handlePersonalChange} className={`form-input ${errors.permAddress || isFieldRejected('permanentAddress') ? 'error' : ''}`} required rows="3"></textarea>
                                    {errors.permAddress && <span className="error-msg">{errors.permAddress}</span>}
                                    {isFieldRejected('permanentAddress') && <span className="error-msg">This field was rejected.</span>}
                                </div>
                                <div className={`input-group ${errors.presAddress || isFieldRejected('presentAddress') ? 'error' : ''}`}>
                                    <label>Present Address {isFieldRejected('presentAddress') && <span className="rejected-badge">Rejected</span>}</label>
                                    <textarea name="presAddress" value={personal.presAddress} onChange={handlePersonalChange} className={`form-input ${errors.presAddress || isFieldRejected('presentAddress') ? 'error' : ''}`} required rows="3"></textarea>
                                    {errors.presAddress && <span className="error-msg">{errors.presAddress}</span>}
                                    {isFieldRejected('presentAddress') && <span className="error-msg">This field was rejected.</span>}
                                </div>
                            </div>

                            <h3>Family Details</h3>
                            <div className="row">
                                <Input label="Father's Name" name="fatherName" val={personal.fatherName} fn={handlePersonalChange} req error={errors.fatherName} rejected={isFieldRejected('fathersName')} />
                                <Input label="Father's Phone" name="fatherPhone" val={personal.fatherPhone} fn={handlePersonalChange} req error={errors.fatherPhone} rejected={isFieldRejected('fathersPhone')} />
                            </div>
                            <div className="row">
                                <Input label="Mother's Name" name="motherName" val={personal.motherName} fn={handlePersonalChange} req error={errors.motherName} rejected={isFieldRejected('mothersName')} />
                                <Input label="Mother's Phone" name="motherPhone" val={personal.motherPhone} fn={handlePersonalChange} req error={errors.motherPhone} rejected={isFieldRejected('mothersPhone')} />
                            </div>

                            <h3>Emergency Contact</h3>
                            <div className="row">
                                <Input label="Contact Name" name="emergencyName" val={personal.emergencyName} fn={handlePersonalChange} req error={errors.emergencyName} rejected={isFieldRejected('emergencyContactName')} />
                                <Input label="Relationship" name="emergencyRel" val={personal.emergencyRel} fn={handlePersonalChange} req error={errors.emergencyRel} rejected={isFieldRejected('emergencyRelationship')} />
                            </div>
                            <div className="row">
                                <Input label="Emergency Number" name="emergencyPhone" val={personal.emergencyPhone} fn={handlePersonalChange} req error={errors.emergencyPhone} rejected={isFieldRejected('emergencyNumber')} />
                            </div>

                            <div className="form-actions right">
                                <button type="button" className="btn-primary" onClick={() => goToStep(2)}>Next <ChevronRight size={16} /></button>
                            </div>
                        </div>
                    )}

                    {/* SECTION 2: EDUCATION */}
                    {step === 2 && (
                        <div className="form-section animate-fade-in">
                            <h2>Education Details</h2>

                            <EducationBlock title="SSC" data={education.ssc} onChange={(f, v) => handleEduChange('ssc', f, v)} schoolLabel="School Name" req errors={errors} rejected={isFieldRejected('SSC')} />
                            <EducationBlock title="Intermediate" data={education.inter} onChange={(f, v) => handleEduChange('inter', f, v)} req errors={errors} rejected={isFieldRejected('Intermediate')} />
                            <EducationBlock title="Graduation" data={education.grad} onChange={(f, v) => handleEduChange('grad', f, v)} hasMarskMemo certLabel="Provisional Certificate" schoolLabel="College Name" req errors={errors} rejected={isFieldRejected('Graduation')} />

                            {/* Post Graduation */}
                            <div className="dynamic-section">
                                <div className="sec-head">
                                    <h3>Post Graduation</h3>
                                    <button type="button" className="btn-add" onClick={addPostGrad}><Plus size={14} /> Add</button>
                                </div>
                                {education.postGrad.map((pg, i) => (
                                    <div key={i} className="dynamic-card">
                                        <button type="button" className="btn-del" onClick={() => removePostGrad(i)}><Trash2 size={16} /></button>
                                        <div className="row">
                                            <Input label="College Name" val={pg.institutionName} fn={(e) => updatePostGrad(i, 'institutionName', e.target.value)} />
                                            <Input label="Year" val={pg.year} fn={(e) => updatePostGrad(i, 'year', e.target.value)} />
                                        </div>
                                        <div className="row">
                                            <Input label="Percentage/CGPA" val={pg.percentage} fn={(e) => updatePostGrad(i, 'percentage', e.target.value)} />
                                            <FileInput
                                                label="Certificate"
                                                onChange={(file) => updatePostGrad(i, 'certificate', file)}
                                                fileName={pg.certificate?.name}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Other Certificates */}
                            <div className="dynamic-section">
                                <div className="sec-head">
                                    <h3>Other Certificates</h3>
                                    <button type="button" className="btn-add" onClick={addCert}><Plus size={14} /> Add</button>
                                </div>
                                {education.otherCerts.map((cert, i) => (
                                    <div key={i} className="dynamic-card">
                                        <button type="button" className="btn-del" onClick={() => removeCert(i)}><Trash2 size={16} /></button>
                                        <div className="row">
                                            <Input label="Institute Name" val={cert.institute} fn={(e) => updateCert(i, 'institute', e.target.value)} />
                                            <Input label="Certificate Number" val={cert.certNumber} fn={(e) => updateCert(i, 'certNumber', e.target.value)} />
                                        </div>
                                        <div className="row">
                                            <FileInput
                                                label="Upload Certificate (File/Image)"
                                                onChange={(file) => updateCert(i, 'certificate', file)}
                                                fileName={cert.certificate?.name}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={() => goToStep(1)}><ChevronLeft size={16} /> Back</button>
                                <button type="button" className="btn-primary" onClick={() => goToStep(3)}>Next <ChevronRight size={16} /></button>
                            </div>
                        </div>
                    )}

                    {/* SECTION 3: EXPERIENCE */}
                    {step === 3 && (
                        <div className="form-section animate-fade-in">
                            <h2>Experience Details</h2>
                            {/* Internships */}
                            <div className="dynamic-section">
                                <div className="sec-head">
                                    <h3>Internships</h3>
                                    <button type="button" className="btn-add" onClick={addInternship}><Plus size={14} /> Add</button>
                                </div>
                                {experience.internships.map((int, i) => (
                                    <div key={i} className={`dynamic-card ${isFieldRejected('Internship') ? 'error' : ''}`}>
                                        <button type="button" className="btn-del" onClick={() => removeInternship(i)}><Trash2 size={16} /></button>
                                        <div className="row">
                                            <Input label="Company Name" val={int.company} fn={(e) => updateInternship(i, 'company', e.target.value)} rejected={isFieldRejected('Internship')} />
                                        </div>
                                        <div className="row">
                                            <Input type="date" label="Joining Date" val={int.joining} fn={(e) => updateInternship(i, 'joining', e.target.value)} rejected={isFieldRejected('Internship')} />
                                            <Input type="date" label="Relieving Date" val={int.relieving} fn={(e) => updateInternship(i, 'relieving', e.target.value)} rejected={isFieldRejected('Internship')} />
                                        </div>
                                        <div className="row">
                                            <Input label="Internship ID" val={int.id} fn={(e) => updateInternship(i, 'id', e.target.value)} rejected={isFieldRejected('Internship')} />
                                            <Input label="Duration (Months/Years)" val={int.duration} fn={(e) => updateInternship(i, 'duration', e.target.value)} rejected={isFieldRejected('Internship')} />
                                        </div>
                                        <div className="row">
                                            <FileInput
                                                label="Offer Letter"
                                                onChange={(file) => handleFileChange('experience', 'internships', 'offerLetter', file, i)}
                                                fileName={int.offerLetter?.name}
                                                rejected={isFieldRejected('Internship')}
                                            />
                                            <FileInput
                                                label="Experience Certificate"
                                                onChange={(file) => handleFileChange('experience', 'internships', 'relievingLetter', file, i)}
                                                fileName={int.relievingLetter?.name}
                                                rejected={isFieldRejected('Internship')}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Work History */}
                            <div className="dynamic-section">
                                <div className="sec-head">
                                    <h3>Work Experience</h3>
                                    <button type="button" className="btn-add" onClick={addWork}><Plus size={14} /> Add</button>
                                </div>
                                {experience.workHistory.map((work, i) => (
                                    <div key={i} className={`dynamic-card ${isFieldRejected('Work Experience') ? 'error' : ''}`}>
                                        <button type="button" className="btn-del" onClick={() => removeWork(i)}><Trash2 size={16} /></button>
                                        <div className="row">
                                            <Input label="Company Name" val={work.company} fn={(e) => updateWork(i, 'company', e.target.value)} rejected={isFieldRejected('Work Experience')} />
                                            <Input label="Years of Exp" val={work.years} fn={(e) => updateWork(i, 'years', e.target.value)} rejected={isFieldRejected('Work Experience')} />
                                        </div>
                                        <div className="row">
                                            <FileInput
                                                label="Offer Letter"
                                                onChange={(file) => updateWork(i, 'offerLetter', file)}
                                                fileName={work.offerLetter?.name}
                                                rejected={isFieldRejected('Work Experience')}
                                            />
                                            <FileInput
                                                label="Relieving Letter"
                                                onChange={(file) => updateWork(i, 'relievingLetter', file)}
                                                fileName={work.relievingLetter?.name}
                                                rejected={isFieldRejected('Work Experience')}
                                            />
                                        </div>
                                        <div className="row">
                                            <FileInput
                                                label="Payslips (Last 3 Months)"
                                                onChange={(file) => updateWork(i, 'payslips', file)}
                                                fileName={work.payslips?.name}
                                                rejected={isFieldRejected('Work Experience')}
                                            />
                                            <FileInput
                                                label="Experience Certificate"
                                                onChange={(file) => updateWork(i, 'experienceCert', file)}
                                                fileName={work.experienceCert?.name}
                                                rejected={isFieldRejected('Work Experience')}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={() => goToStep(2)}><ChevronLeft size={16} /> Back</button>
                                <button type="button" className="btn-primary" onClick={() => goToStep(4)}>Next <ChevronRight size={16} /></button>
                            </div>
                        </div>
                    )}

                    {/* SECTION 4: BANK DETAILS */}
                    {step === 4 && (
                        <div className="form-section animate-fade-in">
                            <h2>Bank Details</h2>
                            <div className="row">
                                <Input label="Bank Name" name="name" val={bank.name} fn={handleBankChange} req error={errors.name} rejected={isFieldRejected('bankName')} />
                                <Input label="Branch Name" name="branch" val={bank.branch} fn={handleBankChange} req error={errors.branch} rejected={isFieldRejected('branchName')} />
                            </div>
                            <div className="row">
                                <Input label="Account Number" name="accNumber" val={bank.accNumber} fn={handleBankChange} req error={errors.accNumber} rejected={isFieldRejected('accountNumber')} />
                                <Input
                                    label="IFSC Code"
                                    name="ifsc"
                                    val={bank.ifsc}
                                    fn={handleBankChange}
                                    req
                                    error={errors.ifsc}
                                    rejected={isFieldRejected('ifscCode')}
                                    placeholder="SBIN0001234"
                                    pattern="[A-Za-z]{4}0[0-9]{6}"
                                    title="Enter valid IFSC like SBIN0001234"
                                />
                            </div>

                            <div className="row">
                                <Input label="UPI ID" name="upiId" val={bank.upiId} fn={handleBankChange} req error={errors.upiId} rejected={isFieldRejected('upiId')} />
                            </div>

                            <h3>Document Upload</h3>
                            <div className="row">
                                <div className={`input-group ${isFieldRejected('passbookPath') ? 'error' : ''}`}>
                                    <label>Document Type {isFieldRejected('passbookPath') && <span className="rejected-badge">Rejected</span>}</label>
                                    <select
                                        name="docType"
                                        value={bank.docType}
                                        onChange={handleBankChange}
                                        className={`form-input ${isFieldRejected('passbookPath') ? 'error' : ''}`}
                                    >
                                        <option value="PASSBOOK">Passbook</option>
                                        <option value="STATEMENT">Bank Statement</option>
                                        <option value="CHEQUE">Cancelled Cheque</option>
                                    </select>
                                    {isFieldRejected('passbookPath') && <span className="error-msg">This document was rejected.</span>}
                                </div>
                                <FileInput
                                    label={`Upload ${bank.docImage ? ' (Selected)' : bank.docType}`}
                                    onChange={(file) => handleFileChange('bank', null, 'docImage', file)}
                                    fileName={bank.docImage?.name}
                                    error={errors.bankDoc}
                                    rejected={isFieldRejected('passbookPath')}
                                />
                            </div>

                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={() => goToStep(3)}><ChevronLeft size={16} /> Back</button>
                                <button type="button" className="btn-primary" onClick={() => goToStep(5)}>Next <ChevronRight size={16} /></button>
                            </div>
                        </div>
                    )}

                    {/* SECTION 5: OTHER DOCUMENTS */}
                    {step === 5 && (
                        <div className="form-section animate-fade-in">
                            <h2>Other Documents</h2>

                            <h3>Identity Proofs</h3>
                            <div className="row">
                                <Input label="PAN Card Number" name="panNumber" val={documents.panNumber} fn={handleDocumentChange} req error={errors.panNumber} rejected={isFieldRejected('PAN')} />
                                <FileInput
                                    label={`Upload PAN Card`}
                                    onChange={(file) => handleFileChange('documents', null, 'panCard', file)}
                                    fileName={documents.panCard?.name}
                                    req
                                    error={errors.panCard}
                                    rejected={isFieldRejected('PAN')}
                                />
                            </div>

                            <div className="row">
                                <Input label="Aadhar Card Number" name="aadharNumber" val={documents.aadharNumber} fn={handleDocumentChange} req error={errors.aadharNumber} rejected={isFieldRejected('AADHAR')} />
                                <FileInput
                                    label={`Upload Aadhar Card`}
                                    onChange={(file) => handleFileChange('documents', null, 'aadharCard', file)}
                                    fileName={documents.aadharCard?.name}
                                    req
                                    error={errors.aadharCard}
                                    rejected={isFieldRejected('AADHAR')}
                                />
                            </div>

                            <h3>Photos & Other IDs</h3>
                            <div className="row">
                                <FileInput
                                    label="Passport Size Photo"
                                    onChange={(file) => handleFileChange('documents', null, 'passportPhoto', file)}
                                    fileName={documents.passportPhoto?.name}
                                    req
                                    error={errors.passportPhoto}
                                    rejected={isFieldRejected('PHOTO')}
                                />
                                <FileInput
                                    label="Passport Document (Optional)"
                                    onChange={(file) => handleFileChange('documents', null, 'passportDoc', file)}
                                    fileName={documents.passportDoc?.name}
                                    rejected={isFieldRejected('PASSPORT')}
                                />
                            </div>

                            <div className="row">
                                <FileInput
                                    label="Voter ID Card (Optional)"
                                    onChange={(file) => handleFileChange('documents', null, 'voterId', file)}
                                    fileName={documents.voterId?.name}
                                    rejected={isFieldRejected('VOTER')}
                                />
                            </div>

                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={() => goToStep(4)}><ChevronLeft size={16} /> Back</button>
                                <button type="submit" className="btn-submit">Submit <CheckCircle size={16} /></button>
                            </div>
                        </div>
                    )}

                    {/* SECTION 6: LIVE PHOTO */}
                    {/* {step === 6 && (
                        <div className="form-section animate-fade-in">
                            <h2>Live Photo Capture</h2>
                            <p style={{ marginBottom: '1.5rem', color: '#5f6368' }}>Please provide a live photo for verification.</p>

                            <WebcamCapture onCapture={(img) => setLivePhoto(img)} initialImg={livePhoto} />

                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={() => setStep(5)}><ChevronLeft size={16} /> Back</button>
                                <button type="submit" className="btn-submit" disabled={!livePhoto}>Submit <CheckCircle size={16} /></button>
                            </div>
                        </div>
                    )} */}
                </form>
            </div >

            <style>{`
                .form-container {
                    min-height: 100vh;
                    background: #f0f2f5;
                    padding: 2rem;
                    display: flex;
                    justify-content: center;
                    font-family: 'Inter', sans-serif;
                }

                .form-card {
                    background: white;
                    width: 100%;
                    max-width: 900px;
            margin: 2rem auto;
                    border-radius: 8px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                    overflow: hidden;
                    position: relative;
                }

                .form-header {
                    padding: 2rem 2rem 1rem;
                    border-bottom: 1px solid #e0e0e0;
                }

                .form-header h1 {
                    font-size: 2rem;
                    color: #202124;
                    margin: 0 0 0.5rem 0;
                }

                .form-header p {
                    color: #5f6368;
                    font-size: 0.9rem;
                }

                .step-indicator {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                    background: #f8f9fa;
                    border-bottom: 1px solid #e0e0e0;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .step-indicator span:not(.line) {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #bdc1c6;
                    padding: 0.25rem 0.5rem;
                    border-radius: 4px;
                    white-space: nowrap;
                }

                .step-indicator span.active {
                    color: #673ab7;
                    background: #ede7f6;
                }

                .step-indicator .line {
                    height: 1px;
                    width: 20px;
                    background: #dadce0;
                    margin: 0;
                    flex-shrink: 0;
                }

                .form-section {
                    padding: 2rem;
                }

                .form-section h2 {
                    font-size: 1.25rem;
                    color: #202124;
                    margin-bottom: 1.5rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 2px solid #673ab7;
                    display: inline-block;
                }

                .form-section h3 {
                    font-size: 1rem;
                    color: #3c4043;
                    margin-top: 1.5rem;
                    margin-bottom: 1rem;
                    font-weight: 600;
                }

                .row {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                    margin-bottom: 1rem;
                }
 
                .input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
 
                .input-group.full {
                    grid-column: span 2;
                }

                .input-group label {
                    font-size: 0.85rem;
                    font-weight: 500;
                    color: #202124;
                }

                .form-input {
                    width: 100%;
                    max-width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #dadce0;
                    border-radius: 4px;
                    font-size: 0.9rem;
                    transition: all 0.2s;
                    box-sizing: border-box;
                }
 
                .form-input.error {
                    border-color: #d93025;
                    background-color: #fdf4f4;
                }
 
                .error-msg {
                    color: #d93025;
                    font-size: 0.75rem;
                    margin-top: 0.25rem;
                }
 
                .file-upload-box.error {
                    border: 2px dashed #d93025;
                    background-color: #fdf4f4;
                }

                .form-input:focus {
                    outline: none;
                    border-color: #673ab7;
                    border-width: 2px;
                    margin: -1px; /* visual fix for width jump */
                    margin-bottom: 0px;
                }

                .file-upload-box {
                    border: 1px dashed #dadce0;
                    padding: 1rem;
                    border-radius: 4px;
                    text-align: center;
                    color: #5f6368;
                    font-size: 0.85rem;
                    cursor: pointer;
                    transition: background 0.2s;
                }

                .file-upload-box:hover {
                    background: #f1f3f4;
                }

                /* Education Block */
                .edu-block {
                    background: #f8f9fa;
                    padding: 1rem;
                    border-radius: 8px;
                    margin-bottom: 1rem;
                    border: 1px solid #e0e0e0;
                }

                /* Dynamic Section */
                .dynamic-section {
                    margin-bottom: 2rem;
                }

                .sec-head {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }

                .dynamic-card {
                    background: #fff;
                    border: 1px solid #dadce0;
                    padding: 1.5rem;
                    border-radius: 8px;
                    margin-bottom: 1rem;
                    position: relative;
                }

                .btn-add {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    background: #e8f0fe;
                    color: #1a73e8;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 0.8rem;
                    font-weight: 600;
                }

                .btn-del {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: none;
                    border: none;
                    color: #d93025;
                    cursor: pointer;
                    opacity: 0.6;
                }

                .btn-del:hover {
                    opacity: 1;
                }

                /* Actions */
                .form-actions {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 2rem;
                    padding-top: 1rem;
                    border-top: 1px solid #e0e0e0;
                }

                .form-actions.right {
                    justify-content: flex-end;
                }

                .btn-primary, .btn-secondary, .btn-submit {
                    padding: 0.75rem 1.5rem;
                    border-radius: 4px;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    border: none;
                }

                .btn-primary {
                    background: #673ab7;
                    color: white;
                }

                .btn-secondary {
                    background: white;
                    color: #673ab7;
                    border: 1px solid #dadce0;
                }

                .btn-submit {
                    background: #1e8e3e;
                    color: white;
                }

                .animate-fade-in {
                    animation: fadeIn 0.4s ease-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .rejected-badge {
                    background: #fdf4f4;
                    color: #d93025;
                    font-size: 0.7rem;
                    font-weight: 700;
                    padding: 2px 6px;
                    border-radius: 4px;
                    border: 1px solid #d93025;
                    text-transform: uppercase;
                    margin-left: 0.5rem;
                }

                .loading-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(255, 255, 255, 0.8);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    z-index: 100;
                    border-radius: 12px;
                }

                .spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid #2563eb;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-bottom: 1rem;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @media (max-width: 600px) {
                    .row { grid-template-columns: 1fr; gap: 1rem; }
                    .form-container { padding: 1rem 0.5rem; }
                    .input-group.full { grid-column: span 1; }
                }
            `}</style>
        </div >
    );
};

const Input = ({ label, name, val, fn, req, type = "text", error, rejected, ...rest }) => (
    <div className={`input-group ${error || rejected ? 'error' : ''}`}>
        <label>
            {label} {req && <span style={{ color: 'red' }}>*</span>}
            {rejected && <span className="rejected-badge">Rejected</span>}
        </label>
        <input
            type={type}
            name={name}
            value={val || ''}
            onChange={fn}
            required={req}
            className={`form-input ${error || rejected ? 'error' : ''}`}
            {...rest}
        />
        {error && <span className="error-msg">{error}</span>}
        {rejected && <span className="error-msg">This field was rejected. Please update it.</span>}
    </div>
);

const FileInput = ({ label, onChange, fileName, req, error, rejected }) => {
    const fileRef = React.useRef(null);

    return (
        <div className={`input-group ${error || rejected ? 'error' : ''}`}>
            <label>
                {label} {req && <span style={{ color: 'red' }}>*</span>}
                {rejected && <span className="rejected-badge">Rejected</span>}
            </label>
            <div className={`file-upload-box ${error || rejected ? 'error' : ''}`} onClick={() => fileRef.current.click()}>
                <input
                    type="file"
                    ref={fileRef}
                    style={{ display: 'none' }}
                    onChange={(e) => onChange(e.target.files[0])}
                />
                <Upload size={18} style={{ marginBottom: '0.25rem' }} />
                <div>{fileName ? fileName : 'Click to upload file'}</div>
            </div>
            {error && <span className="error-msg">{error}</span>}
            {rejected && <span className="error-msg">This document was rejected. Please re-upload.</span>}
        </div>
    );
};

const EducationBlock = ({ title, data, onChange, hasMarskMemo, schoolLabel = "School/College Name", certLabel, req, errors = {}, rejected }) => {
    const levelKey = title.toLowerCase().includes('ssc') ? 'ssc' : title.toLowerCase().includes('inter') ? 'inter' : 'grad';

    return (
        <div className={`edu-block ${rejected ? 'error' : ''}`}>
            <h3>{title} {rejected && <span className="rejected-badge">Rejected</span>}</h3>
            <div className="row">
                <Input
                    label={schoolLabel}
                    val={data.institutionName}
                    fn={(e) => onChange('institutionName', e.target.value)}
                    req={req}
                    error={errors[`${levelKey}_institutionName`]}
                />
                <Input
                    label="Hall Ticket No."
                    val={data.htNumber}
                    fn={(e) => onChange('htNumber', e.target.value)}
                    req={req}
                    error={errors[`${levelKey}_htNumber`]}
                />
            </div>
            <div className="row">
                <Input
                    label="Passout Year"
                    type="number"
                    val={data.year}
                    fn={(e) => onChange('year', e.target.value)}
                    req={req}
                    error={errors[`${levelKey}_year`]}
                    rejected={rejected}
                />
                <Input
                    label="Percentage/CGPA"
                    val={data.percentage}
                    fn={(e) => onChange('percentage', e.target.value)}
                    req={req}
                    error={errors[`${levelKey}_percentage`]}
                    rejected={rejected}
                />
            </div>
            <div className="row">
                <FileInput
                    label={certLabel || `${title} Certificate`}
                    onChange={(file) => onChange('certificate', file)}
                    fileName={data.certificate?.name}
                    req={req}
                    error={errors[`${levelKey}_certificate`]}
                    rejected={rejected}
                />
                {hasMarskMemo && (
                    <FileInput
                        label="Marks Memo"
                        onChange={(file) => onChange('marksMemo', file)}
                        fileName={data.marksMemo?.name}
                        req={req}
                        rejected={rejected}
                    />
                )}
            </div>
        </div>
    );
};

const WebcamCapture = ({ onCapture, initialImg }) => {
    const videoRef = React.useRef(null);
    const canvasRef = React.useRef(null);
    const [stream, setStream] = React.useState(null);
    const [capturedImg, setCapturedImg] = React.useState(initialImg);
    const [error, setError] = React.useState(null);

    const startCamera = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
            setStream(mediaStream);
            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
            }
            setError(null);
        } catch (err) {
            console.error("Camera access error:", err);
            setError("Could not access camera. Please ensure permissions are granted.");
        }
    };

    const stopCamera = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
        }
    };

    const capturePhoto = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (video && canvas) {
            const context = canvas.getContext('2d');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = canvas.toDataURL('image/jpeg');
            setCapturedImg(imageData);
            onCapture(imageData);
            stopCamera();
        }
    };

    const reset = () => {
        setCapturedImg(null);
        onCapture(null);
        startCamera();
    };

    React.useEffect(() => {
        if (!capturedImg) {
            startCamera();
        }
        return () => stopCamera();
    }, []);

    return (
        <div className="webcam-container">
            {!capturedImg ? (
                <div className="video-wrapper">
                    <video ref={videoRef} autoPlay playsInline muted className="webcam-video" />
                    <div className="video-overlay"></div>
                    <button type="button" className="btn-capture" onClick={capturePhoto}>
                        <div className="inner-circle"></div>
                    </button>
                    {error && <div className="webcam-error">{error}</div>}
                </div>
            ) : (
                <div className="preview-wrapper">
                    <img src={capturedImg} alt="Captured" className="captured-img" />
                    <button type="button" className="btn-retake" onClick={reset}>
                        Retake Photo
                    </button>
                </div>
            )}
            <canvas ref={canvasRef} style={{ display: 'none' }} />

            <style>{`
                .webcam-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    width: 100%;
                    max-width: 500px;
                    margin: 0 auto;
                }
                .video-wrapper, .preview-wrapper {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 4/3;
                    background: #000;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                }
                .webcam-video, .captured-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .video-overlay {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 250px;
                    height: 250px;
                    border: 2px dashed rgba(255,255,255,0.5);
                    border-radius: 50%;
                    pointer-events: none;
                }
                .btn-capture {
                    position: absolute;
                    bottom: 1.5rem;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.3);
                    border: 4px solid #fff;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.2s;
                }
                .btn-capture:hover {
                    transform: translateX(-50%) scale(1.05);
                }
                .inner-circle {
                    width: 48px;
                    height: 48px;
                    background: #fff;
                    border-radius: 50%;
                }
                .btn-retake {
                    position: absolute;
                    bottom: 1rem;
                    right: 1rem;
                    background: rgba(0,0,0,0.6);
                    color: #fff;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    cursor: pointer;
                }
                .webcam-error {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: #ff5252;
                    text-align: center;
                    padding: 1rem;
                    background: rgba(0,0,0,0.8);
                    width: 80%;
                    border-radius: 8px;
                }
            `}</style>
        </div>
    );
};

export default EmployeeOnboardingForm;
