import React, { useState, useEffect } from 'react';
import { X, Briefcase, User as UserIcon, Calendar, Tag, ShieldCheck, Mail, Phone } from 'lucide-react';
import apiService from '../../../services/api';

const AddVendorModal = ({ isOpen, onClose, onAdd }) => {
    const [vendorTypes, setVendorTypes] = useState([]);
    const [formData, setFormData] = useState({
        vendorName: '',
        vendorType: '', // Default to empty, user must select
        contactPersonName: '',
        address: '',
        contractStart: '',
        contractEnd: '',
        phone: '',
        email: '',
        securityDeposit: '',
        status: 'Active'
    });

    useEffect(() => {
        if (isOpen) {
            fetchVendorTypes();
        }
    }, [isOpen]);

    const fetchVendorTypes = async () => {
        try {
            const types = await apiService.getVendorTypes();
            setVendorTypes(Array.isArray(types) ? types : []);
        } catch (error) {
            console.error('Failed to fetch vendor types:', error);
        }
    };

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!formData.vendorName || !formData.vendorType || !formData.contactPersonName || !formData.contractStart || !formData.contractEnd || !formData.phone || !formData.email || !formData.address || !formData.securityDeposit) {
            alert('Please fill in all required fields including Contact Person, Address and Security Deposit.');
            return;
        }

        onAdd(formData);

        // Reset and Close
        setFormData({
            vendorName: '',
            vendorType: '',
            contactPersonName: '',
            address: '',
            contractStart: '',
            contractEnd: '',
            phone: '',
            email: '',
            securityDeposit: '',
            status: 'Active'
        });
        onClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content animate-slide-up" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="header-icon">
                        <Briefcase size={24} />
                    </div>
                    <div className="header-text">
                        <h2>Register New Vendor</h2>
                        <p className="subtitle">Onboard a new service provider to the ecosystem.</p>
                    </div>
                    <button className="close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="vendor-form">
                    <div className="form-section">
                        <div className="form-grid">
                            <div className="form-group">
                                <label><Briefcase size={14} /> Vendor Name</label>
                                <input
                                    type="text"
                                    name="vendorName"
                                    value={formData.vendorName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter Vendor Name"
                                />
                            </div>
                            <div className="form-group">
                                <label><Tag size={14} /> Vendor Type</label>
                                <select
                                    name="vendorType"
                                    value={formData.vendorType}
                                    onChange={handleChange}
                                    className="form-select"
                                >
                                    <option value="">Select Vendor Type</option>
                                    {vendorTypes.map((type, index) => (
                                        <option key={index} value={type.typeName || type.name || type}>
                                            {type.typeName || type.name || type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label><UserIcon size={14} /> Contact Person Name</label>
                            <input
                                type="text"
                                name="contactPersonName"
                                value={formData.contactPersonName}
                                onChange={handleChange}
                                required
                                placeholder="Enter the name of the primary contact person"
                            />
                        </div>

                        <div className="form-group full-width">
                            <label><Tag size={14} /> Vendor Address</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                placeholder="Enter full physical address of the vendor"
                                className="form-textarea"
                                rows="2"
                            />
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label><Calendar size={14} /> Contract Start Date</label>
                                <input
                                    type="date"
                                    name="contractStart"
                                    value={formData.contractStart}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label><Calendar size={14} /> Contract End Date</label>
                                <input
                                    type="date"
                                    name="contractEnd"
                                    value={formData.contractEnd}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label><Mail size={14} /> Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="vendor@example.com"
                                />
                            </div>
                            <div className="form-group">
                                <label><Phone size={14} /> Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label><ShieldCheck size={14} /> Security Deposit Amount</label>
                                <input
                                    type="text"
                                    name="securityDeposit"
                                    value={formData.securityDeposit}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g. ₹ 50,000"
                                />
                            </div>

                            <div className="form-group">
                                <label><ShieldCheck size={14} /> Partnership Status</label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="form-select"
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="glass-btn secondary" onClick={onClose}>Cancel</button>
                        <button type="submit" className="primary-glow-btn">Complete Onboarding</button>
                    </div>
                </form>
            </div >

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

                .animate-backdrop {
                    animation: fadeIn 0.3s ease-out;
                }

                .modal-content {
                    width: 100%;
                    max-width: 600px;
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 24px;
                    margin: auto;
                    position: relative;
                    overflow: visible;
                    box-shadow: 
                        0 20px 25px -5px rgba(0, 0, 0, 0.1),
                        0 10px 10px -5px rgba(0, 0, 0, 0.04),
                        0 0 0 1px rgba(0, 0, 0, 0.05);
                }

                .animate-slide-up {
                    animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .modal-header {
                    padding: 1.75rem 2rem;
                    border-bottom: 1px solid var(--divider);
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                    background: #fafafa;
                }

                .header-icon {
                    width: 48px;
                    height: 48px;
                    background: #eff6ff;
                    color: #2563eb;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .header-text h2 {
                    font-size: 1.25rem;
                    font-weight: 800;
                    margin-bottom: 0.125rem;
                    color: var(--text-main);
                    letter-spacing: -0.01em;
                }

                .subtitle {
                    font-size: 0.8125rem;
                    color: var(--text-muted);
                }

                .close-btn {
                    margin-left: auto;
                    background: white;
                    color: var(--text-muted);
                    padding: 0.5rem;
                    border-radius: 10px;
                    border: 1px solid var(--border-color);
                    transition: all 0.2s;
                    align-self: flex-start;
                }

                .close-btn:hover {
                    background: #fee2e2;
                    color: #ef4444;
                    border-color: #fecaca;
                }

                .vendor-form {
                    padding: 2rem;
                }

                .form-section {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.25rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.625rem;
                }

                .form-group label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--text-main);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .form-group label svg {
                    color: var(--primary);
                }

                .form-group input, 
                .form-group select,
                .form-textarea {
                    padding: 0.875rem 1rem;
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    font-size: 0.9375rem;
                    outline: none;
                    transition: all 0.2s;
                    background: white;
                    width: 100%;
                    font-family: inherit;
                }

                .form-textarea {
                    resize: vertical;
                    min-height: 80px;
                }

                .form-group input:focus, 
                .form-group select:focus,
                .form-textarea:focus {
                    border-color: var(--primary);
                    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
                }

                .tag-input-container {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    padding: 0.5rem;
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    background: white;
                }

                .tag-input-container:focus-within {
                    border-color: var(--primary);
                    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
                }

                .tags-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .tag-pill {
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                    padding: 0.25rem 0.75rem;
                    background: #eff6ff;
                    color: #2563eb;
                    border-radius: 20px;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    border: 1px solid #dbeafe;
                }

                .tag-pill button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: none;
                    border: none;
                    color: #2563eb;
                    cursor: pointer;
                    padding: 0;
                    border-radius: 50%;
                }

                .tag-pill button:hover {
                    color: #1d4ed8;
                }

                .tag-input-container input {
                    border: none !important;
                    box-shadow: none !important;
                    padding: 0.375rem 0.5rem !important;
                }

                .modal-footer {
                    margin-top: 2rem;
                    padding-top: 1.5rem;
                    display: flex;
                    justify-content: flex-end;
                    gap: 1rem;
                    border-top: 1px solid var(--divider);
                }

                .primary-glow-btn {
                    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                    color: white;
                    padding: 0.75rem 1.75rem;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.875rem;
                    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
                    transition: all 0.2s;
                }

                .primary-glow-btn:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 8px 16px rgba(37, 99, 235, 0.3);
                }

                .glass-btn {
                    background: white;
                    border: 1px solid var(--border-color);
                    color: var(--text-main);
                    padding: 0.75rem 1.75rem;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    transition: all 0.2s;
                }

                .glass-btn:hover {
                    background: #f8fafc;
                    border-color: var(--text-muted);
                }

                @media (max-width: 480px) {
                    .form-grid {
                        grid-template-columns: 1fr;
                    }
                    .modal-header {
                        padding: 1.25rem 1.5rem;
                    }
                    .vendor-form {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </div >
    );
};

export default AddVendorModal;
