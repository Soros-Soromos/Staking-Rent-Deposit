require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("solidity-coverage");
require("hardhat-deploy");
require("@nomiclabs/hardhat-etherscan");


const RINKEBY_RPC_URL =
    process.env.RINKEBY_RPC_URL;
const PRIVATE_KEY =
    process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
 
module.exports = {
  solidity: "0.8.8",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      accounts: process.env.PRIVATE_KEY,
      chainId: 4
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  }
};
