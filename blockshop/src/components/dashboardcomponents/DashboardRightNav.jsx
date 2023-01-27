import React from 'react'
import { useContext } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { GiMailbox } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { BlockShopContextInstance } from '../../context/BlockShopContext'
import TitleText from '../TitleText'

const DashboardRightNav = () => {

    const {account} = useContext(BlockShopContextInstance)
  return (
    <div className='lg:w-[35vw] w-[100%] mx-[auto]'>
        <section id="profile" className='px-2 pt-2 pb-4 shadow-md'>
            <div className='flex flex-row gap-2 items-center justify-end'>
                <div className='w-16 h-16 rounded-full bg-black'>
                    <img src="" alt="" />
                </div>
                <div>
                    <p>{account.length > 0 ? account.slice(0,5) : ""}...{ account.length > 0 ? account.slice(account.length-5, account.length) : ""}</p>
                    <p>Full name</p>
                </div>
                
            </div>
            <div>
                <p className='py-2'>Store name</p>
                <div className=' bg-black aspect-video'>
                    <img src="" alt="store display profile" />
                </div>
                <p className=' py-2'>Store Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Impedit, illo repudiandae, 
                    cum maiores inventore itaque odio optio 
                    incidunt debitis expedita necessitatibus 
                    aliquid qui. Sit minima rem, accusantium 
                    suscipit quis eius.
                </p>
                <p >Store Location</p>
                <div className='flex flex-row flex-wrap py-2 gap-2 text'>
                    <p>Store Country </p>
                    <p>Store state</p>
                    <p>Store address</p>
                </div>
                <div className='flex flex-row justify-around py-2'>
                    <Link to=""><FaFacebook size={30} color="#0369a1"/></Link>
                    <Link to=""><FaInstagram size={30} color="purple"/></Link>
                    <Link to=""><FaTwitter size={30} color="#0ea5e9"/></Link>
                    <Link to=""><MdEmail size={30} color="#e11d48"/></Link>
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