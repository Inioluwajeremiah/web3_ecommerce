import React, { useContext, useState } from 'react'
import { ethers } from 'ethers';
import FormHeader from './FormHeader';
import FormInput from './FormInput';
import axios from 'axios';
import { BlockShopContextInstance } from '../context/BlockShopContext';
import SelectComponent from './SelectComponent';
import LabelText from './LabelText';
import { MajorCategories } from '../data/CategoriesData';

const Profile = () => {

  const {marketContract, tokenContract} = useContext(BlockShopContextInstance);

  const [currentCategory, setCurrentCategory] = useState(''); 
  const [currentSubCategory, setCurrentSubCategory] = useState('');
  const [fileImage, setFileImage] = useState(null);
  const [profileImageUri, setProfileImageUri] = useState(null);
  const [storeImageUri, setStoreImageUri] = useState('');
  const [storeName, setStoreName] = useState('');
  const [fullName, setFullName] = useState('');
  const [storeDescription, setStoreDescription] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [whatsAppLink, setWhatsAppLink] = useState('');
  const [twitterLink, setTwitterLink] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const[storeAddress, setAddress] = useState('');


  const changeCategory = (e) => {
    setCurrentCategory(e.target.value)
    console.log(currentCategory);
  }

// upload profile image
const UploadProfileImage = async (event) => {
    event.preventDefault()
    const selectedImage = event.target.files[0];
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
            setProfileImageUri(hash)
            console.log("image hash => ", imageUri);    
        } catch (error) {
            console.log("Error sending File to IPFS: ")
            console.log(error.message, error.request, error.response)
        }
    }
}

// upload store image
const UploadStoreImage = async (event) => {

  event.preventDefault()
  const selectedImage = event.target.files[0];

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
          setStoreImageUri(hash)
          console.log("image hash => ", imageUri);    
      } catch (error) {
          console.log("Error sending File to IPFS: ")
          console.log(error.message, error.request, error.response)
      }
  }
}


  const UploadProfileMetaData = async(e) => {
    e.preventDefault()
    if (!profileImageUri || !storeImageUri || !fullName || 
      !storeName || !storeDescription || !facebookLink ||
      !instagramLink || !whatsAppLink || !twitterLink ||
      !email || !country || !state || !storeAddress
       ) {
      
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
            profileImageUri: profileImageUri,
            storeImageUri: storeImageUri,
            storeName: storeName,
            fullName: fullName,
            storeDescription: storeDescription,
            facebookLink: facebookLink,
            instagramLink: instagramLink,
            whatsAppLink: whatsAppLink,
            twitterLink: twitterLink,
            email: email,
            country: country,
            state: state,
            storeAddress: storeAddress,
            category: currentCategory,
            subcategory: currentSubCategory,
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
        createProfile(result)         
      } catch (error) {
        alert(error)
      }
    }
  }

  const createProfile = async (result) => {
    const uri = "https://gateway.pinata.cloud/ipfs/" + result.data.IpfsHash;
    console.log("uri => ", uri);
    await (await blockShop.createProfile(uri)).wait();
  }

  return (
    <form action='/Profile' encType='multipart/form-data' className='max-w-[500px] mx-auto my-24 shadow-md p-4 border-[1px]'>
      <FormHeader description="Upload new NFT"/>
      <FormInput 
        Type='text'
        placeHolder="Full Name"
        onCHangeText={(e) =>setFullName(e.target.value) }
      />
       <FormInput 
        Type='text'
        placeHolder="Store Name"
        onCHangeText={(e) =>setStoreName(e.target.value) }
      />
       <LabelText title="Select Category" />
      
      <SelectComponent data={ MajorCategories} onChange={changeCategory} />
      <div className='flex-row  '>
        <textarea name="" id="" cols="30" rows="10"
          className="border-solid rounded-sm border-[1px] border-[#ddd] mb-4 p-4 outline-none w-full"
          onChange={(e) => setStoreDescription(e.target.value.trim())}
          placeHolder="Store description">
        </textarea>
      </div>

      <FormInput 
        Type='text'
        placeHolder="Facebook handle"
        onCHangeText={(e) =>setFacebookLink(e.target.value.trim()) }
      />
       <FormInput 
        Type='text'
        placeHolder="Facebook handle"
        onCHangeText={(e) =>setFacebookLink(e.target.value.trim()) }
      />
       <FormInput 
        Type='text'
        placeHolder="Instagram handle"
        onCHangeText={(e) =>setInstagramLink(e.target.value.trim()) }
      />
      <FormInput 
        Type='text'
        placeHolder="Whatsapp address"
        onCHangeText={(e) =>setWhatsAppLink(e.target.value.trim()) }
      />
      <FormInput 
        Type='text'
        placeHolder="Twitter handle"
        onCHangeText={(e) =>setTwitterLink(e.target.value.trim()) }
      />
      <FormInput 
        Type='Email'
        placeHolder="Email"
        onCHangeText={(e) =>setEmail(e.target.value.trim()) }
      />
      <FormInput 
        Type='text'
        placeHolder="Store Country"
        onCHangeText={(e) =>setCountry(e.target.value.trim()) }
      />
      <FormInput 
        Type='text'
        placeHolder="Store State"
        onCHangeText={(e) =>setState(e.target.value.trim()) }
      />
      <FormInput 
        Type='text'
        placeHolder="Store address"
        onCHangeText={(e) =>setAddress(e.target.value.trim()) }
      />
       <div>
        <input type="file" accept='image/*' onChange={UploadProfileImage}
          className="border-solid rounded-sm border-[1px] border-[#ddd] mb-4 p-4 outline-none w-full"
        />
       </div> 
       <div>
        <input type="file" accept='image/*' onChange={UploadStoreImage}
          className="border-solid rounded-sm border-[1px] border-[#ddd] mb-4 p-4 outline-none w-full"
        />
       </div> 
       <div className='flex flex-row justify-center items-center '>
        <button onClick={UploadProfileMetaData} className="bg-green-700 text-white p-4 rounded-md hover:tracking-widest ease-in-out duration-500">
          Update Profile
        </button>
       </div>
        
    </form>
    
  )
}

export default Profile