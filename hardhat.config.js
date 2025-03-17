require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: '0.8.0', // Make sure the Solidity version matches the one in your contract
  paths: {
    sources: './contracts', // Folder where Solidity files are located
    tests: './test',
    cache: './cache',
    artifacts: './artifacts'
  },
  networks: {
    localhost: {
      url: 'HTTP://127.0.0.1:7545', // Ganache's default RPC URL
    },
  },
};
