import { ethers } from 'hardhat';

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = ethers.utils.parseEther("0.001");

  // const Lock = await ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  const whitelistContract = await ethers.getContractFactory('Whitelist');

  //here we deploy the contract
  const deployWhitelistContract = await whitelistContract.deploy(10);
  // 10 is max number of whitelisted address allowed

  //wait for it to finish deploying
  await deployWhitelistContract.deployed();

  console.log('Whitelist Contract Address:', deployWhitelistContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
