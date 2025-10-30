const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Minting OFD with account:", deployer.address);

  const OFD = await hre.ethers.getContractFactory("OFDToken");
  const ofd = await OFD.deploy();
  await ofd.deployed();
  console.log("OFD deployed to:", ofd.address);

  const mintAmount = hre.ethers.utils.parseUnits("100", 18);
  await ofd.mint(deployer.address, mintAmount);
  console.log(`Minted ${mintAmount.toString()} OFD to ${deployer.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
