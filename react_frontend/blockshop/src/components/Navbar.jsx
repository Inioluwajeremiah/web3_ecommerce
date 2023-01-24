import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import {IoMenuOutline} from 'react-icons/io5'
import ListComponent from './ListComponent'
import { BlockShopContextInstance } from '../context/BlockShopContext'
import { ListData } from '../data/ListData'
import logo from '/public/images/blockshop.png'

const Navbar = () => {
    const {account, ConnectAccount} = useContext(BlockShopContextInstance);

    const toggleMenu = ()


  return (
    <>
        <nav className='flex fixed top-0 flex-row justify-between items-center w-full bg-white text-[#1e293b] py-4 px-8 h-20 shadow-md'>
            <div className='logo flex items-center gap-2'>
                <div className='h-16 w-16'>
                    <img src={logo} alt="" />
                </div>
idden            </div>
            <div className='flex flex-row justify-between items-center mt-32 lg:mt-0'>
                <ul className='lg:flex flex-row justify-between items-center mt-32 lg:mt-0'>

                   {ListData.map((item, index) => <ListComponent key={index} title={item.title} link={item.link} />)}
                   {account.length> 0 ? <p className='text-blue-700'>{account.slice(0,5)}...{account.slice(account.length-5, account.length)}</p> :
                    <button onClick={ConnectAccount} className="bg-blue-700 p-4 rounded-sm">Connect Wallet</button>
                   }
                </ul>
                <div>
                    <IoMenuOutline id='navicon' className=''/>
                </div>
            
            </div>
        </nav>
        <Outlet/>
    </>
  )
}

export default Navbar