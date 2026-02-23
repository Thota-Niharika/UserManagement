import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const AddDepartmentModal = ({ isOpen, onClose, onSave, initialData = null }) => {
    const [name, setName] = useState('');
    const [deptId, setDeptId] = useState('');

    useEffect(() => {
        if (isOpen && initialData) {
            setName(initialData.deptName || initialData.name || '');
            setDeptId(initialData.deptCode || initialData.deptId || initialData.id || '');
        } else if (isOpen) {
            setName('');
            setDeptId('');
        }
    }, [isOpen, initialData]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !deptId.trim()) {
            alert('Please enter both Department Name and Department ID.');
            return;
        }
        onSave({
            deptName: name.trim(),
            deptCode: deptId.trim(),
            id: initialData ? (initialData.id || initialData.deptId) : null
        });
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content card" style={{ maxWidth: '400px' }} onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <div>
                        <h2>{initialData ? 'Edit Department' : 'Add New Department'}</h2>
                        <p className="subtitle">{initialData ? 'Update department details.' : 'Create a new department category.'}</p>
                    </div>
                    <button className="close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="employee-form">
                    <div className="form-group">
                        <label>Department Code</label>
                        <input
                            type="text"
                            value={deptId}
                            onChange={(e) => setDeptId(e.target.value)}
                            required
                            placeholder="e.g. FIN001"
                            disabled={!!initialData} // Lock ID on edit if desired, or allow edit
                        />
                    </div>
                    <div className="form-group">
                        <label>Department Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="e.g. Finance, Marketing"
                            autoFocus
                        />
                    </div>

                    <div className="modal-footer" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                        <button type="button" className="secondary-btn" onClick={onClose}>Cancel</button>
                        <button type="submit" className="primary-btn">{initialData ? 'Update' : 'Create'} Department</button>
                    </div>
                </form>
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
                    align-items: center;
                    z-index: 9999;
                    padding: 1rem;
                }
                
                .modal-content {
                    width: 100%;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    overflow: visible;
                    position: relative;
                }

                .modal-header {
                    padding: 1.5rem;
                    border-bottom: 1px solid #e2e8f0;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .modal-header h2 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 0.25rem;
                }

                .subtitle {
                    font-size: 0.875rem;
                    color: #64748b;
                }

                .close-btn {
                    background: none;
                    border: none;
                    color: #94a3b8;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }

                .close-btn:hover {
                    background: #f1f5f9;
                    color: #475569;
                }

                .employee-form {
                    padding: 1.5rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .form-group label {
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: #1e293b;
                }

                .form-group input {
                    padding: 0.625rem 0.875rem;
                    border: 1px solid #cbd5e1;
                    border-radius: 6px;
                    font-size: 0.875rem;
                    outline: none;
                    transition: border-color 0.2s;
                }

                .form-group input:focus {
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }

                .modal-footer {
                    margin-top: 1.5rem;
                }

                .primary-btn {
                    background: #3b82f6;
                    color: white;
                    padding: 0.625rem 1.25rem;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    border: none;
                    cursor: pointer;
                    transition: background 0.2s;
                }

                .primary-btn:hover {
                    background: #2563eb;
                }

                .secondary-btn {
                    background: white;
                    border: 1px solid #e2e8f0;
                    color: #1e293b;
                    padding: 0.625rem 1.25rem;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .secondary-btn:hover {
                    background: #f8fafc;
                    border-color: #cbd5e1;
                }
            `}</style>
        </div>
    );
};

export default AddDepartmentModal;
