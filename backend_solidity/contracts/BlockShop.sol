// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract BlockShop {

    uint public productCounter;

    struct StageProduct {
        uint id;
        address payable productOwnerAccount;
        address payable platformOwnerAccount;
        uint productPrice;
        string ownerMetadata;
        bytes32 productStatus;
    }
    // uint uploadtime;

    struct PurchaseProduct {
        uint id;
        string buyerMetadata;
    }
    // uint boughttime;
    event StageProductEvent  (
        uint id,
        address productOwnerAccount,
        address platformOwnerAccount,
        uint productPrice,
        string ownerMetadata,
        bytes32 productStatus

    );
    //  uint uploadtime

    event PurchaseProductEvent (
        uint id,
        address productOwnerAccount,
        address platformOwnerAccount,
        address productBuyerAccount,
        uint productPrice,
        string buyerMetadata,
        bytes32 productStatus
    );
    // uint uploadtime,
        // uint boughttime

    // create mapping for the staged products
    mapping (uint => StageProduct) public Stagedproducts;

    // create mapping for bought products
    mapping (uint => PurchaseProduct) public Purchasedproducts;

     // create function to upload product to blockchain
    function UploadProduct( address _platformOwnerAccount,uint _productPrice, string memory _ownerMetadata, bytes32 _productStatus ) public {
        require(_productPrice > 0, "Product price must be greater than 0");
        // increment counter on every successful call on uploadproduct
        productCounter += 1;
        // create function to store each product
        Stagedproducts[productCounter] = StageProduct (productCounter, payable(msg.sender), payable(_platformOwnerAccount), _productPrice, _ownerMetadata, _productStatus); 
        // Stagedproducts[productCounter] = StageProduct (productCounter, payable(msg.sender), payable(_platformOwnerAccount), _productPrice, _ownerMetadata, _productStatus, block.timestamp);   
        // emit stageproduct event
        emit StageProductEvent (productCounter, msg.sender, _platformOwnerAccount, _productPrice, _ownerMetadata, _productStatus);
        //  emit StageProductEvent (productCounter, msg.sender, _platformOwnerAccount, _productPrice, _ownerMetadata, _productStatus,block.timestamp);
    }

    // create function to buy product
    function BuyProduct(uint _id, string memory _buyerMetadata) external payable {

        uint productTotalPrice = GetTotalPrice(_id);
        StageProduct storage productStruct = Stagedproducts[_id];
        
        // conditions to meet for every buyproduct to be successful
        require(_id > 0 && _id <= productCounter, "Product does not exist " );
        require(msg.value >= productTotalPrice, "Ether balance is too low to purchase this item");
        require(productStruct.productStatus !="Sold", "Product is no longer available, it has been bought");

        // remit amount due to seller and charged fee to the ecommerce platform owner (platformOwnerAccount)
        productStruct.productOwnerAccount.transfer(productStruct.productPrice);
        productStruct.platformOwnerAccount.transfer(productTotalPrice - productStruct.productPrice);
        // update nft  sold
        productStruct.productStatus = "Sold";

        // Purchasedproducts[_id] = PurchaseProduct(_id, _buyerMetadata, block.timestamp);
         Purchasedproducts[_id] = PurchaseProduct(_id, _buyerMetadata);

        // emit PurchaseProductEvent event
        // emit PurchaseProductEvent(_id, productStruct.productOwnerAccount, productStruct.platformOwnerAccount, msg.sender, productStruct.productPrice, _buyerMetadata, productStruct.productStatus, productStruct.uploadtime, block.timestamp);
         emit PurchaseProductEvent(_id, productStruct.productOwnerAccount, productStruct.platformOwnerAccount, msg.sender, productStruct.productPrice, _buyerMetadata, productStruct.productStatus);
    }

    // create function to get total price (platform commission on every sale is 10%) 
    function GetTotalPrice (uint _id) view public returns(uint) {
        return (Stagedproducts[_id].productPrice + ((Stagedproducts[_id].productPrice * 5) / 100));
    } 
}


// buyer metadata should include rating and comment