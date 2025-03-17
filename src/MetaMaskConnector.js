// src/components/MetaMaskConnector.js
import React from 'react';

const MetaMaskConnector = ({ setAccount }) => {
    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                // Request account access
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                // Set the connected account in the parent component
                setAccount(accounts[0]);
            } catch (error) {
                console.error('Error connecting to MetaMask:', error);
                alert('Failed to connect to MetaMask');
            }
        } else {
            alert('Please install MetaMask!');
        }
    };

    return (
        <div>
            <button onClick={connectWallet}>Connect MetaMask</button>
        </div>
    );
};

export default MetaMaskConnector;
