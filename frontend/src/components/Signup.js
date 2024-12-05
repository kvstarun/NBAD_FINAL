import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdPersonOutline, MdLockOutline } from 'react-icons/md'; // Icons for inputs

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        setSuccess('Signup successful! Redirecting to login...');
        setError('');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        const errorData = await response.json();
        setError(errorData.msg || 'Signup failed. Please try again.');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    }
  };
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#f4f4f9',
      fontFamily: 'Roboto, sans-serif',
      padding: '0 15px', // Add padding to prevent content touching edges on small screens
      boxSizing: 'border-box', // Ensure padding is included in width calculation
    },
    card: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '100%', // Make card width responsive
      maxWidth: '350px', // Set a maximum width for large screens
      textAlign: 'center',
      wordWrap: 'break-word', // Prevent overflow of long words
      overflow: 'hidden', // Hide any overflow
      boxSizing: 'border-box', // Include padding in total width/height
    },
    title: {
      color: '#333',
      marginBottom: '20px',
      fontSize: '24px',
      wordWrap: 'break-word', // Ensure title doesn't overflow
    },
    inputGroup: {
      position: 'relative',
      marginBottom: '20px',
    },
    inputIcon: {
      position: 'absolute',
      top: '12px',
      left: '10px',
      color: '#666',
      fontSize: '20px',
    },
    input: {
      width: '100%',
      padding: '12px 12px 12px 40px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      fontSize: '16px',
      boxSizing: 'border-box', // Ensure padding doesn't cause overflow
    },
    inputFocus: { // Additional style for focused input
      borderColor: '#0056b3',
      outline: 'none',
    },
    button: {
      padding: '10px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s',
      width: '100%', // Make button full width inside the card
      boxSizing: 'border-box',
    },
    buttonHover: { // Additional style for hover state
      backgroundColor: '#0056b3',
    },
    message: {
      marginTop: '13px',
      fontSize: '14px',
    },
    error: {
      color: '#f44336',
    },
    success: {
      color: '#4CAF50',
    }
  };
  

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <form onSubmit={handleSignup}>
          <div style={styles.inputGroup}>
            <MdPersonOutline style={styles.inputIcon} />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <MdEmail style={styles.inputIcon} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <MdLockOutline style={styles.inputIcon} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Signup
          </button>
          {success && <p style={{ ...styles.message, ...styles.success }}>{success}</p>}
          {error && <p style={{ ...styles.message, ...styles.error }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Signup;
