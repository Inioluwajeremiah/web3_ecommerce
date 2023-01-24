const main = async () => {

  // Blockshop contract
const BlockShop = await ethers.getContractFactory("BlockShop");

const blockShop = await BlockShop.deploy(1);
 
 await blockShop.deployed();
 
console.log(`BlockShop contract has been deployed to ${blockShop.address}`);

// get signer
// const provider = new ethers.providers.Web3Provider(window.ethereum)
// await provider.send("eth_requestAccounts", []);
// const signer = provider.getSigner()
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


