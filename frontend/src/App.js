import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Summary from './components/Summary';
import Reports from './components/Reports';
import Signup from './components/Signup';

function App() {
  const { token } = useAuth();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div style={styles.appContainer}>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div style={{ ...styles.mainContent, marginLeft: isSidebarOpen ? '250px' : '0' }}>
        <header style={styles.header}>
          <div style={styles.logo} onClick={toggleSidebar}>
          <img
  src={`${process.env.PUBLIC_URL}/Logo.png`} // This refers to the 'public' folder directly
  alt="S64 Logo"
  style={styles.logoImage}
/>

            S64
          </div>
        </header>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={!token ? <Login /> : <Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate replace to="/login" />} />
          <Route path="/summary" element={token ? <Summary /> : <Navigate replace to="/login" />} />
          <Route path="/reports" element={token ? <Reports /> : <Navigate replace to="/login" />} />
          <Route path="*" element={token ? <Navigate replace to="/dashboard" /> : <Navigate replace to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

const styles = {
  appContainer: { display: 'flex', minHeight: '100vh' },
  header: { padding: '10px 20px', background: '#333', display: 'flex', alignItems: 'center', color: '#FFF' },
  logo: { display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '1.6rem', fontWeight: 'bold' },
  logoImage: { height: '40px', width: '40px', borderRadius: '50%', marginRight: '10px' },
  mainContent: { flex: 1, padding: '20px', transition: 'margin-left 0.3s ease-in-out' },
};

export default App;
