import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import MedicalStorage from '../artifacts/contracts/MedicalStorage.sol/MedicalStorage.json'; // Ensure path is correct

const MetaMaskConnector = () => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const loadBlockchainData = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access if needed
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);

        // Connect to the Ethereum network using ethers.js
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Get the signer to sign transactions
        const signer = provider.getSigner();

        // Make sure you have the correct contract address and ABI
        const contractAddress = '0x513f2Ac022b5d8C811B3E5620f508B688E1663bb'; // Replace with actual contract address
        const contract = new ethers.Contract(contractAddress, MedicalStorage.abi, signer);
        
        setContract(contract);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this app.');
    }
  };

  const storeData = async (data) => {
    if (!contract) return;

    try {
      const transaction = await contract.storeMedicalData(data); // Ensure this matches your contract function
      await transaction.wait();
      console.log('Data stored in blockchain:', transaction.hash);
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

  return (
    <div>
      <h2>MetaMask Connection</h2>
      {account ? (
        <div>
          <p>Connected Account: {account}</p>
          <button onClick={() => storeData('Sample Medical Data')}>
            Store Medical Data
          </button>
        </div>
      ) : (
        <p>Please connect your MetaMask wallet.</p>
      )}
    </div>
  );
};

export default MetaMaskConnector;
