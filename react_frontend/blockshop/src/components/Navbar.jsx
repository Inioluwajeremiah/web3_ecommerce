import React from 'react';
import logo from '/images/blockshop.png';
import profilePic from '/images/avatar10.png';
import { AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='flex flex-row fixed w-[100vw] h-[100px] justify-between shadow-lg py-2 px-4 mb-12 top-0'>
        <div className='flex flex-row gap-2 items-center'>
            <div className='md:w-20 md:h-20 rounded-full w-16 h-16'>
                <img src={logo} alt="" />
            </div>
            <h1 className='text-2xl font-bold hidden md:inline'>BlockShop</h1>
        </div>
        <div className='flex flex-row items-center gap-2'>
            <div className='hidden md:flex flex-row items-center gap-2 rounded bg-gray-500 p-2 justify-between'>
                <input type="text" placeholder='Search product' className=' w-full px-2 rounded bg-gray-200'/>
                <div className='' ><AiOutlineSearch/></div>
            </div>
            <div className='flex flex-row items-center md:gap-2 justify-between'>
                <div className='items-center'>
                    <p  className='text-[0.8rem]'>ethereum address</p>
                    <p className='text-[0.8rem]'>Username</p>
                </div>
                <div className='md:w-20 md:h-20 rounded-full w-16 h-16'>
                    <img src={profilePic} alt="profile picture" />
                </div>
                <span className='pl-2 md:hidden'><AiOutlineMenu/> </span>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar;