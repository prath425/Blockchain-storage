// scripts/deploy.js
const hre = require("hardhat");
const fs = require("fs");

async function main() {
    const MedicalStorage = await hre.ethers.getContractFactory("MedicalStorage");
    const medicalStorage = await MedicalStorage.deploy();

    await medicalStorage.deployed();
    console.log("MedicalStorage deployed to:", medicalStorage.address);

    // Save the contract address to a file
    const addresses = {
        MedicalStorage: medicalStorage.address,
    };

    fs.writeFileSync("./src/contract-address.json", JSON.stringify(addresses));
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
