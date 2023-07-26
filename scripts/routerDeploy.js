const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer address:", deployer.address);

  const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  const Factory = "0x9155497EAE31D432C0b13dBCc0615a37f55a2c87";
  const Router = await ethers.getContractFactory("UniswapV2Router02");
  const router = await Router.deploy(Factory, WETH);
  console.log("UniswapV2Router02 Deployed at - ",router.target);

//   Deployer address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
// UniswapV2Router02 Deployed at -  0x9155497EAE31D432C0b13dBCc0615a37f55a2c87
}

main();