// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// smart contracts for the market place
contract  BlockShopII {

    // declare state variables
    address payable public immutable platformOwnwerAccount;
    uint public immutable chargePercent;
    uint public productCount;

    // product status = pending/added_to_cart, sold/bought/successful, notsold/notbought, 
    struct StageProduct {
        uint id;
        address payable productOwnerAccount;
        address payable platformOwnwerAccount;
        uint productPrice;
        string productName;
        string productCategory;
        string productSubcategory;
        string productDescription;
        string productStatus;
        uint productRating;
        string sellerCountry;
        string sellerState;
        string sellerAddress;
        uint shippingPrice;
        uint uploadtime;
    }

    struct PurchaseProduct {
        uint id;
        string buyerCountry;
        string buyerState;
        string buyerAddress;
        address platformOwnwerAccount;
        uint boughttime;
    }
    event StageProductEvent  (
        uint id,
        address payable productOwnerAccount,
        uint productPrice,
        bytes32 productName,
        bytes32 productCategory,
        bytes32 productSubcategory,
        string productDescription,
        bytes32 productStatus,
        uint productRating,
        bytes32 sellerCountry,
        bytes32 sellerState,
        string sellerAddress,
        uint uploadtime
    );
    event PurchaseProductEvent (
        uint id,
        address indexed platformOwnerAccount,
        address indexed productOwnerAccount,
        address indexed productBuyerAccount,
        uint productPrice,
        bytes32 productName,
        bytes32 productCategory,
        bytes32 productSubcategory,
        string productDescription,
        bytes32 productStatus,
        uint productRating,
        bytes32 sellerCountry,
        bytes32 sellerState,
        string sellerAddress,
        uint uploadtime
    );

// map each Product struct with int which will represent each product id
    mapping (uint => StageProduct) public Stagedproducts;
    mapping (uint => StageProduct) public Stagedproducts;

    event HgtNFTProductEvent (uint id,address indexed hgtNftAddress,uint priceTag,uint hgtTokenId,address indexed nftSeller);
    event HgtNFTSalesEvent (uint id,uint hgtTokenId,uint priceTag,address indexed hgtNftAddress,address indexed nftSeller, address indexed nftBuyer);

    constructor(uint _chargePercent) {
        platformOwnwerAccount = payable(msg.sender); 
        chargePercent = _chargePercent;
    }
     
        // create function to upload product to blockchain
    function UploadProduct(address _productOwnerAccount,uint _productPrice, bytes32 _productName, bytes32 _productCategory, bytes32 _productSubcategory, string _productDescription, bytes32 _productStatus,uint _productRating,  bytes32 _sellerCountry, bytes32 _sellerState, string _sellerAddress ) public {
        productCount ++;
        Stageproduct[productCount] = StageProduct (productCount, msg.sender, _productPrice, _productName, _productCategory,  _productSubcategory, _productStatus, _productRating, _sellerCountry, _sellerState, _sellerAddress, block.timestamp);   
        emit StageProductEvent (productCount, msg.sender, _productPrice, _productName, _productCategory,  _productSubcategory, _productStatus, _productRating, _sellerCountry, _sellerState, _sellerAddress, block.timestamp);
    }

    // buy nft 
    function BuyProduct(uint _id) external payable {
        uint productTotalPrice = GetTotalPrice(_id);
        Product storage productStruct = Product[_id];
        require(_id > 0 && _id <= productCount, "Product does not exist");
        require(msg.value >= productTotalPrice, "Ether balance is too low to purchase this item");
        require(!productStruct.bought, "Product is no longer available, it has been bought");

        // remit amount due to seller and charged fee to the ecommerce platform owner (platformOwnwerAccount)
        productStruct.productOwnerAccount.transfer(productStruct.productPrice);
        platformOwnwerAccount.transfer(productTotalPrice - productStruct.productPrice);
        // update nft  sold
        productStruct.status = "Sold";
        
        // emit Bought event
        emit PurchaseProductEvent(_id, msg.sender, _productPrice, _productName, _productCategory,  _productSubcategory, _productStatus, _productRating, _sellerCountry, _sellerState, _sellerAddress, block.timestamp);

    }
    // get total price 
    function GetTotalPrice (uint _id) view public returns(uint) {
        return ((Product[_id].priceTag *(100 + 1) ) / 100);
    }   
} 
