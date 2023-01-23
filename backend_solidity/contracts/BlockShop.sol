// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract BlockShop {

    uint public productCounter;
    address payable public immutable contractOwnerAccount;
    uint public immutable chargedFeePercentage;

     constructor(uint _chargedFeePercentage) {
        contractOwnerAccount = payable(msg.sender);
        chargedFeePercentage = _chargedFeePercentage;
    }

    // STRUCTS
    struct Profile {
        address profileAddress;
        string profileMetaData;
    }

    struct StageProduct {
        uint id;
        address payable productOwnerAccount;
        uint productPrice;
        string ownerMetadata;
        bool productStatus;
        bool received;
        bool delivered;
    }

    struct PurchaseProduct {
        uint id;
        string buyerMetadata;
    }

    struct Cart {
        uint productId;
        address payable sellerAddress;
        address payable buyerAddress;
    }

    // EVENTS
    event StageProductEvent  (
        uint id,
        address payable productOwnerAccount,
        uint productPrice,
        string ownerMetadata
    );

    event PurchaseProductEvent (
        uint id,
        address productOwnerAccount,
        address productBuyerAccount,
        uint productPrice,
        string buyerMetadata,
        bool status
    );
    event ProfileEvent (address profileAddress, string ProfileMetaData);
    event CartEvent (uint _id, address payable seller, address payable buyer);
    
    // MAPPINGS
    // mapping for profile
    mapping (address => Profile) public profiles;
    // create mapping for the staged products
    mapping (uint => StageProduct) public Stagedproducts;
    // create mapping for bought products
    mapping (uint => PurchaseProduct[]) public Purchasedproducts;
    // mapping for cart
    mapping (address => Cart) public cartItems;


    // FUNCTIONS
    // create profile function
    function createProfile (string memory _profileMetaData) public {
        //    check address 
       require(msg.sender != address(0), "Wallet address required");
        // add address to profile map   
        profiles[msg.sender] = Profile(msg.sender, _profileMetaData);
        // emit profile event
        emit ProfileEvent(msg.sender, _profileMetaData);
        // , block.timestamp
    }

     // create function to upload product to blockchain
    function UploadProduct( uint _productPrice, string memory _ownerMetadata ) public {
        require(_productPrice > 0, "Product price must be greater than 0");
        // increment counter on every successful call on uploadproduct
        productCounter += 1;
        // create function to store each product
        Stagedproducts[productCounter] = StageProduct (productCounter, payable(msg.sender), _productPrice, _ownerMetadata, false, false, false); 
        // Stagedproducts[productCounter] = StageProduct (productCounter, payable(msg.sender), payable(_contractOwnerAccount), _productPrice, _ownerMetadata, _productStatus, block.timestamp);   
        // emit stageproduct event
        emit StageProductEvent (productCounter, payable(msg.sender), _productPrice, _ownerMetadata);
        //  emit StageProductEvent (productCounter, msg.sender, _contractOwnerAccount, _productPrice, _ownerMetadata, _productStatus,block.timestamp);
    }

    // create function to buy product
    function BuyProduct(uint _id, string memory _buyerMetadata) external payable {

        uint productTotalPrice = GetTotalPrice(_id);
        StageProduct storage productStruct = Stagedproducts[_id];
        
        // conditions to meet for every buyproduct to be successful
        require(_id > 0 && _id <= productCounter, "Product does not exist " );
        require(msg.value >= productTotalPrice, "Ether balance is too low to purchase this item");
        require(!productStruct.productStatus, "Product is no longer available, it has been bought");

        // remit amount due to seller and charged fee to the ecommerce platform owner (contractOwnerAccount)
        productStruct.productOwnerAccount.transfer(productStruct.productPrice);
        contractOwnerAccount.transfer(productTotalPrice - productStruct.productPrice);
        // update nft  sold
        productStruct.productStatus = true;

        // Purchasedproducts[_id] = PurchaseProduct(_id, _buyerMetadata, block.timestamp);
        Purchasedproducts[_id].push(PurchaseProduct(_id, _buyerMetadata));

        // emit PurchaseProductEvent event
        // emit PurchaseProductEvent(_id, productStruct.productOwnerAccount, productStruct.contractOwnerAccount, msg.sender, productStruct.productPrice, _buyerMetadata, productStruct.productStatus, productStruct.uploadtime, block.timestamp);
         emit PurchaseProductEvent(_id, productStruct.productOwnerAccount, msg.sender, productStruct.productPrice, _buyerMetadata, productStruct.productStatus);
    }

    // create function to get total price (platform commission on every sale is 10%) 
    function GetTotalPrice (uint _id) view public returns(uint) {
        return (Stagedproducts[_id].productPrice + ((Stagedproducts[_id].productPrice * 2) / 100));
    } 

    // function getProduct(uint _productId, uint itemId) public view returns (PurchaseProduct memory) {
    //     return Purchasedproducts[_productId][itemId];
    // }
    
    function getProducts(uint _productId) public view returns (PurchaseProduct[] memory) {
        return Purchasedproducts[_productId];
    }

    function ProductCart (uint _id, address payable _selleraddress) public {
        cartItems[msg.sender] = Cart(_id, _selleraddress, payable(msg.sender));
        emit CartEvent(_id, _selleraddress, payable(msg.sender) );
        
    
    }
}


// buyer metadata should include rating and comment