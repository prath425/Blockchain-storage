// contracts/MedicalStorage.sol
pragma solidity ^0.8.0;

contract MedicalStorage {
    mapping(address => string[]) public userFiles;

    event FileStored(address indexed user, string ipfsHash);

    function storeFile(string memory ipfsHash) public {
        userFiles[msg.sender].push(ipfsHash);
        emit FileStored(msg.sender, ipfsHash);
    }

    function getUserFiles(address user) public view returns (string[] memory) {
        return userFiles[user];
    }
}
