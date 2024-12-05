import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FiLogIn, FiUserPlus } from 'react-icons/fi'; // New icons for a fresh look

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const hardcodedUsername = 'Tarun';
    const hardcodedPassword = 'Kandikunta';
  
    if (username === hardcodedUsername && password === hardcodedPassword) {
      login('hardcoded-token');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3000/api/login', { username, password });
      login(response.data.token);
    } catch (error) {
      setError(error.response?.data?.msg || 'Login failed: Server error');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#f0f2f5',
      fontFamily: 'Roboto, sans-serif'
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '20px 40px',
      borderRadius: '10px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      width: '350px',
      textAlign: 'center',
      animation: 'scaleIn 0.5s ease-in-out'
    },
    h2: {
      color: '#333',
      marginBottom: '20px',
      fontSize: '24px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    inputGroup: {
      marginBottom: '20px'
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      fontSize: '16px',
      transition: 'border-color 0.3s'
    },
    inputFocus: {
      borderColor: '#0056b3',
      outline: 'none'
    },
    button: {
      padding: '10px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'background-color 0.3s'
    },
    loginButton: {
      backgroundColor: '#4CAF50',
      color: 'white'
    },
    loginButtonHover: { // Handle hover effects via onMouseEnter/Leave
      backgroundColor: '#45a049'
    },
    signupButton: {
      backgroundColor: '#007BFF',
      color: 'white',
      marginTop: '10px'
    },
    signupButtonHover: { // Handle hover effects via onMouseEnter/Leave
      backgroundColor: '#0056b3'
    },
    error: {
      marginTop: '15px',
      color: '#f44336',
      fontSize: '14px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.h2}>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={styles.input}
            />
          </div>
          <button type="submit" style={{...styles.button, ...styles.loginButton}}>
            <FiLogIn /> Login
          </button>
          <button type="button" onClick={() => navigate('/signup')} style={{...styles.button, ...styles.signupButton}}>
            <FiUserPlus /> Signup
          </button>
          {error && <p style={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
