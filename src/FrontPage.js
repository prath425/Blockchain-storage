import React, { useState } from 'react';
import { Button, Typography, Grid, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './FrontPage.css'; // Import the updated CSS file
import Logo from './Logo.jpg';
import Image1 from './Image 1.jpg'; // Import your full viewport image

// Import logos for each section
import PharmacyLogo from './assests/images/Pharmacy.png';
import PatientLogo from './assests/images/patient.png';
import InsuranceLogo from './assests/images/insurance.png';
import DevelopersLogo from './assests/images/developers.png';

function FrontPage() {
  const navigate = useNavigate();

  return (
    <div>
      <CssBaseline />
      <nav className="taskbar">
        <div className="logo-container">
          <img src={Logo} alt="MedBlock Logo" className="medblock-logo" />
        </div>
        <div className="nav-links">
          <Button className="nav-btn">Media</Button>
          <Button className="nav-btn">About Us</Button>
          <Button className="nav-btn">Contact Us</Button>
          <Button className="nav-btn">Language</Button>
        </div>
        <div className="navbar-buttons">
          <Button variant="outlined" className="navbar-btn login-btn" onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button variant="outlined" className="navbar-btn register-btn" onClick={() => navigate('/register')}>
            Register
          </Button>
        </div>
      </nav>

      {/* Full-Viewport Image Section */}
      <div className="full-viewport-image">
        <img src={Image1} alt="Background" />
      </div>

      {/* Content Section Below the Image */}
      <div className="content">
        <Grid container justifyContent="center" alignItems="flex-start" style={{ padding: '20px' }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom className="heading">
              A Smart Medical Ecosystem
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our aim is to put the patient in control of their medical data, giving them the power to share the single, most comprehensive version of their record, with every organisation in their medical network.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Fragmented, siloed patient records create inefficiencies and inaccuracies across the breadth of the healthcare system.
            </Typography>
            <Typography variant="body1" gutterBottom>
              MedBlock uses blockchain technology to securely manage health records for a collaborative, smart approach to healthcare.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom className="video-heading">
              Watch Our Introduction Video
            </Typography>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/sTFZras-1Lo" // Use the embed link
              title="Introduction to Medical Data Storage"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Grid>
        </Grid>

        {/* Additional Information Section */}
        <Grid container justifyContent="space-around" style={{ padding: '20px' }} spacing={4}>
          <Grid item xs={12} md={3} style={{ textAlign: 'center' }}>
            <img src={PharmacyLogo} alt="Pharmaceutical & Research Companies" style={{ width: '100px', height: '100px' }} />
            <Typography variant="h6" gutterBottom className="info-heading">
              For Pharmaceutical & Research Companies
            </Typography>
            <Typography variant="body1">
              Access a database of patients who have opted to share their information. Retrieve accurate data tailored to your inquiries, streamlining patient follow-ups with dynamic health records.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} style={{ textAlign: 'center' }}>
            <img src={PatientLogo} alt="Patients at the Center" style={{ width: '100px', height: '100px' }} />
            <Typography variant="h6" gutterBottom className="info-heading">
              Patients at the Center
            </Typography>
            <Typography variant="body1">
              Patients can grant and revoke access to their electronic health records (EHR), ensuring their experience is improved while maintaining data security through time-limited access.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} style={{ textAlign: 'center' }}>
            <img src={InsuranceLogo} alt="Medical Insurance Simplified" style={{ width: '100px', height: '100px' }} />
            <Typography variant="h6" gutterBottom className="info-heading">
              Medical Insurance Simplified
            </Typography>
            <Typography variant="body1">
              Cut out the middle-man and receive validated health information directly from patients, accessing their accurate records in a more cost- and time-effective manner.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} style={{ textAlign: 'center' }}>
            <img src={DevelopersLogo} alt="Developers & Innovators" style={{ width: '100px', height: '100px' }} />
            <Typography variant="h6" gutterBottom className="info-heading">
              Developers & Innovators
            </Typography>
            <Typography variant="body1">
              Connect with us to explore the monetary value of health data. Collaborate with early adopters to shape the future of digital healthcare and unlock new possibilities.
            </Typography>
          </Grid>
        </Grid>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <Grid container justifyContent="space-between" alignItems="flex-start" style={{ padding: '10px' }}>
          <Grid item xs={6} className="footer-section">
            <Typography variant="h6" gutterBottom style={{ color: 'white' }}>
              Resources
            </Typography>
            <Button variant="text" className="footer-btn">Whitepaper</Button>
            <Button variant="text" className="footer-btn">Events</Button>
            <Button variant="text" className="footer-btn">News</Button>
            <Button variant="text" className="footer-btn">Partnership</Button>
            <Button variant="text" className="footer-btn">Videos</Button>
          </Grid>
          <Grid item xs={6} className="footer-section">
            <Typography variant="h6" gutterBottom style={{ color: 'white' }}>
              Team
            </Typography>
            <Button variant="text" className="footer-btn">Team</Button>
            <Button variant="text" className="footer-btn">Terms and Conditions</Button>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}

export default FrontPage;
