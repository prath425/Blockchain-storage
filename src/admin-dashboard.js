import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Paper,
  Avatar
} from "@mui/material";
import { Person } from "@mui/icons-material";

function AdminDashboard() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    condition: "",
    medications: "",
    diagnosis: "",
    doctor: "",
    lastVisit: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  const handleSubmit = () => {
    alert("Patient Data Submitted Successfully!");
    console.log(formData);
  };

  return (
    <Box
  sx={{
    backgroundImage: "url('/Dash-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    p: 4,
    backgroundColor: "#f0f0f0", // Fallback color
  }}
>

      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3, backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
          <Typography variant="h4" align="center" gutterBottom>
            🏥 MRT - Add Patient Data
          </Typography>

          <Box display="flex" justifyContent="center" my={3}>
            <Avatar sx={{ bgcolor: "#1976d2", width: 80, height: 80 }}>
              <Person fontSize="large" />
            </Avatar>
          </Box>

          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
            <Step><StepLabel>Basic Information</StepLabel></Step>
            <Step><StepLabel>Medical Information</StepLabel></Step>
            <Step><StepLabel>Other Information</StepLabel></Step>
          </Stepper>

          <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
            <CardContent>
              {activeStep === 0 && (
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}><TextField label="Name" fullWidth name="name" value={formData.name} onChange={handleChange} /></Grid>
                  <Grid item xs={6} md={3}><TextField label="Age" fullWidth type="number" name="age" value={formData.age} onChange={handleChange} /></Grid>
                  <Grid item xs={6} md={3}><TextField label="Gender" fullWidth name="gender" value={formData.gender} onChange={handleChange} /></Grid>
                </Grid>
              )}

              {activeStep === 1 && (
                <Grid container spacing={2}>
                  <Grid item xs={12}><TextField label="Condition" fullWidth name="condition" value={formData.condition} onChange={handleChange} /></Grid>
                  <Grid item xs={12}><TextField label="Medications" fullWidth name="medications" value={formData.medications} onChange={handleChange} /></Grid>
                  <Grid item xs={12}><TextField label="Diagnosis" fullWidth name="diagnosis" value={formData.diagnosis} onChange={handleChange} /></Grid>
                </Grid>
              )}

              {activeStep === 2 && (
                <Grid container spacing={2}>
                  <Grid item xs={12}><TextField label="Doctor Assigned" fullWidth name="doctor" value={formData.doctor} onChange={handleChange} /></Grid>
                  <Grid item xs={6}><TextField label="Last Visit" fullWidth type="date" name="lastVisit" value={formData.lastVisit} onChange={handleChange} InputLabelProps={{ shrink: true }} /></Grid>
                  <Grid item xs={12}><TextField label="Notes" fullWidth multiline rows={3} name="notes" value={formData.notes} onChange={handleChange} /></Grid>
                </Grid>
              )}
            </CardContent>
          </Card>

          <Box display="flex" justifyContent="center" mt={3}>
            {activeStep > 0 && <Button onClick={handleBack} sx={{ mr: 2 }}>Back</Button>}
            {activeStep < 2 ? (
              <Button variant="contained" onClick={handleNext} sx={{ bgcolor: "#1976d2" }}>Next</Button>
            ) : (
              <Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
            )}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default AdminDashboard;
