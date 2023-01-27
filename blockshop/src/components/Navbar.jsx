import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import {IoMenuOutline} from 'react-icons/io5'
import ListComponent from './ListComponent'
import { BlockShopContextInstance } from '../context/BlockShopContext'
import { ListData } from '../data/ListData'
import logo from '/public/images/blockshop.png'

const Navbar = () => {
    const [showMenu, setShowMenu] =  useState(false);

    const {account, ConnectAccount} = useContext(BlockShopContextInstance);

    const toggleMenu = () => {
        const navmenu = document.getElementById('navmenu');
        if (showMenu == false) {
            setShowMenu(true)
            // bg-white top-20 right-0 p-2 lg:mt-0
            navmenu.style.display="inline-block";
            navmenu.style.position="absolute";
            navmenu.style.backgroundColor ="#330066";
            navmenu.style.color = "white";
            navmenu.style.fontSize = "1rem";
            navmenu.style.top = "80px";
            navmenu.style.right = 0
            navmenu.style.minWidth = "200px";
            navmenu.style.width = "50%";
            navmenu.style.alignItems = "center";
            navmenu.style.textAlign = "center";
            navmenu.style.paddingBottom = '1rem';
        } else  {
            setShowMenu(false)
            navmenu.style.display = "none"
        }
    }


  return (
    <>
        <nav className='flex fixed top-0 flex-row justify-between items-center w-full bg-white text-[#1e293b] px-8 h-[80px] shadow-md z-100'>
            <div className='logo flex items-center gap-2'>
                <div className='h-16 w-16'>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <ul id='navmenu' className='lg:flex flex-row justify-between items-center hover:cursor-pointer  hidden'>

                   {ListData.map((item, index) => <ListComponent key={index} title={item.title} link={item.link} onclick={toggleMenu} />)}
                   {account.length> 0 ? <p className='text-blue-700'>{account.slice(0,5)}...{account.slice(account.length-5, account.length)}</p> :
                    <button onClick={ConnectAccount} className="bg-[#330066] text-white p-4 rounded-sm">Connect Wallet</button>
                   }
                </ul>
                <div>
                    <IoMenuOutline id='navicon' className='lg:hidden text-[#330066] font-bold text-[2rem]' onClick={toggleMenu}/>
                </div>
            
            </div>
        </nav>
        <Outlet/>
    </>
  )
}

export default Navbar