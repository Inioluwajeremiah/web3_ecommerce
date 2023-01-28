import React, { useContext, useState } from 'react'
import { ethers } from 'ethers';
import FormHeader from '../components/FormHeader';
import FormInput from '../components/FormInput';
import LabelText from './LabelText';
import SelectComponent from './SelectComponent';
import { AgricultureCategories, ElectronicsCategories, MajorCategories, WearsCategories } from '../data/CategoriesData';
import { BlockShopContextInstance } from '../context/BlockShopContext';
import TitleText from './TitleText';
import Spinner from './Spinner';
import axios from 'axios';
import { PINATA_API_KEY, PINATA_API_SECRET_KEY , PINATA_API_JWT} from '../../ipfsconfig';

const AddProduct = () => {

  const {BlockShopContract} = useContext(BlockShopContextInstance);

  const [currentCategory, setCurrentCategory] = useState(''); 
  const [currentSubCategory, setCurrentSubCategory] = useState('');
  const [imageLeftView, setImageLeftView] = useState('');
  const [imageRightView, setImageRightView] = useState('');
  const [imageTopView, setImageTopView] = useState('');
  const [imageFrontView, setImageFrontView] = useState('');
  const [imageRearView, setImageRearView] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPriceTag, setProductPriceTag] = useState('');
  const [productQuantity, setProductQuantity] = useState(0);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [loading, setLoading] = useState(false)



  const changeCategory = (e) => {
    setCurrentCategory(e.target.value)
    console.log(currentCategory);
  }

  // upload Image.
  const UploadImage = async (evt, setImageUri) =>  {
    evt.preventDefault()

    const selectedImage = evt.target.files[0];
    // setFileImage(selectedImage);

    console.log(selectedImage);

    console.log("jwt token => ", import.meta.env.VITE_PINATA_API_JWT);
    

    if (selectedImage)  {
      setLoading(true)
        try {
            const formData = new FormData();
            formData.append("file", selectedImage); 

            const uploadFile = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": 'Bearer ' + PINATA_API_JWT
                },
            });
            // get hCID of the uploaded image
            const hash = "https://gateway.pinata.cloud/ipfs/" + uploadFile.data.IpfsHash
            console.log(uploadFile.data.IpfsHash);
            console.log("hash => ", hash);
            setImageUri(hash)
            setLoading(false)
            console.log( 'f => ', imageFrontView, 'l => ',imageLeftView, 'r => ', imageRightView, 
            't => ',imageTopView, 'rear => ', imageRearView);    
        } catch (error) {
            // console.log("Error sending File to IPFS: ")
            console.log(error.message, error.request, error.response)
            setLoading(false)
          }
    }
}

  const UploadMetaData = async(e) => {
    e.preventDefault()
    if ( !productName || !productQuantity || !currentCategory || !currentSubCategory
      || !productPriceTag || !productDescription || !discountPercent
      || !imageLeftView || !imageRightView || !imageTopView || !imageFrontView 
      || !imageRearView ) {
       alert("Input all fields")
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
            imageFrontView: imageFrontView,
            imageRearView: imageRearView,
            imageLeftView: imageLeftView,
            imageRightView: imageRightView,
            imageTopView: imageTopView,
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
            "Authorization": 'Bearer ' + import.meta.env.VITE_PINATA_API_JWT
          },
          data : data_data
        };
        
        const result = await axios(config);
        
        console.log("result data => ", result.data);
        // const result = await client.add(JSON.stringify({imageUri, nftTitle, nftDescription})) 
        // uploadProduct(result) 
        const uri = "https://gateway.pinata.cloud/ipfs/" + result.data.IpfsHash;
        const PriceTag = ethers.utils.parseEther(productPriceTag.toString());
        await (await BlockShopContract.UploadProduct(PriceTag, uri)).wait();        
      } catch (error) {
        alert(error)
      }
    }
  }

  
  return (
      <section className='w-full   p-4'>
        <TitleText title="Add New Product"/>
        {loading ? <Spinner/> : ""}
        <form action='#' encType='multipart/form-data' className='max-w-[700px] mx-auto shadow-md p-4 border-[1px]'>
        <FormHeader />
        <LabelText title="Product name" />
        <FormInput 
          Type='text'
          placeHolder="Product Name"
          onCHangeText={(e) =>setProductName(e.target.value.trim()) }
        />
        <LabelText title="Select Category" />
        
        <SelectComponent data={ MajorCategories} onChange={changeCategory} />
        
        { (currentCategory == "") ? " " : <LabelText title={`Select ${currentCategory} Subcategory`}/> }
        {
                (currentCategory == "agriculture") ?  <SelectComponent data={ AgricultureCategories} onChange={(evt) => setCurrentSubCategory(evt.target.value)} />
            :   (currentCategory == "electronics") ?  <SelectComponent data={ ElectronicsCategories } onChange={(evt) => setCurrentSubCategory(evt.target.value)} />
            :   (currentCategory == "wears") ?  <SelectComponent data={ WearsCategories } onChange={(evt) => setCurrentSubCategory(evt.target.value)} />
            :   ""
        }
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
            placeholder="Product description">
          </textarea>
        </div>
        <LabelText title="Frontview image" />
        <div>
          <input type="file" accept='image/*' onChange={(evt) => UploadImage(evt, setImageFrontView)}
            className="border-solid rounded-sm border-[1px] border-[#ddd] mb-4 p-4 outline-none w-full"
          />
        </div>
        <LabelText title="Sideview(left) image" />
        <div>
          <input type="file" accept='image/*' onChange={(evt) => UploadImage(evt,setImageLeftView)}
            className="border-solid rounded-sm border-[1px] border-[#ddd] mb-4 p-4 outline-none w-full"
          />
        </div>
        <LabelText title="Sideview(right) image" />
        <div>
          <input type="file" accept='image/*' onChange={(evt) => UploadImage(evt,setImageRightView)}
            className="border-solid rounded-sm border-[1px] border-[#ddd] mb-4 p-4 outline-none w-full"
          />
        </div>
        <LabelText title="Rearview image" />
        <div>
          <input type="file" accept='image/*' onChange={(evt) => UploadImage(evt,setImageRearView)}
            className="border-solid rounded-sm border-[1px] border-[#ddd] mb-4 p-4 outline-none w-full"
          />
        </div>
        <LabelText title="Top view" />
        <div>
          <input type="file" accept='image/*' onChange={(evt) => UploadImage(evt,setImageTopView)}
            className="border-solid rounded-sm border-[1px] border-[#ddd] mb-4 p-4 outline-none w-full"
          />
        </div>
        
          
        <div className='flex flex-row justify-center items-center' >
          <button  className="bg-[#3b82f6] text-white p-4 rounded-md hover:tracking-widest ease-in-out  duration-500" onClick={UploadMetaData}>
          Upload Product
          </button>
        </div>
          
      </form>
      </section>
    
  )
}

export default AddProduct


// We have 20 pieces HP laptops Elitebook 5173 in store. 
// Specification include;
// 1. 500g ssd
// 2. 12g RAM
// 3. 4 hrs battery span
// 4. Web Cam
// 5. 2g Graphics Card
// 6. 16 inches screen size
// 7.  2,2GHz processor.
// 8. Core i7
// Shipment is also available on payment. 

// www.facebook.com
// www.instagram.com
// www.whatsapp.com
// www.twitter.com