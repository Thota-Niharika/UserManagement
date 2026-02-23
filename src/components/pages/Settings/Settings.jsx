import React, { useState, useEffect } from 'react';
import { Settings as SettingsIcon, Building2, UserCog, Briefcase, Plus, Trash2, Edit2 } from 'lucide-react';
import AddDepartmentModal from '../Employees/AddDepartmentModal_Dept';
import AddRoleModal from '../Employees/AddRoleModal_New';
import AddEntityModal from '../Employees/AddEntityModal_New';
import AddVendorTypeModal from '../Vendors/AddVendorTypeModal';
import AddAssetTypeModal from './AddAssetTypeModal';
import apiService from '../../../services/api';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('departments');

    // Data States
    const [departments, setDepartments] = useState([]);
    const [roles, setRoles] = useState([]);
    const [entities, setEntities] = useState([]);
    const [vendorTypes, setVendorTypes] = useState([]);
    const [assetTypes, setAssetTypes] = useState([]);

    // Modal States
    const [isDeptModalOpen, setIsDeptModalOpen] = useState(false);
    const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
    const [isEntityModalOpen, setIsEntityModalOpen] = useState(false);
    const [isVendorTypeModalOpen, setIsVendorTypeModalOpen] = useState(false);
    const [isAssetTypeModalOpen, setIsAssetTypeModalOpen] = useState(false);

    // Selection States for Edit
    const [selectedDept, setSelectedDept] = useState(null);
    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedEntity, setSelectedEntity] = useState(null);
    const [selectedVendorType, setSelectedVendorType] = useState(null);
    const [selectedAssetType, setSelectedAssetType] = useState(null);

    const fetchData = async () => {
        const ensureArray = (data) => {
            if (Array.isArray(data)) return data;
            if (data && data.data && Array.isArray(data.data)) return data.data;
            if (data && data.content && Array.isArray(data.content)) return data.content;
            return [];
        };

        try { setDepartments(ensureArray(await apiService.getDepartments())); } catch (e) { console.error(e); }
        try { setRoles(ensureArray(await apiService.getRoles())); } catch (e) { console.error(e); }
        try { setEntities(ensureArray(await apiService.getEntities())); } catch (e) { console.error(e); }
        try { setVendorTypes(ensureArray(await apiService.getVendorTypes())); } catch (e) { console.error(e); }
        try {
            const atData = await apiService.getAssetTypes();
            setAssetTypes(ensureArray(atData));
        } catch (e) {
            console.error('Failed to fetch asset types:', e);
            setAssetTypes([]);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Handlers
    const handleSaveDepartment = async (deptData) => {
        try {
            if (deptData.id) {
                await apiService.updateDepartment(deptData.id, deptData);
                alert('Department updated successfully!');
            } else {
                await apiService.createDepartment(deptData);
                alert('Department added successfully!');
            }
            fetchData();
        } catch (error) {
            alert('Failed to save department: ' + error.message);
        }
    };

    const handleDeleteDepartment = async (id) => {
        if (window.confirm('Are you sure you want to delete this department?')) {
            try {
                await apiService.deleteDepartment(id);
                fetchData();
            } catch (error) {
                alert('Failed to delete department: ' + error.message);
            }
        }
    };

    const handleSaveRole = async (roleData) => {
        try {
            if (roleData.id) {
                await apiService.updateRole(roleData.id, roleData);
                alert('Role updated successfully!');
            } else {
                await apiService.createRole(roleData);
                alert('Role added successfully!');
            }
            fetchData();
        } catch (error) {
            alert('Failed to save role: ' + error.message);
        }
    };

    const handleDeleteRole = async (id) => {
        if (window.confirm('Are you sure you want to delete this role?')) {
            try {
                await apiService.deleteRole(id);
                fetchData();
            } catch (error) {
                alert('Failed to delete role: ' + error.message);
            }
        }
    };

    const handleSaveEntity = async (entityData) => {
        try {
            if (entityData.id) {
                await apiService.updateEntity(entityData.id, entityData);
                alert('Entity updated successfully!');
            } else {
                await apiService.createEntity(entityData);
                alert('Entity added successfully!');
            }
            fetchData();
        } catch (error) {
            alert('Failed to save entity: ' + error.message);
        }
    };

    const handleDeleteEntity = async (id) => {
        if (window.confirm('Are you sure you want to delete this entity?')) {
            try {
                await apiService.deleteEntity(id);
                fetchData();
            } catch (error) {
                alert('Failed to delete entity: ' + error.message);
            }
        }
    };

    const handleSaveVendorType = async (typeData) => {
        try {
            if (typeData.id) {
                await apiService.updateVendorType(typeData.id, typeData);
                alert('Vendor type updated successfully!');
            } else {
                await apiService.createVendorType(typeData);
                alert('Vendor type added successfully!');
            }
            fetchData();
        } catch (error) {
            alert('Failed to save vendor type: ' + error.message);
        }
    };

    const handleDeleteVendorType = async (id) => {
        if (window.confirm('Are you sure you want to delete this vendor type?')) {
            try {
                await apiService.deleteVendorType(id);
                fetchData();
            } catch (error) {
                alert('Failed to delete vendor type: ' + error.message);
            }
        }
    };

    const handleSaveAssetType = async (typeData) => {
        try {
            if (typeData.id) {
                await apiService.updateAssetType(typeData.id, typeData);
                alert('Asset configuration updated successfully!');
            } else {
                await apiService.createAssetType(typeData);
                alert('Asset configuration added successfully!');
            }
            fetchData();
        } catch (error) {
            alert('Failed to save asset configuration: ' + error.message);
        }
    };

    const handleDeleteAssetType = async (id) => {
        if (window.confirm('Are you sure you want to delete this asset configuration?')) {
            try {
                await apiService.deleteAssetType(id);
                fetchData();
            } catch (error) {
                alert('Failed to delete asset configuration: ' + error.message);
            }
        }
    };

    const openEditDept = (dept) => {
        setSelectedDept(dept);
        setIsDeptModalOpen(true);
    };

    const openEditRole = (role) => {
        setSelectedRole(role);
        setIsRoleModalOpen(true);
    };

    const openEditEntity = (entity) => {
        setSelectedEntity(entity);
        setIsEntityModalOpen(true);
    };

    const openEditVendorType = (type) => {
        setSelectedVendorType(type);
        setIsVendorTypeModalOpen(true);
    };

    const openEditAssetType = (type) => {
        setSelectedAssetType(type);
        setIsAssetTypeModalOpen(true);
    };

    const getDeptName = d => d.deptName || d.name || d.departmentName || d;
    const getDeptId = d => d.deptCode || d.deptId || d.id || '-';
    const getRoleName = r => r.roleName || r.name || r;
    const getRoleId = r => r.roleCode || r.roleId || r.id || '-';
    const getEntityName = e => e.entityName || e.name || e;
    const getEntityId = e => e.entityCode || e.entityId || e.id || '-';
    // Vendor Type helpers
    const getTypeName = t => t.typeName || t.name || t;

    const renderContent = () => {
        switch (activeTab) {
            case 'departments':
                return (
                    <div className="settings-section animate-fade-in">
                        <div className="section-header">
                            <div>
                                <h3>Departments</h3>
                                <p>Manage company departments and assign IDs.</p>
                            </div>
                            <button className="primary-btn" onClick={() => { setSelectedDept(null); setIsDeptModalOpen(true); }}>
                                <Plus size={16} /> Add Department
                            </button>
                        </div>
                        <div className="list-container">
                            {departments.length === 0 ? (
                                <div className="empty-state">No departments found.</div>
                            ) : (
                                <table className="settings-table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Department Name</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {departments.map((dept, index) => (
                                            <tr key={index}>
                                                <td className="id-cell">{getDeptId(dept)}</td>
                                                <td>{getDeptName(dept)}</td>
                                                <td className="text-center">
                                                    <div className="action-buttons">
                                                        <button
                                                            className="icon-btn-sm"
                                                            onClick={() => openEditDept(dept)}
                                                            title="Edit"
                                                        >
                                                            <Edit2 size={14} />
                                                        </button>
                                                        <button
                                                            className="icon-btn-sm danger"
                                                            onClick={() => handleDeleteDepartment(dept.id || dept.deptId)}
                                                            title="Delete"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                );
            case 'roles':
                return (
                    <div className="settings-section animate-fade-in">
                        <div className="section-header">
                            <div>
                                <h3>Job Roles</h3>
                                <p>Define job titles and designations available for employees.</p>
                            </div>
                            <button className="primary-btn" onClick={() => { setSelectedRole(null); setIsRoleModalOpen(true); }}>
                                <Plus size={16} /> Add Role
                            </button>
                        </div>
                        <div className="list-container">
                            {roles.length === 0 ? (
                                <div className="empty-state">No roles found.</div>
                            ) : (
                                <table className="settings-table">
                                    <thead>
                                        <tr>
                                            <th>Role Code</th>
                                            <th>Role Name</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {roles.map((role, index) => (
                                            <tr key={index}>
                                                <td className="id-cell">{getRoleId(role)}</td>
                                                <td>{getRoleName(role)}</td>
                                                <td className="text-center">
                                                    <div className="action-buttons">
                                                        <button
                                                            className="icon-btn-sm"
                                                            onClick={() => openEditRole(role)}
                                                            title="Edit"
                                                        >
                                                            <Edit2 size={14} />
                                                        </button>
                                                        <button
                                                            className="icon-btn-sm danger"
                                                            onClick={() => handleDeleteRole(role.id || role.roleId)}
                                                            title="Delete"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                );
            case 'entities':
                return (
                    <div className="settings-section animate-fade-in">
                        <div className="section-header">
                            <div>
                                <h3>Business Entities</h3>
                                <p>Manage legal entities and subsidiaries.</p>
                            </div>
                            <button className="primary-btn" onClick={() => { setSelectedEntity(null); setIsEntityModalOpen(true); }}>
                                <Plus size={16} /> Add Entity
                            </button>
                        </div>
                        <div className="list-container">
                            {entities.length === 0 ? (
                                <div className="empty-state">No entities found.</div>
                            ) : (
                                <table className="settings-table">
                                    <thead>
                                        <tr>
                                            <th>Entity Code</th>
                                            <th>Entity Name</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {entities.map((ent, index) => (
                                            <tr key={index}>
                                                <td className="id-cell">{getEntityId(ent)}</td>
                                                <td>{getEntityName(ent)}</td>
                                                <td className="text-center">
                                                    <div className="action-buttons">
                                                        <button
                                                            className="icon-btn-sm"
                                                            onClick={() => openEditEntity(ent)}
                                                            title="Edit"
                                                        >
                                                            <Edit2 size={14} />
                                                        </button>
                                                        <button
                                                            className="icon-btn-sm danger"
                                                            onClick={() => handleDeleteEntity(ent.id || ent.entityId)}
                                                            title="Delete"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                );
            case 'vendor-types':
                return (
                    <div className="settings-section animate-fade-in">
                        <div className="section-header">
                            <div>
                                <h3>Vendor Types</h3>
                                <p>Manage vendor classifications and categories.</p>
                            </div>
                            <button className="primary-btn" onClick={() => { setSelectedVendorType(null); setIsVendorTypeModalOpen(true); }}>
                                <Plus size={16} /> Add Type
                            </button>
                        </div>
                        <div className="list-container">
                            {vendorTypes.length === 0 ? (
                                <div className="empty-state">No vendor types found.</div>
                            ) : (
                                <table className="settings-table">
                                    <thead>
                                        <tr>
                                            <th>Type Name</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {vendorTypes.map((type, index) => (
                                            <tr key={index}>
                                                <td>{getTypeName(type)}</td>
                                                <td className="text-center">
                                                    <div className="action-buttons">
                                                        <button
                                                            className="icon-btn-sm"
                                                            onClick={() => openEditVendorType(type)}
                                                            title="Edit"
                                                        >
                                                            <Edit2 size={14} />
                                                        </button>
                                                        <button
                                                            className="icon-btn-sm danger"
                                                            onClick={() => handleDeleteVendorType(type.id || type.typeId)}
                                                            title="Delete"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                );
            case 'asset-configs':
                return (
                    <div className="settings-section animate-fade-in">
                        <div className="section-header">
                            <div>
                                <h3>Asset Configurations</h3>
                                <p>Define custom hardware specs and technical fields for different asset types.</p>
                            </div>
                            <button className="primary-btn asset-btn" onClick={() => { setSelectedAssetType(null); setIsAssetTypeModalOpen(true); }}>
                                <Plus size={16} /> New Asset Type
                            </button>
                        </div>
                        <div className="list-container">
                            {assetTypes.length === 0 ? (
                                <div className="empty-state">No asset configurations found.</div>
                            ) : (
                                <table className="settings-table">
                                    <thead>
                                        <tr>
                                            <th>Asset Type</th>
                                            <th>Custom Fields</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assetTypes.map((type, index) => (
                                            <tr key={index}>
                                                <td className="font-bold">{type.typeName || type.name}</td>
                                                <td>
                                                    <div className="field-badges">
                                                        {(type.fields || []).slice(0, 3).map((f, i) => (
                                                            <span key={i} className="field-badge">{f.name}</span>
                                                        ))}
                                                        {(type.fields || []).length > 3 && (
                                                            <span className="field-badge-more">+ {(type.fields || []).length - 3} more</span>
                                                        )}
                                                        {(type.fields || []).length === 0 && <span className="text-muted italic">No custom fields</span>}
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="action-buttons">
                                                        <button
                                                            className="icon-btn-sm"
                                                            onClick={() => openEditAssetType(type)}
                                                            title="Edit"
                                                        >
                                                            <Edit2 size={14} />
                                                        </button>
                                                        <button
                                                            className="icon-btn-sm danger"
                                                            onClick={() => handleDeleteAssetType(type.id || type.typeId)}
                                                            title="Delete"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="settings-page">
            <header className="page-header">
                <div className="header-title">
                    <h1>System Settings</h1>
                    <p>Configure core system data and master lists.</p>
                </div>
            </header>

            <div className="settings-container">
                <div className="settings-nav-bar">
                    <button
                        className={`nav-tab ${activeTab === 'departments' ? 'active' : ''}`}
                        onClick={() => setActiveTab('departments')}
                    >
                        <Building2 size={18} />
                        <span>Departments</span>
                    </button>
                    <button
                        className={`nav-tab ${activeTab === 'roles' ? 'active' : ''}`}
                        onClick={() => setActiveTab('roles')}
                    >
                        <UserCog size={18} />
                        <span>Roles & Designations</span>
                    </button>
                    <button
                        className={`nav-tab ${activeTab === 'entities' ? 'active' : ''}`}
                        onClick={() => setActiveTab('entities')}
                    >
                        <Briefcase size={18} />
                        <span>Entities</span>
                    </button>
                    <button
                        className={`nav-tab ${activeTab === 'vendor-types' ? 'active' : ''}`}
                        onClick={() => setActiveTab('vendor-types')}
                    >
                        <SettingsIcon size={18} />
                        <span>Vendor Types</span>
                    </button>
                    <button
                        className={`nav-tab ${activeTab === 'asset-configs' ? 'active' : ''}`}
                        onClick={() => setActiveTab('asset-configs')}
                    >
                        <Briefcase size={18} />
                        <span>Asset Configurations</span>
                    </button>
                </div>

                <div className="settings-content card">
                    {renderContent()}
                </div>
            </div>

            <AddDepartmentModal
                isOpen={isDeptModalOpen}
                onClose={() => setIsDeptModalOpen(false)}
                onSave={handleSaveDepartment}
                initialData={selectedDept}
            />

            <AddRoleModal
                isOpen={isRoleModalOpen}
                onClose={() => setIsRoleModalOpen(false)}
                onSave={handleSaveRole}
                initialData={selectedRole}
            />

            <AddEntityModal
                isOpen={isEntityModalOpen}
                onClose={() => setIsEntityModalOpen(false)}
                onSave={handleSaveEntity}
                initialData={selectedEntity}
            />

            <AddVendorTypeModal
                isOpen={isVendorTypeModalOpen}
                onClose={() => setIsVendorTypeModalOpen(false)}
                onSave={handleSaveVendorType}
                initialData={selectedVendorType}
            />

            <AddAssetTypeModal
                isOpen={isAssetTypeModalOpen}
                onClose={() => setIsAssetTypeModalOpen(false)}
                onSave={handleSaveAssetType}
                initialData={selectedAssetType}
            />

            <style>{`
                .settings-page {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .page-header {
                    margin-bottom: 2rem;
                }

                .settings-container {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .settings-nav-bar {
                    display: flex;
                    gap: 1rem;
                    border-bottom: 1px solid var(--border-color);
                    padding-bottom: 1rem;
                    overflow-x: auto;
                }

                .nav-tab {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.875rem 1.5rem;
                    border: none;
                    background: white;
                    color: var(--text-muted);
                    font-weight: 600;
                    font-size: 0.875rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s;
                    box-shadow: var(--shadow-sm);
                    border: 1px solid transparent;
                }

                .nav-tab:hover {
                    color: var(--text-main);
                    background: #f8fafc;
                }

                .nav-tab.active {
                    background: var(--primary);
                    color: white;
                    box-shadow: var(--shadow-md);
                }

                .settings-content {
                    padding: 2rem;
                    min-height: 500px;
                }

                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                }

                .section-header h3 {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: var(--text-main);
                    margin-bottom: 0.25rem;
                }

                .section-header p {
                    font-size: 0.875rem;
                    color: var(--text-muted);
                }

                .settings-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .settings-table th {
                    text-align: left;
                    padding: 0.75rem 1rem;
                    background: #f8fafc;
                    color: var(--text-muted);
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    border-bottom: 1px solid var(--divider);
                }

                .settings-table td {
                    padding: 0.875rem 1rem;
                    border-bottom: 1px solid var(--divider);
                    font-size: 0.875rem;
                    color: var(--text-main);
                }

                .id-cell {
                    font-family: monospace;
                    color: var(--primary);
                    font-weight: 600;
                }

                .empty-state {
                    padding: 3rem;
                    text-align: center;
                    color: var(--text-muted);
                    font-style: italic;
                    background: #f8fafc;
                    border-radius: 8px;
                    border: 1px dashed var(--divider);
                }

                .animate-fade-in {
                    animation: fadeIn 0.3s ease-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .field-badges {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 4px;
                }

                .field-badge {
                    background: #eff6ff;
                    color: #2563eb;
                    padding: 2px 8px;
                    border-radius: 4px;
                    font-size: 0.75rem;
                    font-weight: 600;
                }

                .field-badge-more {
                    color: #64748b;
                    font-size: 0.75rem;
                    font-weight: 600;
                    padding: 2px 4px;
                }

                .asset-btn {
                    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%) !important;
                    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
                }
                .asset-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3) !important;
                    filter: brightness(1.1);
                }

                .primary-btn {
                    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
                    color: white;
                    padding: 0.625rem 1.25rem;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 0.875rem;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
                }

                .primary-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
                    filter: brightness(1.1);
                }

                .primary-btn:active {
                    transform: translateY(-1px);
                }

                .action-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 0.5rem;
                }

                .icon-btn-sm {
                    background: white;
                    border: 1px solid #e2e8f0;
                    color: #64748b;
                    padding: 0.4rem;
                    border-radius: 6px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }

                .icon-btn-sm:hover {
                    background: #f1f5f9;
                    color: #3b82f6;
                    border-color: #cbd5e1;
                }

                .icon-btn-sm.danger:hover {
                    background: #fef2f2;
                    color: #ef4444;
                    border-color: #fca5a5;
                }

                @media (max-width: 768px) {
                    .settings-layout {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Settings;
