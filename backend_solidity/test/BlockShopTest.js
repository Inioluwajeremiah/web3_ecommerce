const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { ethers } = require("hardhat");

// ether conversion utils
const toWei = (eth) => ethers.utils.parseEther(eth.toString())
const fromWei = (eth) => ethers.utils.formatEther(eth)
const toBytes = (byt) => ethers.utils.formatBytes32String(byt);


describe ("BlockShop", () => {

  const load_fixtures = async () => {
    const chargeFeePercent = 1
    const BlockShop = await ethers.getContractFactory("BlockShop");
    const blockShop = await BlockShop.deploy(chargeFeePercent)
    const blockShopContractAddress = blockShop.address
  
    const [ accountone, accounttwo, accountthree, accountfour, accountfive] = await ethers.getSigners();

    return {chargeFeePercent, blockShopContractAddress, blockShop, accountone, accounttwo, accountthree, accountfour, accountfive}
  }
  
  describe ("Deployment", () => {

// npx hardhat test
    it ("Test for contract owner and charge fee percent", async() => {
      const {blockShop, chargeFeePercent, accountone} = await loadFixture(load_fixtures);
      expect(await blockShop.contractOwnerAccount()).to.equal(accountone.address);
      expect(await blockShop.chargedFeePercentage()).to.equal(chargeFeePercent);
    })
  })

  describe ("Test for Profile features", () => {
    
    it ("Test for creating a user profile", async () => {
      const {blockShop, accountone, accountfour} = await loadFixture(load_fixtures);

      await expect (blockShop.connect(accountfour).createProfile("imageuri", "profile metadata")).
      to.emit(blockShop, 'ProfileEvent').withArgs(accountfour.address, "imageuri", "profile metadata")

    } )
  })

  describe ("BlockShop ecommerce ", () => {


    it ("test for uploading product", async () => {
      const {blockShopContractAddress, blockShop, accountone, accounttwo} = await loadFixture(load_fixtures);
      // connect and upload product
      await blockShop.connect(accountone).UploadProduct(toWei(0.000005), "pinata hash");

      const productOwnerBalance = await accountone.getBalance();
      console.log("balance", fromWei(productOwnerBalance));
    
      const stagedproduct = await blockShop.Stagedproducts(1);
      console.log("staged product 1", stagedproduct);
      const productTotalPrice = await blockShop.GetTotalPrice(1);
      console.log( 'total price', fromWei(productTotalPrice));
      console.log( 'staged product', stagedproduct.id);
      console.log( 'get counter', await blockShop.productCounter());

      expect (stagedproduct.id).to.equal(1);
      expect(stagedproduct.productPrice).to.equal(toWei(0.000005));
      expect(stagedproduct.ownerMetadata).to.equal("pinata hash")
      expect(stagedproduct.productStatus).to.equal(false)
      
    }) 

    it ("Test for buying product", async () => {

      const {blockShop, accountone, accounttwo, accountthree} = await loadFixture(load_fixtures);
     
      // connect account and stage product
      await blockShop.connect(accounttwo).UploadProduct(toWei(0.000005), "pinata hash");

      // get values of product staged and pass required arguement to the Buyproduct function
      const stagedproduct = await blockShop.Stagedproducts(1);
      console.log("staged product 1", stagedproduct);

      const getTotalPrice = await blockShop.GetTotalPrice(1);
      const productTotalPrice = fromWei(getTotalPrice)
      console.log("get totlal price", getTotalPrice);
      console.log( 'total price', productTotalPrice);
      console.log( 'staged product id', stagedproduct.id);
      console.log( 'product id by counter', await blockShop.productCounter());

      // get and log product buyer balance (accounttthree)  
      const productBuyerBalance = await accountthree.getBalance();
      console.log("wei balance", productBuyerBalance);
      console.log("ether balance", fromWei(productBuyerBalance));

      
      // set accounttwo to buy product and test for emitted values
      await expect(blockShop.connect(accountthree).BuyProduct(1, "pinata hash", {value: getTotalPrice})).
      to.emit(blockShop, "PurchaseProductEvent").withArgs(1, accounttwo.address, accountthree.address, toWei(0.000005), "pinata hash", true)

      const purchased_Product = await blockShop.getProducts(1);
      console.log("nested purchased products => ", purchased_Product );
    })

    it("Test for bought nested mapping", async () => {
      const {blockShop, accountone, accounttwo, accountthree} = await loadFixture(load_fixtures);

       // connect account and stage product
       await blockShop.connect(accounttwo).UploadProduct(toWei(0.000005), "pinata hash");

      //  const purchasedProduct = await blockShop.Purchasedproducts(1);
      //  console.log("nested purchased produts => ", purchasedProduct );
      //  expect(purchasedProduct.buyerMetadata).to.equal("pinata hash");
    })
  })
}) 