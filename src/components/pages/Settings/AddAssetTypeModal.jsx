import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, GripVertical, Settings2, Info } from 'lucide-react';

const AddAssetTypeModal = ({ isOpen, onClose, onSave, initialData }) => {
    const [typeName, setTypeName] = useState('');
    const [fields, setFields] = useState([]);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (initialData) {
            setTypeName(initialData.typeName || '');
            setFields(initialData.fields || []);
        } else {
            setTypeName('');
            setFields([]);
        }
    }, [initialData, isOpen]);

    const addField = () => {
        setFields([...fields, { name: '', type: 'text', required: false, options: [] }]);
    };

    const removeField = (index) => {
        setFields(fields.filter((_, i) => i !== index));
    };

    const updateField = (index, updates) => {
        const newFields = [...fields];
        newFields[index] = { ...newFields[index], ...updates };
        setFields(newFields);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!typeName.trim()) {
            alert('Please enter an asset type name');
            return;
        }

        setIsSaving(true);
        try {
            await onSave({
                id: initialData?.id,
                typeName,
                fields
            });
            onClose();
        } catch (error) {
            console.error('Error saving asset type:', error);
        } finally {
            setIsSaving(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container-wide animate-pop" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="header-info">
                        {/* <div className="header-icon asset-config-icon">
                            <Settings2 size={24} />
                        </div> */}
                        <div>
                            <h3>{initialData ? 'Edit Asset Configuration' : 'New Asset Configuration'}</h3>
                            <p>Define custom fields and technical specifications for this asset type.</p>
                        </div>
                    </div>
                    <button className="close-btn" onClick={onClose}><X size={20} /></button>
                </div>

                <form onSubmit={handleSubmit} className="modal-body scrollable-body">
                    <div className="form-group-sticky">
                        <label>Asset Type Name</label>
                        <input
                            type="text"
                            value={typeName}
                            onChange={(e) => setTypeName(e.target.value)}
                            placeholder="e.g. Laptop, Monitor, Charger"
                            required
                            className="primary-input"
                        />
                    </div>

                    <div className="configuration-section">
                        <div className="section-title-bar">
                            <h4>Custom Maintenance Fields</h4>
                            <button type="button" className="add-field-btn" onClick={addField}>
                                <Plus size={14} /> Add Field
                            </button>
                        </div>

                        {fields.length === 0 ? (
                            <div className="empty-fields-state">
                                <Info size={32} />
                                <p>No custom fields defined. Add fields like RAM, Processor, or Serial Number patterns.</p>
                            </div>
                        ) : (
                            <div className="fields-list">
                                {fields.map((field, index) => (
                                    <div key={index} className="field-row-card">
                                        <div className="field-drag-handle">
                                            <GripVertical size={16} />
                                        </div>
                                        <div className="field-controls">
                                            <div className="field-input-group">
                                                <label>Field Name</label>
                                                <input
                                                    type="text"
                                                    value={field.name}
                                                    onChange={(e) => updateField(index, { name: e.target.value })}
                                                    placeholder="Field Name (e.g. RAM)"
                                                />
                                            </div>
                                            <div className="field-input-group">
                                                <label>Data Type</label>
                                                <select
                                                    value={field.type}
                                                    onChange={(e) => updateField(index, { type: e.target.value })}
                                                >
                                                    <option value="text">Text</option>
                                                    <option value="number">Number</option>
                                                    <option value="select">Dropdown</option>
                                                    <option value="date">Date</option>
                                                </select>
                                            </div>
                                            <div className="field-checkbox-group">
                                                <label className="checkbox-container">
                                                    <input
                                                        type="checkbox"
                                                        checked={field.required}
                                                        onChange={(e) => updateField(index, { required: e.target.checked })}
                                                    />
                                                    <span className="checkmark"></span>
                                                    Required
                                                </label>
                                            </div>
                                            <button
                                                type="button"
                                                className="remove-field-btn"
                                                onClick={() => removeField(index)}
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                        {field.type === 'select' && (
                                            <div className="field-options-row">
                                                <label>Options (comma separated)</label>
                                                <input
                                                    type="text"
                                                    value={field.options?.join(', ') || ''}
                                                    onChange={(e) => updateField(index, { options: e.target.value.split(',').map(s => s.trim()).filter(s => s) })}
                                                    placeholder="Option 1, Option 2, Option 3"
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="secondary-btn" onClick={onClose}>Cancel</button>
                        <button type="submit" className="submit-btn primary-glow" disabled={isSaving}>
                            {isSaving ? 'Saving...' : (initialData ? 'Update Configuration' : 'Create Configuration')}
                        </button>
                    </div>
                </form>

                <style>{`
                    .modal-overlay {
                        position: fixed;
                        inset: 0;
                        background: rgba(15, 23, 42, 0.4);
                        backdrop-filter: blur(4px);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 2100;
                        padding: 1rem;
                    }

                    .modal-container-wide {
                        background: white;
                        width: 100%;
                        max-width: 800px;
                        border-radius: 20px;
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
                        display: flex;
                        flex-direction: column;
                        max-height: 90vh;
                        overflow: hidden;
                    }

                    .modal-header {
                        padding: 1.5rem 2rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border-bottom: 1px solid #f1f5f9;
                        background: #fff;
                    }

                    // .asset-config-icon {
                    //     background: #eff6ff !important;
                    //     color: #2563eb !important;
                    // }

                    .modal-footer {
                        display: flex;
                        justify-content: flex-end;
                        gap: 1rem;
                        padding: 1.5rem 2rem;
                        background: #f8fafc;
                        border-top: 1px solid #f1f5f9;
                    }

                    .secondary-btn {
                        padding: 0.75rem 1.75rem;
                        border-radius: 12px;
                        font-weight: 600;
                        font-size: 0.875rem;
                        background: white;
                        border: 1px solid #e2e8f0;
                        color: #64748b;
                        cursor: pointer;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    .secondary-btn:hover {
                        background: #f8fafc;
                        color: #1e293b;
                        border-color: #cbd5e1;
                        transform: translateY(-1px);
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                    }

                    .secondary-btn:active {
                        transform: translateY(0);
                    }

                    .submit-btn {
                        padding: 0.75rem 2.25rem;
                        border-radius: 12px;
                        font-weight: 700;
                        font-size: 0.875rem;
                        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                        color: white;
                        border: none;
                        cursor: pointer;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                    }

                    .submit-btn:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
                        filter: brightness(1.1);
                    }

                    .submit-btn:active {
                        transform: translateY(-1px);
                    }

                    .submit-btn:disabled {
                        opacity: 0.7;
                        cursor: not-allowed;
                        transform: none;
                        box-shadow: none;
                    }

                    .modal-body {
                        padding: 2rem;
                        overflow-y: auto;
                        flex: 1;
                    }

                    .form-group-sticky {
                        margin-bottom: 2rem;
                        padding-bottom: 1.5rem;
                        border-bottom: 1px dashed #e2e8f0;
                    }

                    .primary-input {
                        width: 100%;
                        padding: 1rem 1.25rem;
                        border: 2px solid #e2e8f0;
                        border-radius: 12px;
                        font-size: 1rem;
                        font-weight: 600;
                        transition: all 0.2s;
                    }

                    .primary-input:focus {
                        border-color: #2563eb;
                        box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
                        outline: none;
                    }

                    .section-title-bar {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 1.5rem;
                    }

                    .add-field-btn {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        background: #3b82f6;
                        color: white;
                        border: none;
                        padding: 0.5rem 1rem;
                        border-radius: 8px;
                        font-size: 0.8125rem;
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.2s;
                    }

                    .add-field-btn:hover {
                        background: #2563eb;
                        transform: translateY(-1px);
                    }

                    .field-row-card {
                        background: #f8fafc;
                        border: 1px solid #e2e8f0;
                        border-radius: 12px;
                        padding: 1.25rem;
                        margin-bottom: 1rem;
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                        position: relative;
                        transition: all 0.2s;
                    }

                    .field-row-card:hover {
                        border-color: #cbd5e1;
                        background: #fff;
                    }

                    .field-drag-handle {
                        position: absolute;
                        left: 4px;
                        top: 50%;
                        transform: translateY(-50%);
                        color: #cbd5e1;
                        cursor: grab;
                    }

                    .field-controls {
                        display: flex;
                        align-items: flex-end;
                        gap: 1rem;
                        padding-left: 0.5rem;
                    }

                    .field-input-group {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        gap: 0.375rem;
                    }

                    .field-input-group label {
                        font-size: 0.6875rem;
                        font-weight: 800;
                        color: #64748b;
                        text-transform: uppercase;
                        letter-spacing: 0.025em;
                    }

                    .field-input-group input, 
                    .field-input-group select {
                        padding: 0.625rem 0.875rem;
                        border: 1px solid #e2e8f0;
                        border-radius: 8px;
                        font-size: 0.875rem;
                    }

                    .field-checkbox-group {
                        padding-bottom: 0.75rem;
                    }

                    .checkbox-container {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        font-size: 0.8125rem;
                        font-weight: 600;
                        color: #475569;
                        cursor: pointer;
                    }

                    .remove-field-btn {
                        background: #fef2f2;
                        color: #ef4444;
                        border: none;
                        width: 36px;
                        height: 36px;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: all 0.2s;
                    }

                    .remove-field-btn:hover {
                        background: #fee2e2;
                        color: #dc2626;
                    }

                    .field-options-row {
                        padding-top: 0.75rem;
                        border-top: 1px solid #f1f5f9;
                        display: flex;
                        flex-direction: column;
                        gap: 0.375rem;
                    }

                    .field-options-row label {
                        font-size: 0.6875rem;
                        font-weight: 800;
                        color: #64748b;
                        text-transform: uppercase;
                    }

                    .field-options-row input {
                        padding: 0.625rem 0.875rem;
                        border: 1px solid #e2e8f0;
                        border-radius: 8px;
                        font-size: 0.875rem;
                        background: #fff;
                    }

                    .empty-fields-state {
                        padding: 3rem;
                        text-align: center;
                        background: #f8fafc;
                        border: 2px dashed #e2e8f0;
                        border-radius: 16px;
                        color: #94a3b8;
                    }

                    .empty-fields-state p {
                        margin-top: 1rem;
                        font-size: 0.875rem;
                        max-width: 300px;
                        margin-left: auto;
                        margin-right: auto;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default AddAssetTypeModal;
