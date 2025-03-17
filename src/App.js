import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import FrontPage from "./FrontPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import AdminPage from "./AdminPage";
import Dashboard from "./Dashboard";
import AdminDashboard from "./admin-dashboard";
import DoctorDashboard from "./doctor-dashboard";
import MedicalStorageArtifact from "./artifacts/contracts/MedicalStorage.sol/MedicalStorage.json";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";

// IPFS client setup
const ipfsClient = create({ url: "http://localhost:5001/webui" });
const contractAddress = "0x513f2Ac022b5d8C811B3E5620f508B688E1663bb"; // Replace with actual contract address

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isDoctorLoggedIn, setIsDoctorLoggedIn] = useState(localStorage.getItem("isDoctorLoggedIn") === "true");
  const [account, setAccount] = useState("");
  const [data, setData] = useState("");
  const [ipfsHash, setIpfsHash] = useState("");
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  // Load Web3 provider
  const loadProvider = async () => {
    if (window.ethereum) {
      const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(ethersProvider);
      const signer = ethersProvider.getSigner();
      setAccount(await signer.getAddress());
      const medicalStorageContract = new ethers.Contract(contractAddress, MedicalStorageArtifact.abi, signer);
      setContract(medicalStorageContract);
    } else {
      alert("Please install MetaMask!");
    }
  };

  // Upload data to IPFS
  const uploadDataToIPFS = async (data) => {
    try {
      const added = await ipfsClient.add(JSON.stringify(data));
      setIpfsHash(added.path);
      return added.path;
    } catch (error) {
      alert("Failed to upload data to IPFS");
      return null;
    }
  };

  // Handle medical data submission to blockchain
  const handleSubmit = async (event) => {
    event.preventDefault();
    const ipfsPath = await uploadDataToIPFS({ medicalData: data });
    if (ipfsPath) {
      const transaction = await contract.storeData(ipfsPath);
      await transaction.wait();
      alert(`Data stored successfully! IPFS Hash: ${ipfsPath}`);
    }
  };

  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} setIsAdminLoggedIn={setIsAdminLoggedIn} loadProvider={loadProvider} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard/:patientId" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
