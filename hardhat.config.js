require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("solidity-coverage");
require("hardhat-deploy");


const RINKEBY_RPC_URL =
    process.env.RINKEBY_RPC_URL;
const PRIVATE_KEY =
    process.env.PRIVATE_KEY;
 
module.exports = {
  solidity: "0.8.8",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      accounts: process.env.PRIVATE_KEY,
      chainId: 4
    }
  }
};
