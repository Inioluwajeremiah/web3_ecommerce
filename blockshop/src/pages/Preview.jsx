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


  const BuyProduct = async() => {
    if (!qtyNeeded) {
      alert("input quantty needed")
    }  else if (qtyNeeded > itemData[0].productNoPieces) {
      alert("Quantity available not upto quantity demanded")
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
            "Authorization": 'Bearer ' + import.meta.env.VITE_PINATA_API_JWT
          },
          data : data_data
        };
        
        const result = await axios(config);
        
        console.log("result data => ", result.data);
        
        const uri = "https://gateway.pinata.cloud/ipfs/" + result.data.IpfsHash;
        // buy product function
        await BlockShopContract.BuyProduct(id, uri);    
        alert("Item purchase successfull")    
      } catch (error) {
        alert(error)
      }
    }
  }


  return (
    <div className='mt-[80px] p-4 mx-[auto] w-full'>

        <div className='flex flex-row flex-wrap w-full mx-[auto] items-center justify-center'>
          <img src={itemData[0].fImage} alt={itemData[0].productName}  className='h-[200px] w-[200px]' />
          <img src={itemData[0].rImage} alt={itemData[0].productName}  className='h-[200px] w-[200px]'/>
          <img src={itemData[0].lImage} alt={itemData[0].productName} className='h-[200px] w-[200px]'/>
          <img src={itemData[0].rearImage} alt={itemData[0].productName} className='h-[200px] w-[200px]'/>
          <img src={itemData[0].topImage} alt={itemData[0].productName} className='h-[200px] w-[200px]'/>
        </div >
        <div className='p-4 items-center w-[500px] shadow-bg border mx-[auto] mt-4'>
          <p className='p-2'>Product Name: {itemData[0].productName}</p>
          <p className='p-2'>Address of Seller: {itemData[0].seller}</p>
          {/* <p>{ethers.utils.parseEther(id.toString(16))}</p>
           */}
        <p>{id}</p>
          <p className='p-2'>Date Staged: {itemData[0].date}</p>
          
          <p className='p-2'> Product Description: {itemData[0].productDescription}</p>
          <p className='p-2'>Quantity in stock: {itemData[0].productNoPieces}</p>

          <LabelText title ="Quantity needed"/>
        <FormInput
          Type="numer"
          placeHolder="Number of quantity needed"
          onCHangeText={(e) =>setQtyNeeded(e.target.value.trim()) }
        />
        <div className='w-[300px] mx-[auto] flex'>
          <button className='bg-[#330066] p-2 text-white m-2' onClick={BuyProduct}> Buy now</button>
          <button className='bg-[#330066] p-2 text-white m-2' onClick={AddToCart}>Add to cart</button>
        </div>
        </div>        
    </div>
  )
}

export default Preview