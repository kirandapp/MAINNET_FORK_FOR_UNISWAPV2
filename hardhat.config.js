require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */

const settings = {
  optimizer: {
    enabled: true,
    runs: 200,
  },
};
module.exports = {
  
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {
        version: "0.8.19",
      },
      { 
        version: "0.6.6",
      },
      { 
        version: "0.5.16",
      },
    ].map((o) => ({ ...o, settings })),
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.MAINNET_RPC_URL,
      },
      chainId: 1,
    },
  },
};
