// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const lock = await hre.ethers.deployContract("WeLockIt");

  // await lock.waitForDeployment();

  // console.log(
  //   `WeLockIt deployed to ${lock.target}`
  // );

  // const RWRD = await hre.ethers.deployContract("RWRD", [
  //   "Frenna", 
  //   "FRN", 
  //   "0xFD1BCfBe90eaEa724Bb56f9EA26A3Ca381875Ea6",
  //   "0x8ee75446bB21d97d1279249533d16d2E4592652d",
  //   "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
  //   "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
  // ]);

  // await RWRD.waitForDeployment();

  // console.log(
  //   `RWRD deployed to ${RWRD.target}`
  // );

  const RWRD_B = await hre.ethers.deployContract("RWRD_B", [
    "Doxxed", 
    "DOX", 
    "0xFD1BCfBe90eaEa724Bb56f9EA26A3Ca381875Ea6",
    "0x8ee75446bB21d97d1279249533d16d2E4592652d",
    "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
  ]);

  await RWRD_B.waitForDeployment();

  console.log(
    `RWRD_B deployed to ${RWRD_B.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
