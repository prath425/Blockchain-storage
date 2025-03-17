import React, { useEffect, useState } from "react";
import { 
  Container, Typography, Card, CardContent, Avatar, Grid, Box, Paper, MenuItem, Select, TextField, Button 
} from "@mui/material";
import { MedicalServices, CalendarToday, Person, Medication, LocalHospital, NoteAdd } from "@mui/icons-material";

// Mock patient data
const patientsData = {
  "1": {
    patientName: "Kushal Patel",
    age: 45,
    condition: "Thyroid",
    prescribedMedications: ["Medication 1", "Medication 2"],
    doctor: "Dr. Emily Carter",
    lastVisit: "2024-02-20",
    notes: "",
  },
  "2": {
    patientName: "Chinmay Kotecha",
    age: 34,
    condition: "Migrain",
    prescribedMedications: ["Metformin", "Insulin"],
    doctor: "Dr. Emily Carter",
    lastVisit: "2024-01-10",
    notes: "",
  },
};

function DoctorDashboard() {
  const [selectedPatientId, setSelectedPatientId] = useState("1");
  const [patientData, setPatientData] = useState(patientsData[selectedPatientId]);
  const [newNote, setNewNote] = useState("");

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

  const handlePatientChange = (event) => {
    const newPatientId = event.target.value;
    setSelectedPatientId(newPatientId);
    setPatientData(patientsData[newPatientId]);
    setNewNote(""); // Reset input field when changing patients
  };

  const handleAddNote = () => {
    setPatientData((prevData) => ({
      ...prevData,
      notes: newNote,
    }));
    setNewNote(""); // Clear input after adding
  };

  return (
    <Container maxWidth="md" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, backgroundColor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          🏥 Medical Record
        </Typography>

        {/* Dropdown for selecting patients */}
        <Box display="flex" justifyContent="center" my={2}>
          <Select value={selectedPatientId} onChange={handlePatientChange} sx={{ width: 250 }}>
            {Object.keys(patientsData).map((id) => (
              <MenuItem key={id} value={id}>
                {patientsData[id].patientName}
              </MenuItem>
            ))}
          </Select>
        </Box>

        <Box display="flex" justifyContent="center" my={3}>
          <Avatar sx={{ bgcolor: "#1976d2", width: 80, height: 80 }}>
            <Person fontSize="large" />
          </Avatar>
        </Box>

        <Card sx={{ mt: 2, borderRadius: 2, boxShadow: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body1"><Person sx={{ color: "#1976d2" }} /> <strong>Patient Name:</strong> {patientData.patientName}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1"><strong>Age:</strong> {patientData.age}</Typography>
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
              {/* Additional Notes Section */}
              <Grid item xs={12}>
                <Typography variant="body1">
                  <NoteAdd sx={{ color: "#7b1fa2" }} /> <strong>Doctor's Notes:</strong> {patientData.notes || "No notes added."}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Input field to add notes */}
        <Box mt={3} display="flex" flexDirection="column" alignItems="center">
          <TextField
            label="Add Note"
            variant="outlined"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            sx={{ width: "100%", mb: 2 }}
          />
          <Button variant="contained" color="primary" onClick={handleAddNote}>
            Add Note
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default DoctorDashboard;
