import React, { useState, useEffect } from 'react';
import {
    Calendar,
    Plus,
    Search,
    Filter,
    ArrowUpRight,
    MoreVertical,
    Edit3,
    Trash2,
    Eye,
    ExternalLink,
    Mail,
    Phone,
    X
} from 'lucide-react';
import AddVendorModal from './AddVendorModal';
import EditVendorModal from './EditVendorModal';
import ViewVendorModal from './ViewVendorModal';
import apiService from '../../../services/api';

const VendorList = () => {
    const [vendors, setVendors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [activeFilters, setActiveFilters] = useState({
        type: 'All',
        status: 'All'
    });

    const vendorTypes = ['All', ...new Set(vendors.map(v => v.vendorType || v.type))];
    const statuses = ['All', ...new Set(vendors.map(v => v.status))];

    const normalizeVendor = (v) => {
        if (!v) return null;
        return {
            ...v,
            vendorId: v.vendorId || v.id || `V-${Date.now()}`,
            vendorName: v.vendorName || v.name || 'Unnamed Vendor',
            vendorType: v.vendorType || v.type || 'N/A',
            status: v.status || 'Active'
        };
    };

    const fetchVendors = async () => {
        setIsLoading(true);
        try {
            const res = await apiService.getVendors();
            const data = Array.isArray(res) ? res : (res.data || []);
            setVendors(data.map(normalizeVendor));
        } catch (e) {
            console.error('Failed to fetch vendors:', e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchVendors();
    }, []);

    const handleAddVendor = async (newVendor) => {
        try {
            await apiService.createVendor(newVendor);
            fetchVendors();
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error adding vendor:', error);
            alert('Failed to add vendor');
        }
    };

    const handleViewVendor = (vendor) => {
        setSelectedVendor(vendor);
        setIsViewModalOpen(true);
    };

    const handleEditVendor = (vendor) => {
        setSelectedVendor(vendor);
        setIsEditModalOpen(true);
    };

    const handleUpdateVendor = async (updatedVendor) => {
        try {
            const id = updatedVendor.id || updatedVendor.vendorId;
            await apiService.updateVendor(id, updatedVendor);
            fetchVendors();
            setIsEditModalOpen(false);
            setSelectedVendor(null);
        } catch (error) {
            console.error('Error updating vendor:', error);
            alert('Failed to update vendor');
        }
    };

    const handleDeleteVendor = async (vendorId) => {
        if (window.confirm('Are you sure you want to delete this vendor?')) {
            try {
                await apiService.deleteVendor(vendorId);
                fetchVendors();
            } catch (error) {
                console.error('Error deleting vendor:', error);
                alert('Failed to delete vendor');
            }
        }
    };

    const filteredVendors = vendors.filter(vendor => {
        const vendorName = vendor.vendorName || vendor.name || '';
        const vendorType = vendor.vendorType || vendor.type || '';
        const vendorId = vendor.vendorId || vendor.id || '';

        const matchesSearch =
            vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vendorType.toLowerCase().includes(searchTerm.toLowerCase()) ||
            String(vendorId).toLowerCase().includes(searchTerm.toLowerCase());

        const matchesType = activeFilters.type === 'All' || (vendor.vendorType || vendor.type) === activeFilters.type;
        const matchesStatus = activeFilters.status === 'All' || vendor.status === activeFilters.status;

        return matchesSearch && matchesType && matchesStatus;
    });

    const clearFilter = (key) => {
        setActiveFilters(prev => ({ ...prev, [key]: 'All' }));
    };

    const hasActiveFilters = Object.values(activeFilters).some(v => v !== 'All');

    return (
        <div className="vendors-page animate-fade-in">
            <header className="page-header">
                <div className="header-title">
                    <h1>Vendor Ecosystem</h1>
                    <p>Orchestrate and monitor external service partnerships and compliance.</p>
                </div>
                <div className="header-actions">
                    <button className="primary-btn" onClick={() => setIsModalOpen(true)}>
                        <Plus size={18} />
                        <span>Onboard Vendor</span>
                    </button>
                </div>
            </header>

            <AddVendorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddVendor}
            />

            <EditVendorModal
                isOpen={isEditModalOpen}
                onClose={() => {
                    setIsEditModalOpen(false);
                    setSelectedVendor(null);
                }}
                onUpdate={handleUpdateVendor}
                vendor={selectedVendor}
            />

            <ViewVendorModal
                isOpen={isViewModalOpen}
                onClose={() => {
                    setIsViewModalOpen(false);
                    setSelectedVendor(null);
                }}
                vendor={selectedVendor}
            />

            <div className="main-table-container">
                <div className="table-controls">
                    <div className="search-box">
                        <Search size={18} />
                        <input
                            type="text"
                            placeholder="Search by name, type, or ID..."
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
                                        <h3>Filter Ecosystem</h3>
                                        <button className="icon-btn-sm" onClick={() => setShowFilters(false)}>
                                            <X size={14} />
                                        </button>
                                    </div>

                                    <div className="popover-body">
                                        <div className="filter-item">
                                            <label>Vendor Type</label>
                                            <select
                                                value={activeFilters.type}
                                                onChange={(e) => setActiveFilters(prev => ({ ...prev, type: e.target.value }))}
                                            >
                                                {vendorTypes.map(type => <option key={type} value={type}>{type}</option>)}
                                            </select>
                                        </div>

                                        <div className="filter-item">
                                            <label>Status</label>
                                            <select
                                                value={activeFilters.status}
                                                onChange={(e) => setActiveFilters(prev => ({ ...prev, status: e.target.value }))}
                                            >
                                                {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="popover-footer">
                                        <button
                                            className="text-btn"
                                            onClick={() => setActiveFilters({ type: 'All', status: 'All' })}
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

                {hasActiveFilters && (
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
                            onClick={() => setActiveFilters({ type: 'All', status: 'All' })}
                        >
                            Clear all
                        </button>
                    </div>
                )}

                <div className="table-overflow">
                    <table className="premium-table">
                        <thead>
                            <tr>
                                <th>Vendor ID</th>
                                <th>Vendor Profile</th>
                                <th>Vendor Type</th>
                                <th>Contact Access</th>
                                <th>Lifecycle</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredVendors.map((vendor, index) => (
                                <tr key={vendor.vendorId || index} className="table-row-hover">
                                    <td>
                                        <span className="vendor-id-cell">{vendor.vendorId || vendor.id}</span>
                                    </td>
                                    <td>
                                        <div className="name-wrapper">
                                            <span className="vendor-name">{vendor.vendorName || vendor.name || 'Unknown Vendor'}</span>
                                            <span className="contact-sub text-muted" style={{ fontSize: '0.75rem' }}>{vendor.address}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="contact-cell">
                                            <span className="domain-pill">{vendor.vendorType || vendor.type || 'N/A'}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="contact-cell">
                                            <div className="contact-info" style={{ gap: '0.35rem' }}>
                                                <Phone size={12} className="text-muted" />
                                                <span style={{ fontSize: '0.8125rem' }}>{vendor.phone}</span>
                                            </div>
                                            <div className="contact-info" style={{ gap: '0.35rem' }}>
                                                <Mail size={12} className="text-muted" />
                                                <span style={{ fontSize: '0.8125rem' }}>{vendor.email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${(vendor.status || 'active').replace(/\s+/g, '').toLowerCase()}`}>
                                            <span className="dot"></span>
                                            {vendor.status || 'Active'}
                                        </span>
                                    </td>
                                    <td className="actions-cell">
                                        <div className="action-hub">
                                            <button
                                                className="icon-btn ghost"
                                                title="View Profile"
                                                onClick={() => handleViewVendor(vendor)}
                                            >
                                                <Eye size={16} />
                                            </button>
                                            <button
                                                className="icon-btn ghost"
                                                title="Edit Details"
                                                onClick={() => handleEditVendor(vendor)}
                                            >
                                                <Edit3 size={16} />
                                            </button>
                                            <button
                                                className="icon-btn ghost danger"
                                                title="Terminate Partnership"
                                                onClick={() => handleDeleteVendor(vendor.vendorId || vendor.id)}
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <style>{`
        .vendors-page {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding-bottom: 2rem;
        }

        .animate-fade-in {
            animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-title h1 {
            font-size: 2rem;
            font-weight: 700;
            color: #1e293b;
            letter-spacing: -0.02em;
            margin-bottom: 0.25rem;
        }

        .header-title p {
            color: #64748b;
            font-size: 0.9375rem;
        }

        .header-actions {
            display: flex;
            gap: 0.75rem;
        }

        .primary-btn {
            background: #2563eb;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 10px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.2s;
            border: none;
        }

        .primary-btn:hover {
            background: #1d4ed8;
            transform: translateY(-1px);
        }

        /* Clean Table Container */
        .main-table-container {
            background: white;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            overflow: hidden;
        }

        .table-controls {
            padding: 1.25rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #f1f5f9;
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
            transition: all 0.2s;
        }

        .search-box input:focus {
            outline: none;
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.08);
        }

        .filter-group {
            display: flex;
            align-items: center;
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
            border-color: #2563eb;
            color: #2563eb;
            background: #f8faff;
        }

        .control-btn.active {
            border-color: #2563eb;
            color: #2563eb;
            background: #eff6ff;
        }

        .filter-indicator {
            width: 6px;
            height: 6px;
            background: #2563eb;
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
            border: 1px solid #e2e8f0;
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
            border-bottom: 1px solid #f1f5f9;
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
            border-top: 1px solid #f1f5f9;
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
            color: #2563eb;
        }

        .apply-btn {
            background: #2563eb;
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
            border-bottom: 1px solid #f1f5f9;
            background: white;
        }

        .filter-badge {
            display: flex;
            align-items: center;
            gap: 0.35rem;
            background: #eff6ff;
            color: #2563eb;
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
            color: #2563eb;
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
            color: #2563eb;
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

        /* Simplified Table Layout */
        .table-overflow {
            overflow-x: auto;
        }

        .premium-table {
            width: 100%;
            border-collapse: collapse;
        }

        th {
            text-align: left;
            padding: 1rem 1.5rem;
            font-size: 0.75rem;
            font-weight: 600;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            background: #f8fafc;
            border-bottom: 1px solid #e2e8f0;
        }

        td {
            padding: 1rem 1.5rem;
            vertical-align: middle;
            border-bottom: 1px solid #f1f5f9;
            transition: background 0.2s;
        }

        .table-row-hover:hover {
            background: #fcfdfe;
        }

        .vendor-profile-cell {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .vendor-avatar {
            width: 40px;
            height: 40px;
            background: #eff6ff;
            color: #2563eb;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.125rem;
            font-weight: 700;
        }

        .vendor-main {
            display: flex;
            flex-direction: column;
        }

        .vendor-name {
            font-weight: 600;
            color: #1e293b;
            font-size: 0.9375rem;
        }

        .vendor-id {
            font-size: 0.75rem;
            color: #64748b;
            font-family: inherit;
        }

        .domain-pill {
            display: inline-flex;
            padding: 4px 10px;
            background: #f1f5f9;
            color: #475569;
            border-radius: 6px;
            font-size: 0.75rem;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .contact-cell {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }

        .contact-sub {
            font-size: 0.8125rem;
            color: #64748b;
        }



        .contract-info {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.8125rem;
            font-weight: 500;
            color: #334155;
        }

        .contract-info svg {
            color: #94a3b8;
        }

        /* Simplified Status Badges */
        .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 0.75rem;
            font-weight: 600;
        }

        .status-badge .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
        }

        .status-badge.active { background: #dcfce7; color: #15803d; }
        .status-badge.active .dot { background: #22c55e; }

        .status-badge.onhold { background: #fffbeb; color: #92400e; }
        .status-badge.onhold .dot { background: #f59e0b; }

        .status-badge.blacklisted { background: #fef2f2; color: #b91c1c; }
        .status-badge.blacklisted .dot { background: #ef4444; }

        .status-badge.underreview { background: #f8fafc; color: #475569; }
        .status-badge.underreview .dot { background: #94a3b8; }

        .timestamp-group {
            display: flex;
            flex-direction: column;
        }

        .timestamp-group .date {
            font-size: 0.8125rem;
            font-weight: 600;
            color: #1e293b;
        }

        .timestamp-group .time {
            font-size: 0.75rem;
            color: #64748b;
            font-family: monospace;
        }

        .action-hub {
            display: flex;
            gap: 0.25rem;
            justify-content: flex-end;
        }

        .icon-btn {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            transition: all 0.2s;
            background: transparent;
            border: none;
            color: #64748b;
        }

        .icon-btn:hover {
            background: #f1f5f9;
            color: #1e293b;
        }

        .icon-btn.danger:hover {
            background: #fee2e2;
            color: #ef4444;
        }

        @media (max-width: 768px) {
            .page-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 1.25rem;
            }
            .header-actions {
                width: 100%;
            }
            .header-actions button {
                flex: 1;
            }
            .table-controls {
                flex-direction: column;
                gap: 1rem;
                padding: 1.25rem 1rem;
            }
            .search-box {
                max-width: none;
            }
        }
      `}</style>
        </div>
    );
};

export default VendorList;
