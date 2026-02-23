import React from 'react';
import { X, User as UserIcon, Building2, Mail, Calendar, Phone, ShieldCheck, Tag, Briefcase, MapPin, CheckCircle2, XCircle, Eye, FileText } from 'lucide-react';

const ViewEmployeeModal = ({ isOpen, onClose, employee, onApprove, onReject, onRejectDocument }) => {
    React.useEffect(() => {
        if (isOpen && employee) {
            console.log("[DEBUG] ViewEmployeeModal opened with employee:", employee);
        }
    }, [isOpen, employee]);

    if (!isOpen || !employee) return null;

    const getFileUrl = (path) => {
        if (!path) return null;
        const sPath = path.toString();
        if (sPath.startsWith('http')) return sPath;
        if (sPath.startsWith('data:')) return sPath;
        if (sPath.startsWith('/api/onboarding/files/')) return sPath;

        // Clean path (backslashes to forward slashes)
        const cleanPath = sPath.replace(/\\/g, '/').split('/').pop(); // Backend serves from a flat folder, so just take filename

        // Use the correct backend endpoint from OnboardingController.java
        return `/api/onboarding/files/${cleanPath}`;
    };

    const renderDocCard = (label, path, fieldKey) => {
        if (!path) {
            return (
                <div className="doc-card doc-missing">
                    <div className="doc-info">
                        <span className="doc-label">{label}</span>
                        <span className="doc-status">Missing</span>
                    </div>
                    <div className="doc-placeholder">
                        <XCircle size={20} />
                    </div>
                </div>
            );
        }

        const lowerPath = (path || "").toLowerCase();
        const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(lowerPath);
        const isPdf = lowerPath.endsWith(".pdf");

        const fileUrl = getFileUrl(path);
        console.log(`[ViewEmployeeModal] Document: ${label}, Path: ${path}, Generated URL: ${fileUrl}`);

        return (
            <div className="doc-card">
                {isImage ? (
                    <div className="doc-preview">
                        <img
                            src={fileUrl}
                            alt={label}
                            onError={(e) => {
                                console.error(`[ViewEmployeeModal] Failed to load image: ${fileUrl}`);
                                // e.target.style.display = 'none'; // REMOVED: allow seeing broken image icon for debugging
                            }}
                        />
                    </div>
                ) : isPdf ? (
                    <div className="doc-preview doc-pdf-icon">
                        <FileText size={40} color="#ef4444" />
                        <span className="pdf-label">PDF Document</span>
                    </div>
                ) : (
                    <div className="doc-preview doc-generic-icon">
                        <FileText size={40} color="#94a3b8" />
                    </div>
                )}
                <div className="doc-info">
                    <span className="doc-label">{label}</span>
                    <span className="doc-status">Uploaded</span>
                </div>
                <div className="doc-actions">
                    <button
                        className="doc-view-btn"
                        title="View Document"
                        onClick={() => window.open(fileUrl, '_blank')}
                    >
                        <Eye size={14} />
                    </button>
                    <button
                        className="doc-reject-btn"
                        title="Reject & Request Re-upload"
                        onClick={() => onRejectDocument(employee, fieldKey, label)}
                    >
                        <X size={14} />
                        Reject
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content animate-slide-up" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header-banner">
                    <div className="header-info">
                        <div className="profile-badge">
                            {employee.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="header-text">
                            <h2>{employee.name}</h2>
                            <span className="emp-id-tag">Code: {employee.employeeId || employee.empCode}</span>
                        </div>
                    </div>
                    <button className="close-btn-light" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="profile-body">
                    <div className="status-banner">
                        <span className={`badge-large badge-${(employee.status || 'Active').toLowerCase()}`}>
                            {employee.status || 'Active'}
                        </span>
                        <span className="entity-label">{employee.entityName || employee.entity || 'N/A'}</span>
                    </div>

                    <div className="info-tabs">
                        <div className="info-section">
                            <h3 className="section-title">Professional Details</h3>
                            <div className="info-row-grid">
                                <div className="detail-item-compact">
                                    <Briefcase size={14} />
                                    <div>
                                        <label>Role</label>
                                        <span>{employee.roleName || employee.role || '-'}</span>
                                    </div>
                                </div>
                                <div className="detail-item-compact">
                                    <Building2 size={14} />
                                    <div>
                                        <label>Department</label>
                                        <span>{employee.deptName || employee.department || '-'}</span>
                                    </div>
                                </div>
                                <div className="detail-item-compact">
                                    <Building2 size={14} />
                                    <div>
                                        <label>Entity</label>
                                        <span>{employee.entityName || employee.entity || 'N/A'}</span>
                                    </div>
                                </div>
                                <div className="detail-item-compact">
                                    <Calendar size={14} />
                                    <div>
                                        <label>Interview Date</label>
                                        <span>{employee.dateOfInterview || '-'}</span>
                                    </div>
                                </div>
                                <div className="detail-item-compact">
                                    <Calendar size={14} />
                                    <div>
                                        <label>Onboarding Date</label>
                                        <span>{employee.onboardingDate || '-'}</span>
                                    </div>
                                </div>
                                <div className="detail-item-compact">
                                    <Calendar size={14} />
                                    <div>
                                        <label>Created Date</label>
                                        <span>{employee.createdAt?.date || '-'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-section">
                            <h3 className="section-title">Personal & Family</h3>
                            <div className="info-row-grid">
                                <div className="detail-item-compact">
                                    <Calendar size={14} />
                                    <div>
                                        <label>Date of Birth</label>
                                        <span>{employee.dateOfBirth || employee.dob || '-'}</span>
                                    </div>
                                </div>
                                <div className="detail-item-compact">
                                    <Tag size={14} />
                                    <div>
                                        <label>Blood Group</label>
                                        <span>{employee.bloodGroup || '-'}</span>
                                    </div>
                                </div>
                                <div className="detail-item-compact">
                                    <UserIcon size={14} />
                                    <div>
                                        <label>Father's Name</label>
                                        <span>{employee.fathersName || '-'} ({employee.fathersPhone || 'N/A'})</span>
                                    </div>
                                </div>
                                <div className="detail-item-compact">
                                    <UserIcon size={14} />
                                    <div>
                                        <label>Mother's Name</label>
                                        <span>{employee.mothersName || '-'} ({employee.mothersPhone || 'N/A'})</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-section">
                            <h3 className="section-title">Identity & Proofs</h3>
                            <div className="info-row-grid">
                                <div className="detail-item-compact">
                                    <ShieldCheck size={14} />
                                    <div>
                                        <label>PAN Number</label>
                                        <span className="font-mono text-primary">{employee.panNumber || employee.panProof?.documentNumber || '-'}</span>
                                        {(employee.panProof?.panPath || employee.panProof?.filePath) && (
                                            <a href="#" className="view-cert-link" onClick={(e) => { e.preventDefault(); window.open(getFileUrl(employee.panProof.panPath || employee.panProof.filePath), '_blank'); }}>
                                                <Eye size={12} /> View Proof
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="detail-item-compact">
                                    <ShieldCheck size={14} />
                                    <div>
                                        <label>Aadhar Number</label>
                                        <span className="font-mono text-primary">{employee.aadharNumber || employee.aadharProof?.documentNumber || '-'}</span>
                                        {(employee.aadharProof?.aadharPath || employee.aadharProof?.filePath) && (
                                            <a href="#" className="view-cert-link" onClick={(e) => { e.preventDefault(); window.open(getFileUrl(employee.aadharProof.aadharPath || employee.aadharProof.filePath), '_blank'); }}>
                                                <Eye size={12} /> View Proof
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-section">
                            <h3 className="section-title">Emergency Contact</h3>
                            <div className="info-row-grid">
                                <div className="detail-item-compact">
                                    <ShieldCheck size={14} />
                                    <div>
                                        <label>Contact Person</label>
                                        <span>{employee.emergencyContactName || '-'}</span>
                                    </div>
                                </div>
                                <div className="detail-item-compact">
                                    <Tag size={14} />
                                    <div>
                                        <label>Relationship</label>
                                        <span>{employee.emergencyRelationship || '-'}</span>
                                    </div>
                                </div>
                                <div className="detail-item-compact">
                                    <Phone size={14} />
                                    <div>
                                        <label>Emergency Phone</label>
                                        <span>{employee.emergencyNumber || '-'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-section">
                            <h3 className="section-title">Bank Information</h3>
                            <div className="info-row-grid">
                                <div className="detail-item-compact">
                                    <Building2 size={14} />
                                    <div>
                                        <label>Bank Name</label>
                                        <span>{employee.bankName || '-'}</span>
                                    </div>
                                </div>
                                <div className="detail-item-compact">
                                    <MapPin size={14} />
                                    <div>
                                        <label>Branch</label>
                                        <span>{employee.branchName || '-'}</span>
                                    </div>
                                </div>
                                <div className="detail-item-compact">
                                    <Tag size={14} />
                                    <div>
                                        <label>IFSC Code</label>
                                        <span>{employee.ifscCode || '-'}</span>
                                    </div>
                                </div>
                                <div className="detail-item-compact">
                                    <ShieldCheck size={14} />
                                    <div>
                                        <label>Account Number</label>
                                        <span>{employee.accountNumber || '-'}</span>
                                    </div>
                                </div>
                                <div className="detail-item-compact">
                                    <Tag size={14} />
                                    <div>
                                        <label>UPI ID</label>
                                        <span>{employee.upiId || '-'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-section">
                            <h3 className="section-title">Contact & Address</h3>
                            <div className="info-row-grid">
                                <div className="detail-item-compact">
                                    <Mail size={14} />
                                    <div>
                                        <label>Email</label>
                                        <span>{employee.email || '-'}</span>
                                    </div>
                                </div>
                                <div className="detail-item-compact">
                                    <Phone size={14} />
                                    <div>
                                        <label>Phone</label>
                                        <span>{employee.phoneNumber || employee.phone || '-'}</span>
                                    </div>
                                </div>
                                <div className="detail-item-compact full-width">
                                    <MapPin size={14} />
                                    <div>
                                        <label>Present Address</label>
                                        <span>{employee.presentAddress || '-'}</span>
                                    </div>
                                </div>
                                <div className="detail-item-compact full-width">
                                    <MapPin size={14} />
                                    <div>
                                        <label>Permanent Address</label>
                                        <span>{employee.permanentAddress || '-'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-section">
                            <h3 className="section-title">Summary of Records</h3>
                            <div className="stats-pills">
                                <div className="stat-pill">
                                    <span className="count">{employee.educationCount || 0}</span>
                                    <span className="label">Educations</span>
                                </div>
                                <div className="stat-pill">
                                    <span className="count">{employee.internshipCount || 0}</span>
                                    <span className="label">Internships</span>
                                </div>
                                <div className="stat-pill">
                                    <span className="count">{employee.workExperienceCount || 0}</span>
                                    <span className="label">Exp</span>
                                </div>
                                <div className="stat-pill">
                                    <span className="count">{employee.identityProofCount || 0}</span>
                                    <span className="label">Proofs</span>
                                </div>
                            </div>
                        </div>

                        {/* --- DOCUMENT VIEWER SECTION --- */}
                        <div className="info-section">
                            <h3 className="section-title">Uploaded Documents</h3>
                            <div className="doc-viewer-grid">
                                {renderDocCard("Bank Passbook", employee.passbookPath, "passbookPath")}
                                {employee.ssc && renderDocCard("SSC Certificate", employee.ssc.certificatePath, "ssc.certificatePath")}
                                {employee.ssc && renderDocCard("SSC Marks Memo", employee.ssc.marksMemoPath, "ssc.marksMemoPath")}
                                {employee.intermediate && renderDocCard("Inter Certificate", employee.intermediate.certificatePath, "intermediate.certificatePath")}
                                {employee.graduation && renderDocCard("Grad Certificate", employee.graduation.certificatePath, "graduation.certificatePath")}

                                {employee.panProof && renderDocCard(`PAN Card (${employee.panProof.documentNumber || employee.panNumber || '-'})`, employee.panProof.panPath, "panProof.panPath")}
                                {employee.aadharProof && renderDocCard(`Aadhar Card (${employee.aadharProof.documentNumber || employee.aadharNumber || '-'})`, employee.aadharProof.aadharPath, "aadharProof.aadharPath")}
                                {employee.voterProof && renderDocCard("Voter ID", employee.voterProof.voterPath, "voterProof.voterPath")}
                                {renderDocCard("Passport Photo", employee.photoPath, "photoPath")}
                                {renderDocCard("Passport Document", employee.passportPath, "passportPath")}

                                {/* Dynamic Lists */}
                                {employee.postGraduations && employee.postGraduations.map((pg, i) => (
                                    <React.Fragment key={`pg-${i}`}>
                                        {renderDocCard(`Post-Grad Cert (${i + 1})`, pg.certificatePath, `postGraduations[${i}].certificatePath`)}
                                        {renderDocCard(`Post-Grad Marks (${i + 1})`, pg.marksMemoPath, `postGraduations[${i}].marksMemoPath`)}
                                    </React.Fragment>
                                ))}
                                {employee.otherCertificates && employee.otherCertificates.map((cert, i) => (
                                    <React.Fragment key={`other-${i}`}>
                                        {renderDocCard(`Cert: ${cert.certificateNumber || 'Record ' + (i + 1)}`, cert.certificatePath, `otherCertificates[${i}].certificatePath`)}
                                    </React.Fragment>
                                ))}
                                {employee.internships && employee.internships.map((int, i) => (
                                    <React.Fragment key={`int-${i}`}>
                                        {renderDocCard(`Intern Offer (${int.companyName})`, int.offerLetterPath, `internships[${i}].offerLetterPath`)}
                                        {renderDocCard(`Intern Cert (${int.companyName})`, int.experienceCertificatePath, `internships[${i}].experienceCertificatePath`)}
                                    </React.Fragment>
                                ))}
                                {employee.workExperiences && employee.workExperiences.map((work, i) => (
                                    <React.Fragment key={`exp-${i}`}>
                                        {renderDocCard(`Work Offer (${work.companyName})`, work.offerLetterPath, `workExperiences[${i}].offerLetterPath`)}
                                        {renderDocCard(`Relieving Letter (${work.companyName})`, work.relievingLetterPath, `workExperiences[${i}].relievingLetterPath`)}
                                        {renderDocCard(`Payslips (${work.companyName})`, work.payslipsPath, `workExperiences[${i}].payslipsPath`)}
                                        {renderDocCard(`Exp Cert (${work.companyName})`, work.experienceCertificatePath, `workExperiences[${i}].experienceCertificatePath`)}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* --- NEW DETAILED SECTIONS --- */}
                        {(employee.ssc || employee.intermediate || employee.graduation) && (
                            <div className="info-section">
                                <h3 className="section-title">Education History</h3>
                                <div className="detail-cards-grid">
                                    {employee.ssc && (
                                        <div className="detail-card">
                                            <label className="card-tag">SSC / 10th</label>
                                            <div className="card-content">
                                                <strong>{employee.ssc.institutionName}</strong>
                                                <span>Year: {employee.ssc.passoutYear} | {employee.ssc.percentageCgpa}%</span>
                                                {employee.ssc.hallTicketNo && <span className="text-xs text-muted">ID: {employee.ssc.hallTicketNo}</span>}
                                                {employee.ssc.certificatePath && (
                                                    <a href="#" className="view-cert-link" onClick={(e) => { e.preventDefault(); window.open(getFileUrl(employee.ssc.certificatePath), '_blank'); }}>
                                                        <Eye size={12} /> View Certificate
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {employee.intermediate && (
                                        <div className="detail-card">
                                            <label className="card-tag">Intermediate / 12th</label>
                                            <div className="card-content">
                                                <strong>{employee.intermediate.institutionName}</strong>
                                                <span>Year: {employee.intermediate.passoutYear} | {employee.intermediate.percentageCgpa}%</span>
                                                {employee.intermediate.hallTicketNo && <span className="text-xs text-muted">ID: {employee.intermediate.hallTicketNo}</span>}
                                                {employee.intermediate.certificatePath && (
                                                    <a href="#" className="view-cert-link" onClick={(e) => { e.preventDefault(); window.open(getFileUrl(employee.intermediate.certificatePath), '_blank'); }}>
                                                        <Eye size={12} /> View Certificate
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {employee.graduation && (
                                        <div className="detail-card">
                                            <label className="card-tag">Graduation</label>
                                            <div className="card-content">
                                                <strong>{employee.graduation.institutionName}</strong>
                                                <span>Year: {employee.graduation.passoutYear} | {employee.graduation.percentageCgpa}%</span>
                                                {employee.graduation.hallTicketNo && <span className="text-xs text-muted">ID: {employee.graduation.hallTicketNo}</span>}
                                                {employee.graduation.certificatePath && (
                                                    <a href="#" className="view-cert-link" onClick={(e) => { e.preventDefault(); window.open(getFileUrl(employee.graduation.certificatePath), '_blank'); }}>
                                                        <Eye size={12} /> View Certificate
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {employee.postGraduations && employee.postGraduations.length > 0 && employee.postGraduations.map((pg, i) => (
                                        <div key={i} className="detail-card">
                                            <label className="card-tag">Post-Grad</label>
                                            <div className="card-content">
                                                <strong>{pg.institutionName}</strong>
                                                <span>Year: {pg.passoutYear} | {pg.percentageCgpa}%</span>
                                                {pg.hallTicketNo && <span className="text-xs text-muted">ID: {pg.hallTicketNo}</span>}
                                                <div className="card-actions-inline">
                                                    {pg.certificatePath && (
                                                        <a href="#" className="view-cert-link" onClick={(e) => { e.preventDefault(); window.open(getFileUrl(pg.certificatePath), '_blank'); }}>
                                                            <Eye size={12} /> View Certificate
                                                        </a>
                                                    )}
                                                    {pg.marksMemoPath && (
                                                        <a href="#" className="view-cert-link" onClick={(e) => { e.preventDefault(); window.open(getFileUrl(pg.marksMemoPath), '_blank'); }}>
                                                            <Eye size={12} /> View Marks Memo
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {employee.otherCertificates && employee.otherCertificates.length > 0 && employee.otherCertificates.map((cert, i) => (
                                        <div key={i} className="detail-card">
                                            <label className="card-tag">Certification</label>
                                            <div className="card-content">
                                                <strong>{cert.instituteName || cert.institute}</strong>
                                                <span>Number: {cert.certificateNumber}</span>
                                                {cert.certificatePath && (
                                                    <a href="#" className="view-cert-link" onClick={(e) => { e.preventDefault(); window.open(getFileUrl(cert.certificatePath), '_blank'); }}>
                                                        <Eye size={12} /> View Certificate
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {employee.internships && employee.internships.length > 0 && (
                            <div className="info-section">
                                <h3 className="section-title">Internships</h3>
                                <div className="detail-cards-grid">
                                    {employee.internships.map((int, i) => (
                                        <div key={i} className="detail-card">
                                            <div className="card-content">
                                                <strong>{int.companyName}</strong>
                                                <span className="text-muted">{int.duration} {int.internshipId && `(ID: ${int.internshipId})`}</span>
                                                <div className="card-footer-mini">
                                                    <span>{int.joiningDate} to {int.relievingDate}</span>
                                                </div>
                                                <div className="card-actions-inline">
                                                    {int.offerLetterPath && (
                                                        <a href="#" className="view-cert-link" onClick={(e) => { e.preventDefault(); window.open(getFileUrl(int.offerLetterPath), '_blank'); }}>
                                                            <Eye size={12} /> Offer Letter
                                                        </a>
                                                    )}
                                                    {int.experienceCertificatePath && (
                                                        <a href="#" className="view-cert-link" onClick={(e) => { e.preventDefault(); window.open(getFileUrl(int.experienceCertificatePath), '_blank'); }}>
                                                            <Eye size={12} /> Exp Certificate
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {employee.workExperiences && employee.workExperiences.length > 0 && (
                            <div className="info-section">
                                <h3 className="section-title">Work Experience</h3>
                                <div className="detail-cards-grid">
                                    {employee.workExperiences.map((work, i) => (
                                        <div key={i} className="detail-card">
                                            <div className="card-content">
                                                <strong>{work.companyName}</strong>
                                                <span className="text-muted">{work.yearsOfExp}</span>
                                                <div className="card-actions-inline">
                                                    {work.offerLetterPath && (
                                                        <a href="#" className="view-cert-link" onClick={(e) => { e.preventDefault(); window.open(getFileUrl(work.offerLetterPath), '_blank'); }}>
                                                            <Eye size={12} /> Offer
                                                        </a>
                                                    )}
                                                    {work.relievingLetterPath && (
                                                        <a href="#" className="view-cert-link" onClick={(e) => { e.preventDefault(); window.open(getFileUrl(work.relievingLetterPath), '_blank'); }}>
                                                            <Eye size={12} /> Relieving
                                                        </a>
                                                    )}
                                                    {work.payslipsPath && (
                                                        <a href="#" className="view-cert-link" onClick={(e) => { e.preventDefault(); window.open(getFileUrl(work.payslipsPath), '_blank'); }}>
                                                            <Eye size={12} /> Payslips
                                                        </a>
                                                    )}
                                                    {work.experienceCertificatePath && (
                                                        <a href="#" className="view-cert-link" onClick={(e) => { e.preventDefault(); window.open(getFileUrl(work.experienceCertificatePath), '_blank'); }}>
                                                            <Eye size={12} /> Exp Cert
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                </div>


                <div className="modal-footer-centered">
                    <button className="secondary-btn-wide" onClick={onClose}>Close Profile</button>
                    {['onboarding', 'under_review'].includes(employee.status?.toLowerCase()) && (
                        <>
                            <button className="reject-btn-wide" onClick={() => onReject(employee)} style={{
                                background: '#fee2e2', color: '#dc2626', border: '1px solid #fecaca',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                padding: '12px 24px', borderRadius: '12px', fontWeight: 600, cursor: 'pointer', flex: 1
                            }}>
                                <XCircle size={18} />
                                Reject
                            </button>
                            <button className="submit-btn-wide" onClick={() => onApprove(employee)} style={{ flex: 1 }}>
                                <CheckCircle2 size={18} />
                                Approve
                            </button>
                        </>
                    )}
                </div>
            </div>

            <style>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(8px);
                    display: flex;
                    justify-content: center;
                    z-index: 9999;
                    padding: 2rem 1rem;
                    overflow-y: auto;
                }

                .modal-content {
                    width: 100%;
                    max-width: 550px;
                    background: white;
                    border-radius: 20px;
                    margin: auto;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                }

                .modal-header-banner {
                    background: var(--primary);
                    background: linear-gradient(135deg, var(--primary) 0%, #1e40af 100%);
                    padding: 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    color: white;
                }

                .header-info {
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                }

                .profile-badge {
                    width: 64px;
                    height: 64px;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(4px);
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: white;
                }

                .header-text h2 {
                    font-size: 1.5rem;
                    font-weight: 800;
                    margin-bottom: 0.25rem;
                }

                .emp-id-tag {
                    font-size: 0.875rem;
                    opacity: 0.8;
                    font-family: monospace;
                    background: rgba(255, 255, 255, 0.1);
                    padding: 2px 8px;
                    border-radius: 4px;
                }

                .close-btn-light {
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    color: white;
                    padding: 0.5rem;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .close-btn-light:hover {
                    background: rgba(255, 255, 255, 0.2);
                }

                .profile-body {
                    padding: 2rem;
                }

                .status-banner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                    padding-bottom: 1.5rem;
                    border-bottom: 1px solid var(--divider);
                }

                .badge-large {
                    padding: 6px 14px;
                    border-radius: 20px;
                    font-size: 0.875rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .entity-label {
                    font-weight: 600;
                    color: var(--text-muted);
                    font-size: 0.875rem;
                }

                .info-tabs {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .info-section {
                    background: #f8fafc;
                    padding: 1.25rem;
                    border-radius: 12px;
                    border: 1px solid var(--divider);
                }

                .section-title {
                    font-size: 0.7rem;
                    font-weight: 800;
                    color: var(--primary);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .info-row-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                }

                .detail-item-compact {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .detail-item-compact svg {
                    color: #64748b;
                    flex-shrink: 0;
                }

                .detail-item-compact div {
                    display: flex;
                    flex-direction: column;
                }

                .detail-item-compact label {
                    font-size: 0.625rem;
                    color: var(--text-muted);
                    font-weight: 600;
                    margin-bottom: 1px;
                }

                .detail-item-compact span {
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: var(--text-main);
                }

                .full-width {
                    grid-column: span 2;
                }

                .stats-pills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }

                .stat-pill {
                    background: white;
                    border: 1px solid var(--divider);
                    padding: 0.5rem 1rem;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    min-width: 80px;
                }

                .stat-pill .count {
                    font-size: 1.125rem;
                    font-weight: 800;
                    color: var(--primary);
                }

                .stat-pill .label {
                    font-size: 0.625rem;
                    font-weight: 700;
                    color: var(--text-muted);
                    text-transform: uppercase;
                }

                .modal-footer-centered {
                    padding: 1.5rem 2rem;
                    background: #f8fafc;
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    border-top: 1px solid var(--divider);
                }

                .secondary-btn-wide {
                    background: white;
                    border: 1px solid var(--border-color);
                    color: var(--text-main);
                    padding: 0.75rem 3rem;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                }

                .secondary-btn-wide:hover {
                    background: var(--bg-main);
                    border-color: var(--primary);
                    color: var(--primary);
                    transform: translateY(-1px);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }

                .secondary-btn-wide:active {
                    transform: translateY(0);
                }

                .submit-btn-wide {
                    background: #10b981;
                    color: white;
                    border: none;
                    padding: 0.75rem 3rem;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.2);
                }

                .submit-btn-wide:hover {
                    background: #059669;
                    transform: translateY(-1px);
                    box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.3);
                }

                .submit-btn-wide:active {
                    transform: translateY(0);
                }

                .action-group-wide {
                    display: flex;
                    gap: 1rem;
                    width: 100%;
                    max-width: 450px;
                }

                .approve-btn-wide {
                    flex: 1;
                    background: #10b981;
                    color: white;
                    border: none;
                    padding: 0.75rem 1.5rem;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    transition: all 0.2s;
                    box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.2);
                }

                .approve-btn-wide:hover {
                    background: #059669;
                    transform: translateY(-1px);
                    box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.3);
                }

                .reject-btn-wide {
                    flex: 1;
                    background: white;
                    border: 1px solid #ef4444;
                    color: #ef4444;
                    padding: 0.75rem 1.5rem;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    transition: all 0.2s;
                }

                .reject-btn-wide:hover {
                    background: #fef2f2;
                    transform: translateY(-1px);
                }

                .doc-viewer-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                }

                .doc-card {
                    background: white;
                    border: 1px solid var(--divider);
                    border-radius: 12px;
                    padding: 0.75rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    transition: all 0.2s;
                    position: relative;
                    overflow: hidden;
                }

                .doc-preview {
                    width: 100%;
                    height: 100px;
                    border-radius: 8px;
                    overflow: hidden;
                    background: #f8fafc;
                    border: 1px solid #f1f5f9;
                }

                .doc-preview img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    background: #fff;
                }

                .doc-card:hover {
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                    border-color: var(--primary);
                }

                .doc-missing {
                    background: #fef2f2;
                    border-color: #fee2e2;
                    opacity: 0.8;
                }

                .doc-info {
                    display: flex;
                    flex-direction: column;
                }

                .doc-label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--text-main);
                }

                .doc-status {
                    font-size: 0.625rem;
                    font-weight: 600;
                    color: var(--text-muted);
                }

                .view-cert-link {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    font-size: 0.75rem;
                    color: var(--primary);
                    margin-top: 0.5rem;
                    text-decoration: none;
                    font-weight: 600;
                }
                
                .view-cert-link:hover {
                    text-decoration: underline;
                }

                .card-actions-inline {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                    margin-top: 0.5rem;
                }

                .doc-actions {
                    display: flex;
                    gap: 0.5rem;
                }

                .doc-view-btn {
                    padding: 4px 8px;
                    border-radius: 6px;
                    background: var(--bg-main);
                    border: 1px solid var(--divider);
                    color: var(--primary);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .doc-view-btn:hover {
                    background: white;
                    border-color: var(--primary);
                }

                .doc-reject-btn {
                    flex: 1;
                    padding: 4px 8px;
                    border-radius: 6px;
                    background: #fef2f2;
                    border: 1px solid #fee2e2;
                    color: #ef4444;
                    font-size: 0.65rem;
                    font-weight: 700;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.25rem;
                    transition: all 0.2s;
                }

                .doc-reject-btn:hover {
                    background: #ef4444;
                    color: white;
                }

                .doc-placeholder {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem;
                    color: #cbd5e1;
                }

                .animate-slide-up {
                    animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                @media (max-width: 600px) {
                    .modal-overlay {
                        padding: 0.5rem;
                    }

                    .modal-content {
                        border-radius: 12px;
                    }

                    .modal-header-banner {
                        padding: 1.25rem;
                        flex-direction: column;
                        gap: 1rem;
                    }

                    .header-info {
                        gap: 0.75rem;
                    }

                    .profile-badge {
                        width: 48px;
                        height: 48px;
                        font-size: 1.25rem;
                        border-radius: 12px;
                    }

                    .header-text h2 {
                        font-size: 1.25rem;
                    }

                    .profile-body {
                        padding: 1.25rem;
                    }

                    .info-section {
                        padding: 1rem;
                    }

                    .info-row-grid {
                        grid-template-columns: 1fr;
                        gap: 1.25rem;
                    }

                    .doc-viewer-grid {
                        grid-template-columns: 1fr;
                    }

                    .stats-pills {
                        justify-content: center;
                    }

                    .stat-pill {
                        flex: 1;
                        min-width: 70px;
                        padding: 0.4rem;
                    }

                    .modal-footer-centered {
                        padding: 1.25rem;
                    }

                    .action-group-wide {
                        flex-direction: column-reverse; /* Put Reject below Approve on mobile */
                        max-width: 100%;
                    }

                    .secondary-btn-wide, .approve-btn-wide, .reject-btn-wide {
                        width: 100%;
                        padding: 0.875rem;
                    }

                    .close-btn-light {
                        position: absolute;
                        top: 1.25rem;
                        right: 1.25rem;
                    }
                }

                .full-width {
                    grid-column: span 2;
                }

                @media (max-width: 600px) {
                    .full-width {
                        grid-column: span 1;
                    }
                }

                .detail-cards-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .detail-card {
                    background: white;
                    border: 1px solid var(--divider);
                    border-radius: 12px;
                    padding: 1rem;
                    position: relative;
                    transition: transform 0.2s;
                }

                .detail-card:hover {
                    border-color: var(--primary);
                    transform: translateX(4px);
                }

                .card-tag {
                    position: absolute;
                    top: -8px;
                    right: 12px;
                    background: var(--primary);
                    color: white;
                    font-size: 0.625rem;
                    font-weight: 800;
                    padding: 2px 8px;
                    border-radius: 4px;
                    text-transform: uppercase;
                }

                .card-content {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .card-content strong {
                    font-size: 0.875rem;
                    color: var(--text-main);
                }

                .card-content span {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .card-footer-mini {
                    margin-top: 0.5rem;
                    padding-top: 0.5rem;
                    border-top: 1px dashed var(--divider);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.65rem;
                    color: var(--primary);
                    font-weight: 600;
                }

                .emp-id-tag-mini {
                    font-size: 0.65rem;
                    background: var(--bg-main);
                    padding: 1px 6px;
                    border-radius: 3px;
                    color: var(--primary);
                }

                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .doc-pdf-icon, .doc-generic-icon {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: #f8fafc;
                    gap: 0.5rem;
                }

                .pdf-label {
                    font-size: 0.65rem;
                    font-weight: 700;
                    color: #ef4444;
                    text-transform: uppercase;
                }
            `}</style>
        </div >
    );
};

export default ViewEmployeeModal;
