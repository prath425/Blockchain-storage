import React, { useState } from 'react';
import { Button, TextField, Typography, Grid, CssBaseline, Container } from '@mui/material';

function AdminPage({ onLogin }) {
  const [patientName, setPatientName] = useState('');
  const [patientDetails, setPatientDetails] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Dummy credentials for now
  const adminCredentials = {
    email: 'admin@example.com',
    password: 'admin123',
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (adminEmail === adminCredentials.email && adminPassword === adminCredentials.password) {
      setIsLoggedIn(true);
      onLogin(); // Notify parent component that login was successful
    } else {
      alert('Invalid login credentials!');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!patientName || !patientDetails) {
      alert('Please fill in all fields.');
      return;
    }
    // Call the uploadDataToIPFS function or smart contract interaction here
    alert(`Patient Name: ${patientName}\nDetails: ${patientDetails}`);
    // Clear the form after submission
    setPatientName('');
    setPatientDetails('');
  };

  return (
    <Container>
      <CssBaseline />
      {!isLoggedIn ? (
        <Grid container direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
          <Typography variant="h4" gutterBottom>
            Admin Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              variant="outlined"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
        </Grid>
      ) : (
        <Grid container direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
          <Typography variant="h4" gutterBottom>
            Upload Patient Data
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Patient Name"
              variant="outlined"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Patient Details"
              variant="outlined"
              value={patientDetails}
              onChange={(e) => setPatientDetails(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Upload Data
            </Button>
          </form>
        </Grid>
      )}
    </Container>
  );
}

export default AdminPage;
