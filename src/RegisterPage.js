import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container, CssBaseline, Tabs, Tab, Box, MenuItem } from '@mui/material';
import './Register.css'; // Use the same CSS for consistency

function RegisterPage() {
  const [tabValue, setTabValue] = useState(0); // Track which tab is active

  // State for form inputs
  const [designation, setDesignation] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleRegister = () => {
    console.log('Registering:', { designation, name, email, age, password });
  };

  return (
    <div className="page-container"> {/* Apply the background style */}
      <CssBaseline />
      <Container maxWidth="sm" className="login-container"> {/* Apply dark overlay container */}
        <Typography variant="h4" gutterBottom>
          Register Portal
        </Typography>

        <Tabs value={tabValue} onChange={handleChange} centered>
          <Tab label="Patient" />
          <Tab label="Doctor" />s
        </Tabs>

        {/* Form for Patient Registration */}
        {tabValue === 0 && (
          <Box mt={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Designation"
                  value={designation}
                  select
                  onChange={(e) => setDesignation(e.target.value)}
                  variant="outlined"
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: '#fff' } }} // White text
                  InputProps={{ style: { color: '#fff' } }}
                >
                  <MenuItem value="doctor">Doctor</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="patient">Patient</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  InputLabelProps={{ style: { color: '#fff' } }} 
                  InputProps={{ style: { color: '#fff' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputLabelProps={{ style: { color: '#fff' } }} 
                  InputProps={{ style: { color: '#fff' } }}
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Age"
                  variant="outlined"
                  fullWidth
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  InputLabelProps={{ style: { color: '#fff' } }} 
                  InputProps={{ style: { color: '#fff' } }}
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputLabelProps={{ style: { color: '#fff' } }} 
                  InputProps={{ style: { color: '#fff' } }}
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleRegister}
                  style={{ marginTop: '10px' }}
                >
                  Register as Patient
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}

        {/* Form for Doctor Registration */}
        {tabValue === 1 && (
          <Box mt={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Designation"
                  value={designation}
                  select
                  onChange={(e) => setDesignation(e.target.value)}
                  variant="outlined"
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: '#fff' } }} // White text
                  InputProps={{ style: { color: '#fff' } }}
                >
                  <MenuItem value="doctor">Doctor</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="patient">Patient</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Names"
                  variant="outlined"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  InputLabelProps={{ style: { color: '#fff' } }} 
                  InputProps={{ style: { color: '#fff' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputLabelProps={{ style: { color: '#fff' } }} 
                  InputProps={{ style: { color: '#fff' } }}
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Age"
                  variant="outlined"
                  fullWidth
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  InputLabelProps={{ style: { color: '#fff' } }} 
                  InputProps={{ style: { color: '#fff' } }}
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputLabelProps={{ style: { color: '#fff' } }} 
                  InputProps={{ style: { color: '#fff' } }}
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleRegister}
                  style={{ marginTop: '10px' }}
                >
                  Register as Doctor
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}

        {/* Form for Admin Registration */}
        {tabValue === 2 && (
          <Box mt={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Designation"
                  value={designation}
                  select
                  onChange={(e) => setDesignation(e.target.value)}
                  variant="outlined"
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: '#fff' } }} // White text
                  InputProps={{ style: { color: '#fff' } }}
                >
                  <MenuItem value="doctor">Doctor</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="patient">Patient</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  InputLabelProps={{ style: { color: '#fff' } }} 
                  InputProps={{ style: { color: '#fff' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputLabelProps={{ style: { color: '#fff' } }} 
                  InputProps={{ style: { color: '#fff' } }}
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Age"
                  variant="outlined"
                  fullWidth
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  InputLabelProps={{ style: { color: '#fff' } }} 
                  InputProps={{ style: { color: '#fff' } }}
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputLabelProps={{ style: { color: '#fff' } }} 
                  InputProps={{ style: { color: '#fff' } }}
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleRegister}
                  style={{ marginTop: '10px' }}
                >
                  Register as Admin
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </div>
  );
}

export default RegisterPage;
