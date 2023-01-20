const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { ethers } = require("hardhat");

// ether conversion utils
const toWei = (eth) => ethers.utils.parseEther(eth.toString())
const fromWei = (eth) => ethers.utils.formatEther(eth)
const toBytes = (byt) => ethers.utils.formatBytes32String(byt);


describe ("BlockShop", () => {

  let accountOne, accountTwo, BlockShop, blockShop;
  let METADaATA = "pinata metadata";

  // beforeEach (async function () {
  //   BlockShop = await ethers.getContractFactory("BlockShop");
  //   blockShop = await BlockShop.deploy();

  //   [accountOne, accountTwo, ...accounts] = await ethers.getSigners();
  // })

  let load_fixtures = async () => {
    const BlockShop = await ethers.getContractFactory("BlockShop");
    const blockShop = await BlockShop.deploy()
    const [accountone, accounttwo] = await ethers.getSigners();

    return {blockShop, accountone, accounttwo}
  }
  
  describe ("Deployment", () => {

    // it("test for uploading product", async () => {
    //   // let {blockShop, accountone, accounttwo} = await loadFixture(load_fixtures);

    //   console.log(accountOne.address, accountTwo.address);
    //   await expect( blockShop.connect(accountOne).UploadProduct('0xf47224216Aba73074aeC379F83058c795fc247e7', toWei(2), "pinata hash", toBytes("staged") )).
    //   to.emit(blockShop, "StageProductEvent").withArgs(1, accountOne.address,'0xf47224216Aba73074aeC379F83058c795fc247e7', toWei(2), "pinata hash", toBytes("staged"));
    //   // , ethers.BigNumber.from(1673874904)
    //   console.log( await blockShop.productCounter());
    //   expect (await blockShop.productCounter()).to.equal(1);
      
    //   let stagedproduct = await blockShop.Stagedproducts(1);
    //   expect (stagedproduct.id).to.equal(1)
    //   expect (stagedproduct.productPrice).to.equal(toWei(2));
    //   expect (stagedproduct.ownerMetadata).to.equal("pinata hash");
    //   expect (stagedproduct.productStatus).to.equal(toBytes('staged'));
    //   // ethers.BigNumber.from(stagedproduct.uploadtime).should.equal(ethers.BigNumber.from(1673874904));
    //   console.log( 'get counter', await blockShop.productCounter());
    // })

// npx hardhat test
  })

  describe ("BlockShop ecommerce ", () => {

    // beforeEach ( async function () {
    //   await blockShop.connect(accountOne).UploadProduct('0xf47224216Aba73074aeC379F83058c795fc247e7', toWei(1), "pinata hash", toBytes("staged"));  
    // })
    it ("test for staging products", async () => {
      const {blockShop, accountone, accounttwo} = await loadFixture(load_fixtures);
      await expect( blockShop.connect(accountone).UploadProduct('0xf47224216Aba73074aeC379F83058c795fc247e7', toWei(0.000005), "pinata hash", toBytes("staged") )).
      to.emit(blockShop, "StageProductEvent").withArgs(1, accountOne.address,'0xf47224216Aba73074aeC379F83058c795fc247e7', toWei(0.000005), "pinata hash", toBytes("staged"));
        , ethers.BigNumber.from(1673874904)
    })
    it ("test for buying product", async () => {
      const {blockShop, accountone, accounttwo} = await loadFixture(load_fixtures);
      const productOwnerBalance = await accountone.getBalance();
      console.log("balance", fromWei(productOwnerBalance));
    
      const stagedproduct = await blockShop.Stagedproducts(1);
      console.log("staged product 1", stagedproduct);
      let productTotalPrice = await blockShop.GetTotalPrice(3);
      console.log( 'total price', fromWei(productTotalPrice));
      console.log( 'staged product', stagedproduct.id);
      console.log( 'get counter', await blockShop.productCounter());
      // await expect(blockShop.connect(accountOne).BuyProduct(1, {value: productTotalPrice})).
      // to.emit(blockShop, "PurchaseProductEvent").withArgs(1, accountOne.address, '0xf47224216Aba73074aeC379F83058c795fc247e7', accountTwo.address, toWei(1), "buyer meta data", "staged")
  }) 

  })
}) 