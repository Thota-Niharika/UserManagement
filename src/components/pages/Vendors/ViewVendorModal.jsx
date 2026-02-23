import React from 'react';
import { X, Briefcase, Calendar, Tag, ShieldCheck, Eye, Mail, Phone, Clock, FileText } from 'lucide-react';

const ViewVendorModal = ({ isOpen, onClose, vendor }) => {
    if (!isOpen || !vendor) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content animate-slide-up" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="modal-header">
                    <div className="header-icon">
                        <Eye size={24} />
                    </div>
                    <div className="header-text">
                        <h2>Vendor Profile</h2>
                        <p className="subtitle">Partnership details for <span className="highlight">{vendor.vendorName || vendor.name}</span></p>
                    </div>
                    <button className="close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="modal-body">
                    {/* Top Section: Identity & Status */}
                    <div className="info-section primary">
                        <div className="info-row">
                            <div className="info-item">
                                <span className="label">Vendor Name</span>
                                <span className="value large">{vendor.vendorName || vendor.name}</span>
                            </div>
                            <div className="info-item right-align">
                                <span className="label">Current Status</span>
                                <span className={`status-pill ${(vendor.status || '').replace(/\s+/g, '').toLowerCase()}`}>
                                    <span className="dot"></span>
                                    {vendor.status}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="divider"></div>

                    {/* Grid Section */}
                    <div className="info-grid">

                        {/* Column 1: Core Details */}
                        <div className="grid-column">
                            <h4 className="section-title"><Briefcase size={14} /> Core Details</h4>

                            <div className="info-item">
                                <span className="label">Vendor Type</span>
                                <span className="value">{vendor.vendorType || vendor.type}</span>
                            </div>

                            <div className="info-item">
                                <span className="label">Contact Person</span>
                                <span className="value">{vendor.contactPersonName || 'Not specified'}</span>
                            </div>

                            <div className="info-item">
                                <span className="label">Physical Address</span>
                                <span className="value address-text">{vendor.address || 'Not specified'}</span>
                            </div>

                            <div className="info-item">
                                <span className="label">Security Deposit</span>
                                <span className="value">{vendor.securityDeposit || 'N/A'}</span>
                            </div>

                            <div className="info-item">
                                <span className="label">Onboarded On</span>
                                <span className="value">{vendor.createdAt || 'N/A'}</span>
                            </div>
                        </div>

                        {/* Column 2: Contract & Contact */}
                        <div className="grid-column">
                            <h4 className="section-title"><FileText size={14} /> Contract & Contact</h4>

                            <div className="info-group">
                                <div className="info-item half">
                                    <span className="label">Start Date</span>
                                    <span className="value">{vendor.contractStart || vendor.startDate}</span>
                                </div>
                                <div className="info-item half">
                                    <span className="label">End Date</span>
                                    <span className="value">{vendor.contractEnd || vendor.endDate}</span>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="label">Email Address</span>
                                <div className="value-with-icon">
                                    <Mail size={14} />
                                    <a href={`mailto:${vendor.email}`}>{vendor.email}</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="label">Phone Number</span>
                                <div className="value-with-icon">
                                    <Phone size={14} />
                                    <a href={`tel:${vendor.phone}`}>{vendor.phone}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="modal-footer">
                    <button type="button" className="close-action-btn" onClick={onClose}>Close View</button>
                </div>
            </div>

            <style>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.5);
                    backdrop-filter: blur(4px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    padding: 1rem;
                }

                .animate-slide-up {
                    animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                @keyframes slideUp { 
                    from { transform: scale(0.95); opacity: 0; } 
                    to { transform: scale(1); opacity: 1; } 
                }

                .modal-content {
                    width: 100%;
                    max-width: 650px;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }

                .modal-header {
                    padding: 1.5rem 2rem;
                    background: #f8fafc;
                    border-bottom: 1px solid #e2e8f0;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .header-icon {
                    width: 44px;
                    height: 44px;
                    background: white;
                    border: 1px solid #e2e8f0;
                    color: #0ea5e9;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
                }

                .header-text h2 {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0;
                }

                .subtitle { 
                    font-size: 0.8125rem; 
                    color: #64748b; 
                    margin: 2px 0 0 0; 
                }

                .highlight {
                    color: #0f172a;
                    font-weight: 600;
                }

                .close-btn {
                    margin-left: auto;
                    background: transparent;
                    border: none;
                    color: #94a3b8;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 8px;
                    transition: all 0.2s;
                }

                .close-btn:hover {
                    background: #e2e8f0;
                    color: #64748b;
                }

                .modal-body {
                    padding: 2rem;
                }

                .info-section.primary {
                    margin-bottom: 1.5rem;
                }

                .info-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }

                .right-align {
                    align-items: flex-end;
                }

                .divider {
                    height: 1px;
                    background: #f1f5f9;
                    margin: 0 0 2rem 0;
                }

                .info-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                }

                .grid-column {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }

                .section-title {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: #94a3b8;
                    font-weight: 700;
                    margin: 0 0 0.5rem 0;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .info-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .info-group {
                    display: flex;
                    gap: 1rem;
                }

                .info-item.half {
                    flex: 1;
                }

                .label {
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: #64748b;
                }

                .value {
                    font-size: 0.9375rem;
                    color: #1e293b;
                    font-weight: 500;
                }

                .value.large {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #0f172a;
                }

                .address-text {
                    line-height: 1.5;
                    color: #475569;
                    font-size: 0.875rem;
                }



                .value-with-icon {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.9375rem;
                    color: #1e293b;
                }

                .value-with-icon svg {
                    color: #94a3b8;
                }

                .value-with-icon a {
                    color: #2563eb;
                    text-decoration: none;
                    font-weight: 500;
                }

                .value-with-icon a:hover {
                    text-decoration: underline;
                }

                .status-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-size: 0.8125rem;
                    font-weight: 600;
                }

                .status-pill .dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                }

                .status-pill.active { background: #dcfce7; color: #166534; }
                .status-pill.active .dot { background: #166534; }
                .status-pill.onhold { background: #fef9c3; color: #854d0e; }
                .status-pill.onhold .dot { background: #854d0e; }
                .status-pill.blacklisted { background: #fee2e2; color: #991b1b; }
                .status-pill.blacklisted .dot { background: #991b1b; }

                .modal-footer {
                    padding: 1.25rem 2rem;
                    background: #f8fafc;
                    border-top: 1px solid #e2e8f0;
                    display: flex;
                    justify-content: flex-end;
                }

                .close-action-btn {
                    padding: 0.625rem 1.5rem;
                    background: white;
                    border: 1px solid #cbd5e1;
                    color: #475569;
                    font-weight: 600;
                    font-size: 0.875rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .close-action-btn:hover {
                    background: #f1f5f9;
                    border-color: #94a3b8;
                }
            `}</style>
        </div>
    );
};

export default ViewVendorModal;
