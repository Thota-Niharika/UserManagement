import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, Building2, Calendar, Edit2, Save, X } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@techcorp.com',
    phone: '+1 (555) 123-4567',
    role: 'Super Admin',
    department: 'Information Technology',
    location: 'Headquarters, New York',
    joinDate: 'January 15, 2022',
    bio: 'Experienced system administrator with a focus on enterprise infrastructure and security management.'
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

  return (
    <div className="profile-page animate-fade-in">
      <header className="page-header">
        <h1>My Profile</h1>
        <p>Manage your personal information and account settings.</p>
      </header>

      <div className="profile-container">
        <div className="profile-card card">
          <div className="profile-header">
            <div className="profile-avatar-large">
              <User size={48} />
            </div>
            <div className="profile-title-info">
              <h2>{userData.name}</h2>
              <span className="role-badge">{userData.role}</span>
            </div>
            {!isEditing ? (
              <button className="secondary-btn edit-profile-btn" onClick={() => setIsEditing(true)}>
                <Edit2 size={16} /> Edit Profile
              </button>
            ) : (
              <div className="edit-actions">
                <button className="primary-btn save-profile-btn" onClick={handleSave}>
                  <Save size={16} /> Save
                </button>
                <button className="secondary-btn cancel-profile-btn" onClick={handleCancel}>
                  <X size={16} /> Cancel
                </button>
              </div>
            )}
          </div>

          <div className="profile-content">
            <div className="info-grid">
              <div className="info-group">
                <label><Mail size={14} /> Email Address</label>
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

              <div className="info-group">
                <label><Phone size={14} /> Phone Number</label>
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

              <div className="info-group">
                <label><Building2 size={14} /> Department</label>
                <p>{userData.department}</p>
              </div>

              <div className="info-group">
                <label><Briefcase size={14} /> Role</label>
                <p>{userData.role}</p>
              </div>

              <div className="info-group">
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

              <div className="info-group">
                <label><Calendar size={14} /> Join Date</label>
                <p>{userData.joinDate}</p>
              </div>
            </div>

            <div className="profile-bio info-group full-width">
              <label>About Me</label>
              {isEditing ? (
                <textarea
                  value={editedData.bio}
                  onChange={(e) => setEditedData({ ...editedData, bio: e.target.value })}
                  rows={4}
                />
              ) : (
                <p>{userData.bio}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .profile-page {
          max-width: 1000px;
          margin: 0 auto;
        }

        .profile-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .profile-header {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding-bottom: 2rem;
          border-bottom: 2px solid var(--divider);
          margin-bottom: 2rem;
          position: relative;
        }

        .profile-avatar-large {
          width: 100px;
          height: 100px;
          background: var(--bg-main);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          border: 3px solid var(--primary);
          box-shadow: var(--shadow-md);
        }

        .profile-title-info h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }

        .role-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: var(--primary-light, #e0f2fe);
          color: var(--primary);
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .edit-profile-btn, .edit-actions {
          margin-left: auto;
        }

        .edit-actions {
          display: flex;
          gap: 0.75rem;
        }

        .profile-content {
          padding: 1rem 0;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .info-group label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .info-group p {
          font-size: 1rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .info-group input, .info-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .info-group input:focus, .info-group textarea:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }

        .full-width {
          grid-column: 1 / -1;
        }

        .profile-bio p {
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .profile-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
          .edit-profile-btn, .edit-actions {
            margin-left: 0;
            width: 100%;
            justify-content: center;
          }
          .info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Profile;
