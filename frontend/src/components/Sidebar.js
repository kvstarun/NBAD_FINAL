import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaChartBar, FaSignOutAlt, FaInfoCircle, FaHome } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext'; // Import the AuthContext

function Sidebar({ isOpen, onClose }) {
  const { logout, token } = useAuth(); // Access token and logout function from AuthContext
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clear token and localStorage
    onClose(); // Close the sidebar
    navigate('/login'); // Redirect to login page
  };

  if (!isOpen) return null;

  return (
    <div style={styles.sidebar}>
      <button style={styles.closeButton} onClick={onClose}>X</button>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/dashboard" style={styles.link}>
            <FaHome style={styles.icon} /> Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/summary" style={styles.link}>
            <FaInfoCircle style={styles.icon} /> Summary
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/reports" style={styles.link}>
            <FaChartBar style={styles.icon} /> Reports
          </Link>
        </li>
        {token && ( // Conditionally render the logout button based on the token
          <li style={styles.navItem}>
            <button onClick={handleLogout} style={styles.logoutButton}>
              <FaSignOutAlt style={styles.icon} /> Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

const styles = {
  sidebar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '250px',
    height: '100%',
    backgroundColor: '#333',
    color: '#FFF',
    paddingTop: '20px',
    zIndex: 1000,
    transition: 'transform 0.3s ease-in-out',
  },
  closeButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '24px',
    background: 'transparent',
    color: '#FFF',
    border: 'none',
    cursor: 'pointer',
  },
  navLinks: {
    listStyle: 'none',
    padding: 0,
  },
  navItem: {
    marginBottom: '20px',
  },
  link: {
    color: '#FFF',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background 0.2s, color 0.2s',
  },
  logoutButton: {
    background: 'transparent',
    color: '#FFF',
    border: 'none',
    padding: '10px 15px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  icon: {
    fontSize: '1.5rem',
  },
};

export default Sidebar;
