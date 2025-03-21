// scripts/deploy.js
async function main() {
    // We get the contract to deploy
    const MedicalStorage = await ethers.getContractFactory("MedicalStorage");
    const medicalStorage = await MedicalStorage.deploy();

    await medicalStorage.deployed();

    console.log("MedicalStorage deployed to:", medicalStorage.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
