import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { GiMailbox } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { BlockShopContextInstance } from '../../context/BlockShopContext'
import TitleText from '../TitleText'

const DashboardRightNav = () => {

    const {account, BlockShopContract} = useContext(BlockShopContextInstance)
    const [profileData, setProfileData] = useState({});

     // get all profile
  const getProfile = async () => {
    console.log("profile");
    console.log("profile account => ", account);
    try {
      const profile = await BlockShopContract.profiles(account);
      console.log("profile from profile mapping => ", profile);
      console.log("profile");
      
      const response = await fetch(profile.profileMetaData);
      const metadata = await response.json();
      console.log("metadata =>", metadata);
      console.log(metadata.facebookLink);

      setProfileData(metadata);
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    getProfile()
  }, [account])

  return (
    <div className='lg:w-[35vw] w-[100%] mx-[auto]'>
        <section id="profile" className='px-2 pt-2 pb-4 shadow-md'>
            <div className='flex flex-row gap-2 items-center justify-end'>
                <div className='w-16 h-16 rounded-full bg-black'>
                    <img src={profileData.profileImageUri} alt="" className='w-16 h-16 rounded-full'/>
                </div>
                <div>
                    <p>{account.length > 0 ? account.slice(0,5) : ""}...{ account.length > 0 ? account.slice(account.length-5, account.length) : ""}</p>
                    <p>{profileData.fullName}</p>
                </div>
                
            </div>
            <div>
                <p className='py-2'>{profileData.storeName}</p>
                <div className=' bg-black aspect-video'>
                    <img src={profileData.storeImageUri} alt="store display profile" />
                </div>
                <p className=' py-2'>{profileData.storeDescription}</p>
                <p >Store Location</p>
                <div className='flex flex-row flex-wrap py-2 gap-2 text'>
                    <p><span className='font-bold'>Country</span>: {profileData.country} </p>
                    <p><span className='font-bold'>State</span>:{profileData.state}</p>
                    <p><span className='font-bold'>Address</span>:{profileData.storeAddress}</p>
                </div>
                <div className='flex flex-row justify-around py-2'>
                    <a href={`https://${profileData.facebookLink}`} target="_blank"><FaFacebook size={30} color="#0369a1"/></a>
                    <a href={`https://${profileData.instagramLink}`} target="_blank"><FaInstagram size={30} color="purple"/></a>
                    <a href={`https://${profileData.whatsAppLink}`} target="_blank"><FaTwitter size={30} color="#0ea5e9"/></a>
                    <a href={`https://${profileData.email}`} target="_blank"><MdEmail size={30} color="#e11d48"/></a>
                    
                </div>
            </div>
        </section>

        <section id='hotdeals' className='mt-8 px-2 pt-2 pb-4 shadow-md'>
            <TitleText title = "Top deals"/>
        </section>

        <section id='bulksales' className='mt-8 px-2 pt-2 pb-4 shadow-md'>
            <TitleText title = "Bulk sales"/>
        </section>

        <section id='newproducts' className='mt-8 px-2 pt-2 pb-4 shadow-md'>
            <TitleText title = "Bulk sales"/>
        </section>
    </div>

  )
}

export default DashboardRightNav