import React, { useState } from 'react'
import { useEffect } from 'react';
import { BlockShopContractABI, BlockShopContractAddress } from './BlockShopContract';
import { ethers } from 'ethers';

export const BlockShopContextInstance = React.createContext();


if(!window.ethereum) alert("Install a cryptocurrency wallet to continue")

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner()
console.log("signer => ", signer);
// connect ABI using the Contract abstraction layer
// The Contract object
const BlockShopContract = new ethers.Contract(BlockShopContractAddress, BlockShopContractABI, signer);

console.log(BlockShopContract);


const BlockShopContext = ({children}) => {

  const [account, setAccount] = useState({});
  // const [BlockShopContract, setBlockShopContract] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  const [WearsArray, setWearsArray] = useState([])
  const [ElectronicsArray, setElectronicsArray] = useState([]);
  const [AgricultureArray, setAgricultureArray] = useState([]);
  const [AllproductsArray,  setAllProductsArray] = useState([])
  
  
  
  const ConnectAccount = async () => {

    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page

    // MetaMask requires requesting permission to connect users accounts
   
    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...

    // check if meamask is installed on windows and if not alert user to install one 
    

     const getAccounts = await provider.send("eth_requestAccounts", [])
     setAccount(getAccounts[0])
     console.log("list accounts => ", getAccounts);
     console.log("connected account => ", account);

    // connecting account method II
    // const getAccountsII = await window.ethereum.request({method: 'eth_requestAccounts'})
    // setAccount (getAccountsII[0])
    // console.log("connected account => ", account);
  }

  // get all products

  const getAllProducts = async () => {

    setLoadingData(true)
    try {
      const getcounter = await BlockShopContract.productCounter();
      const counter = getcounter.toString();
      console.log("counter => ", counter);

      let productArray = [];
      let electronicsArray = [];
      let agricultureArray = [];
      let wearsArray= [];

      for ( let i=1; i<= counter; i++) {
        console.log("for loop", i);
        const stagedproduct = await BlockShopContract.Stagedproducts(i);
        console.log("item index from Stagedproducts mapping => ", stagedproduct );
  
        if(stagedproduct.productStatus == false) {
          const response = await fetch(stagedproduct.ownerMetadata);
          const metadata = await response.json();
          const totalPrice = await BlockShopContract.GetTotalPrice(stagedproduct.id)
          
          let productItem = { 
            Id: stagedproduct.id, 
            seller: stagedproduct.productOwnerAccount,
            receivedStatus: stagedproduct.received,
            deliveredStatus: stagedproduct.delivered,
            productName:metadata.productName, 
            productDescription: metadata.productDescription,
            productPriceTag: metadata.productPriceTag,
            productDiscountPercent: metadata.productDiscountPercent,
            productDiscountPrice: (metadata.productPriceTag * metadata.productDiscountPercent) / 100,
            productTotalPrice: totalPrice,
            productNoPieces: metadata.productQuantity,
            fImage: metadata.imageFrontView,
            lImage: metadata.imageLeftView,
            rImage: metadata.imageRightView,
            topImage: metadata.imageTopView,
            rearImage: metadata.imageRearView,
            category: metadata.category,
            subcategory: metadata.subcategory,
            date: metadata.date
          }

          // all products
          productArray.push(productItem)
          // get all products under agriculture category
          if (metadata.category == "agriculture") agricultureArray.push(productItem)
          // get all products under electronics category
          if (metadata.category == "electronics") electronicsArray.push(productItem)
          // get all products under wears category
          if (metadata.category == "wears") wearsArray.push(productItem)
        }
      }

      setAgricultureArray(agricultureArray);
      setElectronicsArray(electronicsArray);
      setWearsArray(wearsArray);
      setAllProductsArray(productArray);
      setLoadingData(false)

      console.log("agric array => ", agricultureArray);
      console.log('electronicsarray => ', electronicsArray);
      
    } catch (error) {
      alert(error) 
      setLoadingData(false)
    }
  }

  useEffect(() => {
    ConnectAccount();
    getAllProducts();
  }, [])

  return (
    <BlockShopContextInstance.Provider  value = {{account, BlockShopContract, ConnectAccount, AgricultureArray, ElectronicsArray, WearsArray, AllproductsArray }}>

        {children}

    </BlockShopContextInstance.Provider>
  )
}

export default BlockShopContext