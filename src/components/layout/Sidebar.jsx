import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  UserSquare2,
  Truck,
  ClipboardList,
  Package,
  Settings,
  X
} from 'lucide-react';
import fisLogo from '../../assets/fislogo.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Employees', path: '/employees', icon: <UserSquare2 size={20} /> },
    { name: 'Vendors', path: '/vendors', icon: <Truck size={20} /> },
    { name: 'Assets', path: '/assets', icon: <Package size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-wrapper">
          <div className="logo-icon">
            <img src={fisLogo} alt="FIS Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <h2 className="logo-text">Future Invo Solutions</h2>
        </div>
        <button className="mobile-close" onClick={toggleSidebar}>
          <X size={24} />
        </button>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => window.innerWidth < 768 && toggleSidebar()}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <style>{`
        .sidebar {
          width: var(--sidebar-width);
          background: var(--bg-sidebar);
          border-right: 1px solid var(--border-color);
          height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 1000;
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .sidebar-header {
          height: var(--header-height);
          display: flex;
          align-items: center;
          padding: 0 var(--padding-md);
          border-bottom: 1px solid var(--divider);
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--primary);
          margin: 0;
        }

        .mobile-close {
          display: none;
          background: none;
          color: var(--text-muted);
        }

        .sidebar-nav {
          padding: 1rem 0.75rem;
          flex: 1;
        }

        .nav-link {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          margin-bottom: 0.25rem;
          border-radius: var(--radius-md);
          color: var(--text-muted);
          transition: all 0.2s;
        }

        .nav-link:hover {
          background: var(--bg-main);
          color: var(--text-main);
        }

        .nav-link.active {
          background: rgba(37, 99, 235, 0.08);
          color: var(--primary);
          font-weight: 600;
        }

        .nav-icon {
          display: flex;
          margin-right: 0.75rem;
        }

        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-100%);
          }
          .sidebar.open {
            transform: translateX(0);
          }
          .mobile-close {
            display: block;
            margin-left: auto;
          }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
