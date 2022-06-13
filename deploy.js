/*const { network } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const  chainId = network.config.chainId;
   /* const smartcontract = await deploy("smartcontract", {
        from: deployer,
        args:
    })
}
*/
const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {
    let provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
    let wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
    const abi = fs.readFileSync("./_smartcontract_smartcontract_sol_RentDeposit.abi", "utf8")
    const binary = fs.readFileSync(
        "./_smartcontract_smartcontract_sol_RentDeposit.bin",
        "utf8"
    )
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
    console.log("Deploying, please wait...")
    const contract = await contractFactory.deploy()
    // const contract = await contractFactory.deploy({ gasPrice: 100000000000 })
    const deploymentReceipt = await contract.deployTransaction.wait(1)
    console.log(`Contract deployed to ${contract.address}`)
    
   
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
