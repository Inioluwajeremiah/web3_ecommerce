const main = async () => {

  // Blockshop contract
const BlockShop = await ethers.getContractFactory("BlockShop");

const blockShop = await BlockShop.deploy();
 
 await blockShop.deployed();
 
console.log(`BlockShop contract has been deployed to ${blockShop.address}`);

// get signer
const [signer] = await ethers.getSigners();
const signerAddress = signer.address;
console.log("Signer address => ", signerAddress);
}

const mainResult = async () => {
try {
  await main();
  process.exitCode = 0;
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}
}
mainResult();


