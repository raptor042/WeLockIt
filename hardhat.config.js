require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

const { 
  PRIVATE_KEY, 
  GOERLI_API_URL,
  MAINNET_API_URL,
  ETHERSCAN_API_KEY, 
  BSC_API_URL, 
  NEW_PRIVATE_KEY,
  BSCSCAN_API_KEY
} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: `${GOERLI_API_URL}`,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    mainnet: {
      url: `${MAINNET_API_URL}`,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    bsc: {
      url: `${BSC_API_URL}`,
      accounts: [`0x${NEW_PRIVATE_KEY}`]
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