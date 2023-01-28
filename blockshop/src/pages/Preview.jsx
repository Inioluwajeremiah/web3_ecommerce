import React from 'react'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { BlockShopContextInstance } from '../context/BlockShopContext'
import { ethers } from "ethers";
import axios from 'axios';
import { PINATA_API_KEY, PINATA_API_SECRET_KEY , PINATA_API_JWT} from '../../ipfsconfig';
import LabelText from '../components/LabelText';
import FormInput from '../components/FormInput';
import { useState } from 'react';

const Preview = () => {

  const {BlockShopContract, account} = useContext(BlockShopContextInstance)

  const [qtyNeeded, setQtyNeeded] = useState(0)
  const location = useLocation()
  const {itemData, id }= location.state;
  console.log("itemData => ", itemData);

  const AddToCart = () => {}


  console.log("price => ", itemData[0].productPriceTag);
  console.log("total => ", ethers.utils.formatEther(itemData[0].productTotalPrice));

  const formatTotalPrice = ethers.utils.formatEther(itemData[0].productTotalPrice);

  const priceInWei =  ethers.utils.parseEther(itemData[0].productPriceTag)
  const totalInWei = ethers.utils.parseEther(formatTotalPrice);
  const total_price = Number(qtyNeeded) * Number(totalInWei)
  // alert(total_price)
  console.log("total price in wei => ", totalInWei.toString());
    
  const BuyProduct = async() => {
    if (!qtyNeeded) {
      alert("input quantty needed")
    }  else if (Number(qtyNeeded ) > Number(itemData[0].productNoPieces)) {
      alert(`Quantity available (${ itemData[0].productNoPieces}) not upto quantity demanded (${qtyNeeded})`)
    }
    else{
      try {

        const data_data = JSON.stringify({
          "pinataOptions": {
            "cidVersion": 1
          },
          "pinataMetadata": {
            "name": "AgtToken",
            "keyvalues": {
              customeKey1: 'customValue1',
              customKey2: 'customValue2'
            }
          },
          "pinataContent": {
            buyerAddress: account,
            quantity: qtyNeeded,
            productId: id,
            productData: itemData[0],
            date: new Date()
          }
        });

        console.log("data data => ", data_data);

        const config = {
          method: 'post',
          url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
          headers: { 
            'Content-Type': 'application/json', 
            "Authorization": 'Bearer ' + PINATA_API_JWT
          },
          data : data_data
        };
        
        const result = await axios(config);
        
        console.log("result data => ", result.data);
        
        const uri = "https://gateway.pinata.cloud/ipfs/" + result.data.IpfsHash;
        // buy product function
        await BlockShopContract.BuyProduct(id, uri, {value: total_price});    
        alert("Item purchase successfull")    
      } catch (error) {
        alert(error)
      }
    }
  }


  return (
    <div className='mt-[80px] p-[4px] mx-[auto] max-w-[820px]'>

        <div className='w-full mx-[auto] border-[1px] border-[#ddd] p-2'>
          <div className='flex flex-row flex-wrap items-center justify-center '>
            <img src={itemData[0].fImage} alt={itemData[0].productName}  className='h-[250px] w-[250px]' />
          </div>
          <div className='flex overflow-x-scroll gap-4 justify-center p-4 scrollbar-hide'>
            <img src={itemData[0].rImage} alt={itemData[0].productName}  className='h-[200px] w-[200px]'/>
            <img src={itemData[0].lImage} alt={itemData[0].productName} className='h-[200px] w-[200px]'/>
            <img src={itemData[0].rearImage} alt={itemData[0].productName} className='h-[200px] w-[200px]'/>
            <img src={itemData[0].topImage} alt={itemData[0].productName} className='h-[200px] w-[200px]'/>
          </div> 
        </div >
        
        <div className='p-4 items-center w-[500px] shadow-bg border mx-[auto] mt-4'>
          <p className='py-2'>Product Name: {itemData[0].productName}</p>
          <p className='py-2'>Address of Seller: {itemData[0].seller}</p>
        {/* <p>{id}</p> */}
          <p className='py-2'>Date Staged: {itemData[0].date}</p>
          
          <p className='py-2'> Product Description: {itemData[0].productDescription}</p>
          <p className='py-2'>Quantity in stock: {itemData[0].productNoPieces}</p>
          <p className='py-2'>Price Tag: <s>{itemData[0].productPriceTag}</s> ETH</p>
          <p className='py-2'>Discount price tag: <span className='text-green-500'>{itemData[0].productDiscountPrice}</span> ETH</p>
          <p className='py-2'>Discount percentage: <span className='text-orange-500'>{itemData[0].productDiscountPercent}% </span> off</p>

        <LabelText title ="Quantity needed"/>
        <FormInput
          Type="numer"
          placeHolder="Number of quantity needed"
          onCHangeText={(e) =>setQtyNeeded(e.target.value.trim()) }
        />
        <div className='w-[300px] mx-[auto] flex items-center justify-center '>
          <button className='bg-[#330066] p-2 text-white m-2 rounded-sm' onClick={BuyProduct}> Buy now</button>
          {/* <button className='bg-[#330066] p-2 text-white m-2' onClick={AddToCart}>Add to cart</button> */}
        </div>
        </div>        
    </div>
  )
}

export default Preview