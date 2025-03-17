// src/Ipfsclient.js
import { create } from 'ipfs-http-client';

// Create an IPFS client
const ipfsClient = create({
    host: 'localhost', // Or your IPFS Desktop address
    port: 5001,
    protocol: 'http', // Make sure you use the correct protocol
    headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins (for testing only)
    },
});

const uploadDataToIPFS = async (data) => {
    try {
        const added = await ipfsClient.add(JSON.stringify(data));
        console.log('Uploaded to IPFS:', added.path);
        return added.path; // Returns the IPFS hash
    } catch (error) {
        console.error('Error uploading data to IPFS:', error.message);
        alert('Failed to upload data to IPFS! Check console for details.');
        return null;
    }
};

export default ipfsClient;
