import React from 'react'
import React, { useContext, useState } from 'react'
import { create } from 'ipfs-http-client'
import { ethers } from 'ethers';
import { NFTContext } from '../AgTContext';
import FormHeader from '../components/FormHeader';
import FormInput from '../components/FormInput';
import axios from 'axios';
import LabelText from './LabelText';
import SelectComponent from './SelectComponent';
import { AgricultureCategories, ElectronicsCategories, MajorCategories, WearsCategories } from '../data/CategoriesData';

const AddProduct = () => {

  // const {marketContract, tokenContract} = useContext(NFTContext);

  const [currentCategory, setCurrentCategory] = useState(''); 
  const [currentSubCategory, setCurrentSubCategory] = useState('');
  const [fileImage, setFileImage] = useState(null);
  const [imageUri, setImageUri] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPriceTag, setProductPriceTag] = useState('');
  const [productQuantity, setProductQuantity] = useState(0);
  const [discountPercent, setDiscountPercent] = useState(0);



  const changeCategory = (e) => {
    setCurrentCategory(e.target.value)
    console.log(currentCategory);
  }
  const UploadImage = async (event) => {

    event.preventDefault()

    const selectedImage = event.target.files[0];
    setFileImage(selectedImage);

    console.log("jwt token", process.env.REACT_APP_PINATA_API_JWT);

    if (selectedImage)  {
        try {
            const formData = new FormData();
            formData.append("file", selectedImage); 

            const uploadFile = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": 'Bearer ' + process.env.REACT_APP_PINATA_API_JWT
                },
            });
            // get hCID of the uploaded image
            const hash = "https://gateway.pinata.cloud/ipfs/" + uploadFile.data.IpfsHash
            console.log(uploadFile.data.IpfsHash);
            console.log("hash => ", hash);
            setImageUri(hash)
            console.log("image hash => ", imageUri);    
        } catch (error) {
            console.log("Error sending File to IPFS: ")
            console.log(error.message, error.request, error.response)
        }
    }
}

  const UploadMetaData = async(e) => {
    e.preventDefault()
    if (!imageUri || !productName || !productQuantity
      || !productPriceTag || !productDescription || !discountPercent) {
    } else {

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
            productName: productName,
            productPriceTag: productPriceTag,
            imageuri: imageUri,
            productQuantity: productQuantity,
            discountPercent: discountPercent,
            category: currentCategory,
            subcategory: currentSubCategory,
            productDescription: productDescription,
            date: new Date()
          }
        });

        console.log("data data => ", data_data);

        const config = {
          method: 'post',
          url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
          headers: { 
            'Content-Type': 'application/json', 
            "Authorization": 'Bearer ' + process.env.REACT_APP_PINATA_API_JWT
          },
          data : data_data
        };
        
        const result = await axios(config);
        
        console.log("result data => ", result.data);
        // const result = await client.add(JSON.stringify({imageUri, nftTitle, nftDescription})) 
        uploadProduct(productPriceTag, result)         
      } catch (error) {
        alert(error)
      }
    }
  }

  const uploadProduct = async (price,result) => {
    const uri = "https://gateway.pinata.cloud/ipfs/" + result.data.IpfsHash;
    console.log("uri => ", uri);
    await (await blockShopContract.UploadProduct(price, uri)).wait();
  }

  return (
    <form action='/newnft' encType='multipart/form-data' className='max-w-[500px] mx-auto my-24 shadow-md p-4 border-[1px]'>
      <FormHeader description="Add New Product"/>
      <LabelText title="Product name" />
      <FormInput 
        Type='text'
        placeHolder="Product Name"
        onCHangeText={(e) =>setProductName(e.target.value.trim()) }
      />
      <LabelText title="Price tag" />
       <FormInput 
        Type='number'
        placeHolder="Product price tag (ETH)"
        onCHangeText={(e) =>setProductPriceTag(e.target.value.trim()) }
      />
      <LabelText title="Quantity available" />
      <FormInput 
        Type='number'
        placeHolder="Quantity available"
        onCHangeText={(e) =>setProductQuantity(e.target.value.trim()) }
      />
      <LabelText title="Discount in Percentage" />
      <FormInput 
        Type='number'
        placeHolder="Discount in Percentage (e.g 5)"
        onCHangeText={(e) =>setDiscountPercent(e.target.value.trim()) }
      />
      <LabelText title="Description" />
       <div className='flex-row  '>
        <textarea name="" id="" cols="30" rows="10"
          className="border-solid rounded-sm border-[1px] border-[#ddd] mb-4 p-4 outline-none w-full"
          onChange={(e) => setProductDescription(e.target.value.trim())}
          placeHolder="Product description">
        </textarea>
      </div>
      <LabelText title="Select Image" />
       <div>
        <input type="file" accept='image/*' onChange={UploadImage}
          className="border-solid rounded-sm border-[1px] border-[#ddd] mb-4 p-4 outline-none w-full"
        />
      </div>
      <LabelText title="Select Category" />
      
            <SelectComponent data={ MajorCategories} onChange={changeCategory} />
            
            { (currentCategory == "") ? " " : <LabelText title={`Select ${currentCategory} Subcategory`}/> }
            {
                    (currentCategory == "Agriculture") ?  <SelectComponent data={ AgricultureCategories } onChange={(evt) => setCurrentSubCategory(evt.target.value)} />
                :   (currentCategory == "Electronics") ?  <SelectComponent data={ ElectronicsCategories } onChange={(evt) => setCurrentSubCategory(evt.target.value)} />
                :   (currentCategory == "Wears") ?  <SelectComponent data={ WearsCategories } onChange={(evt) => setCurrentSubCategory(evt.target.value)} />
                :   ""
            }
        
       <div className='flex flex-row justify-center items-center '>
        <button onClick={UploadMetaData} className="bg-green-700 text-white p-4 rounded-md hover:tracking-widest ease-in-out duration-500">
          Upload NFT
        </button>
       </div>
        
    </form>
    
  )
}

export default AddProduct