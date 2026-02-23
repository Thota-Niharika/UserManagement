import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ProfileDrawer from './ProfileDrawer';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="main-content">
        <Header toggleSidebar={toggleSidebar} toggleProfile={toggleProfile} />

        <div className="content-area">
          {children}
        </div>
      </main>

      <ProfileDrawer isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="mobile-overlay"
          onClick={toggleSidebar}
        ></div>
      )}

      <style>{`
        .mobile-overlay {
          display: none;
        }

        @media (max-width: 768px) {
          .mobile-overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(2px);
            z-index: 950;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
