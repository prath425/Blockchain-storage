import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  CssBaseline,
  Tabs,
  Tab,
  Box,
} from "@mui/material";

const validPatients = {
  "123": "password123",
  "456": "password456",
};

function LoginPage({ setIsLoggedIn }) {
  const [tabValue, setTabValue] = useState(0);
  const [patientId, setPatientId] = useState("");
  const [password, setPassword] = useState("");
  const [metaMaskAddress, setMetaMaskAddress] = useState("");
  const [loginID, setLoginID] = useState("");
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Patient Login Handler
  const handlePatientLogin = () => {
    if (validPatients[patientId] && validPatients[patientId] === password) {
      setIsLoggedIn(true);
      localStorage.setItem("patientId", patientId);
      navigate(`/dashboard/${patientId}`);
    } else {
      setError("Invalid patient ID or password");
    }
  };

  // Doctor Login Handler
  const handleDoctorLogin = () => {
    if (loginID === "doctor" && password === "doctor123") {
      localStorage.setItem("isDoctorLoggedIn", "true");
      navigate("/doctor-dashboard");
    } else {
      alert("Invalid doctor credentials. Please try again.");
    }
  };

  // Admin Login Handler
  const handleAdminLogin = () => {
    if (adminUsername === "admin" && adminPassword === "admin123") {
      alert("Admin login successful");
      navigate("/admin-dashboard");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="page-container">
      <CssBaseline />
      <Container maxWidth="sm" className="login-container">
        <Typography variant="h4" gutterBottom>
          Login Portal
        </Typography>

        {/* Tabs for Different User Roles */}
        <Tabs value={tabValue} onChange={(event, newValue) => setTabValue(newValue)} centered>
          <Tab label="Patient" />
          <Tab label="Doctor" />
          <Tab label="MRT" />
        </Tabs>

        {/* Patient Login */}
        {tabValue === 0 && (
          <Box mt={3}>
            {error && <Typography color="error">{error}</Typography>}
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Patient ID"
                  variant="outlined"
                  fullWidth
                  required
                  value={patientId}
                  onChange={(e) => setPatientId(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth onClick={handlePatientLogin}>
                  Login as Patient
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}

        {/* Doctor Login */}
        {tabValue === 1 && (
          <Box mt={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Login ID"
                  variant="outlined"
                  fullWidth
                  required
                  value={loginID}
                  onChange={(e) => setLoginID(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth onClick={handleDoctorLogin}>
                  Login as Doctor
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}

        {/* Admin Login */}
        {tabValue === 2 && (
          <Box mt={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="MRT Username"
                  variant="outlined"
                  fullWidth
                  required
                  value={adminUsername}
                  onChange={(e) => setAdminUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth onClick={handleAdminLogin}>
                  Login as MRT
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </div>
  );
}

export default LoginPage;