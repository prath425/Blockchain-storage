import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

const dummyMedicalRecord = {
  patientName: "Pedo Rai",
  age: 69,
  condition: "Pedophilia",
  prescribedMedications: ["Marja Lavde"],
  doctor: "Dr. Johnny Sins",
  lastVisit: "2024-02-20",
};

function Dashboard() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Medical Record</Typography>
      <Card style={{ marginTop: 10, padding: 15, backgroundColor: "#f5f5f5" }}>
        <CardContent>
          <Typography><strong>Patient Name:</strong> {dummyMedicalRecord.patientName}</Typography>
          <Typography><strong>Age:</strong> {dummyMedicalRecord.age}</Typography>
          <Typography><strong>Condition:</strong> {dummyMedicalRecord.condition}</Typography>
          <Typography><strong>Medications:</strong> {dummyMedicalRecord.prescribedMedications.join(", ")}</Typography>
          <Typography><strong>Doctor:</strong> {dummyMedicalRecord.doctor}</Typography>
          <Typography><strong>Last Visit:</strong> {dummyMedicalRecord.lastVisit}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Dashboard;
