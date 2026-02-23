import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, Building2, Calendar, Edit2, Save, X, LogOut } from 'lucide-react';

const ProfileDrawer = ({ isOpen, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Vara Laxsmi',
    email: 'hr@futureinvo.com',
    phone: '+91 92475 51330',
    role: 'Super Admin',
    department: 'Operations',
    location: 'Madhapur, Hyderabad',
    joinDate: 'Jan 2021'
  });

  const [editedData, setEditedData] = useState({ ...userData });

  const handleSave = () => {
    setUserData({ ...editedData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedData({ ...userData });
    setIsEditing(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="drawer-overlay" onClick={onClose}></div>
      <div className={`profile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h3>User Profile</h3>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="drawer-body">
          <div className="profile-badge-section">
            <div className="profile-avatar-large">
              <User size={40} />
            </div>
            <div className="profile-info-top">
              <h4>{userData.name}</h4>
              <span className="status-badge-online">Online</span>
            </div>
          </div>

          <div className="drawer-section">
            <div className="section-title">
              <span>Personal Information</span>
              {!isEditing && (
                <button className="edit-link" onClick={() => setIsEditing(true)}>
                  <Edit2 size={14} /> Edit
                </button>
              )}
            </div>

            <div className="info-list">
              <div className="info-item">
                <label><Mail size={14} /> Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editedData.email}
                    onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
                  />
                ) : (
                  <p>{userData.email}</p>
                )}
              </div>

              <div className="info-item">
                <label><Phone size={14} /> Phone</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedData.phone}
                    onChange={(e) => setEditedData({ ...editedData, phone: e.target.value })}
                  />
                ) : (
                  <p>{userData.phone}</p>
                )}
              </div>

              <div className="info-item">
                <label><MapPin size={14} /> Location</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedData.location}
                    onChange={(e) => setEditedData({ ...editedData, location: e.target.value })}
                  />
                ) : (
                  <p>{userData.location}</p>
                )}
              </div>
            </div>

            {isEditing && (
              <div className="drawer-actions">
                <button className="primary-btn-sm" onClick={handleSave}><Save size={14} /> Save Changes</button>
                <button className="secondary-btn-sm" onClick={handleCancel}>Cancel</button>
              </div>
            )}
          </div>

          <div className="drawer-section">
            <div className="section-title">Professional Info</div>
            <div className="info-list">
              <div className="info-item">
                <label><Briefcase size={14} /> Role</label>
                <p>{userData.role}</p>
              </div>
              <div className="info-item">
                <label><Building2 size={14} /> Department</label>
                <p>{userData.department}</p>
              </div>
              <div className="info-item">
                <label><Calendar size={14} /> Joined</label>
                <p>{userData.joinDate}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="drawer-footer">
          <button className="logout-btn">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      <style>{`
        .drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(2px);
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        .profile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 380px;
          max-width: 90vw;
          background: white;
          z-index: 1001;
          display: flex;
          flex-direction: column;
          box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
          animation: slideInRight 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .drawer-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .drawer-header h3 {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .close-btn {
          background: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .close-btn:hover {
          background: var(--bg-main);
          color: var(--text-main);
        }

        .drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
        }

        .profile-badge-section {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2rem;
          background: var(--bg-main);
          padding: 1rem;
          border-radius: 12px;
        }

        .profile-avatar-large {
          width: 64px;
          height: 64px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          border: 2px solid var(--primary);
        }

        .profile-info-top h4 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .status-badge-online {
          font-size: 0.75rem;
          color: #10b981;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .status-badge-online::before {
          content: '';
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
        }

        .drawer-section {
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .edit-link {
          background: none;
          color: var(--primary);
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info-item label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }

        .info-item p {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .info-item input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          font-size: 0.875rem;
          outline: none;
        }

        .drawer-actions {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .primary-btn-sm {
          background: var(--primary);
          color: white;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .secondary-btn-sm {
          background: white;
          border: 1px solid var(--border-color);
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .drawer-footer {
          padding: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        .logout-btn {
          width: 100%;
          padding: 0.75rem;
          background: #fef2f2;
          color: #ef4444;
          border: 1px solid #fecaca;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .logout-btn:hover {
          background: #fee2e2;
        }
      `}</style>
    </>
  );
};

export default ProfileDrawer;
