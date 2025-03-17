import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  Box,
  Paper,
} from "@mui/material";
import {
  MedicalServices,
  CalendarToday,
  Person,
  Medication,
  LocalHospital,
} from "@mui/icons-material";

const mockPatientData = {
  "123": {
    patientName: "John Doe",
    age: 45,
    condition: "Diabetes",
    prescribedMedications: ["Metformin", "Insulin"],
    doctor: "Dr. Smith",
    lastVisit: "2024-02-10",
  },
  "456": {
    patientName: "Alice Brown",
    age: 34,
    condition: "Hypertension",
    prescribedMedications: ["Lisinopril"],
    doctor: "Dr. Williams",
    lastVisit: "2024-01-25",
  },
};

function Dashboard() {
  const { patientId } = useParams();
  const patientData = mockPatientData[String(patientId)];

  // Set background globally
  useEffect(() => {
    document.body.style.backgroundImage = "url('/Dash-bg.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height = "100vh";
    document.body.style.margin = "0";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  if (!patientData) {
    return (
      <Container maxWidth="sm">
        <Typography variant="h4" color="error">Unauthorized Access</Typography>
        <Typography>You are not allowed to view this patient's data.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, backgroundColor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          🏥 Medical Record
        </Typography>

        <Box display="flex" justifyContent="center" my={3}>
          <Avatar sx={{ bgcolor: "#1976d2", width: 80, height: 80 }}>
            <Person fontSize="large" />
          </Avatar>
        </Box>

        <Card sx={{ mt: 2, borderRadius: 2, boxShadow: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body1">
                  <Person sx={{ color: "#1976d2" }} /> <strong>Patient Name:</strong> {patientData.patientName}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                  <strong>Age:</strong> {patientData.age}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                  <MedicalServices sx={{ color: "#d32f2f" }} /> <strong>Condition:</strong> {patientData.condition}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                  <LocalHospital sx={{ color: "#388e3c" }} /> <strong>Doctor:</strong> {patientData.doctor}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <Medication sx={{ color: "#f57c00" }} /> <strong>Medications:</strong> {patientData.prescribedMedications.join(", ")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <CalendarToday sx={{ color: "#0288d1" }} /> <strong>Last Visit:</strong> {patientData.lastVisit}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </Container>
  );
}

export default Dashboard;
