const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer address:", deployer.address);

  const Factory = await ethers.getContractFactory("UniswapV2Factory");
  const factory = await Factory.deploy(deployer.address);
  // await factory.deployed();
  console.log("UniswapV2Factory Deployed at - ",factory.target);
  const hash = await factory.INIT_CODE_PAIR_HASH();
  console.log("\nHash -",hash);

//   Deployer address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
// UniswapV2Factory Deployed at -  0x9155497EAE31D432C0b13dBCc0615a37f55a2c87

// Hash - 0x134e941cfe8a30c82e62d487de1dc543b5095879fb126125e08de968f5ee3774
}

main();