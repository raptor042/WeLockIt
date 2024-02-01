require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

const { 
  PRIVATE_KEY, 
  SEPOLIA_API_URL,
  MAINNET_API_URL,
  ETHERSCAN_API_KEY, 
  BSC_MAINNET_API_URL,
  BSC_TESTNET_API_URL,
  PRIVATE__KEY,
  BSCSCAN_API_KEY
} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: `${SEPOLIA_API_URL}`,
      accounts: [`0x${PRIVATE__KEY}`]
    },
    mainnet: {
      url: `${MAINNET_API_URL}`,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    bsc: {
      url: `${BSC_MAINNET_API_URL}`,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    bsctestnet: {
      url: `${BSC_TESTNET_API_URL}`,
      accounts: [`0x${PRIVATE__KEY}`]
    },
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  },
  etherscan: {
    apiKey: BSCSCAN_API_KEY
  }
};