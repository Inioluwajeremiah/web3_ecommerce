import React, { useContext } from 'react';
import { AiOutlineClose, AiOutlineEdit, AiOutlineHome, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { GoChecklist } from 'react-icons/go';
import {GiFarmTractor, GiClothes} from 'react-icons/gi'
import {FcElectronics, FcSalesPerformance} from 'react-icons/fc'
import { IoAnalyticsOutline, IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { BlockShopContextInstance } from '../../context/BlockShopContext';

const DashboardLeftNav = () => {

    const LinkList = ({icon, title, link,...children}) => {
        return (
            <li className="hover:cursor-pointer hover:text-[#660099] w-full p-2"  {...children}>
                <Link to={link} className="flex flex-row items-center gap-2">
                    <span className=''>{icon}</span> {title}
                </Link>
            </li>
        )
    }

    const ShowMenu = () => {
        const menuItem = document.getElementById('menu-item');
        menuItem.style.display = 'block'; 
        menuItem.style.position = 'absolute'; 

    }

    const CloseMenu = () => {
        const menuItem = document.getElementById('menu-item');
        menuItem.style.display = 'none';
    }


    const { account } = useContext( BlockShopContextInstance );

  return (

    <>
        <p className="lg:hidden absolute left-0 ml-2 fixed top-[80px]" onClick={ShowMenu}  id="menu-icon">{<AiOutlineMenu/>}</p>
        <div className="hidden z-20 lg:inline left-0 p-2 h-[100vh] max-h-[100%] bg-white max-w-[300px]" id='menu-item' >
            <div className='flex flex-row gap-2 items-center justify-between'>
                <h1 className='text-center p-4 text-[#475569] tracking-wide font-black text-lg'>Menu</h1>
                <p className="lg:hidden" onClick={CloseMenu} id="close-icon">{<AiOutlineClose/>}</p>
            </div>
            <ul className='overflow-y-scroll p-4 max-h-[70%] shadow-lg w-full' >
                <LinkList icon={<AiOutlineHome/>} title="Home" link="/"/>
                <LinkList icon={<GiFarmTractor/>} title="Agriculture" link="/agriculture" catname="Agriculture" />
                <LinkList icon={<FcElectronics/>} title="Electronics" link="/electronics" catname="Bsiness"/>
                <LinkList icon={<GiClothes/>} title="Wears" link="/wears" catname="Climate"/>
                <div className='h-[1px] w-full bg-[#ddd] my-2'></div>
                
                <LinkList icon={<AiOutlineEdit/>} title="Add Product" link="/addproduct"/>
                <LinkList icon={<IoAnalyticsOutline/>} title="Analytics" link="#analytics" />
                <LinkList icon={<FcSalesPerformance/>} title="Transactions" link="#transactions"/>
                <LinkList icon={<GoChecklist/>} title="Top deals" link="#hotdeals" />
                <LinkList icon={<GoChecklist/>} title="New Products" link="#newproducts"/>
                <LinkList icon={<GoChecklist/>} title="Bulk Sales" link="#bulksales"/>
                
                <div className='h-[1px] w-full bg-[#ddd] my-2'></div>

                <LinkList icon={<IoCartOutline/>} title="Cart" link="/cart"/>

                <div className='h-[1px] w-full bg-[#ddd] my-2'></div>
                <LinkList icon={<AiOutlineUser/>} title="Update Profile" link="/profile"/>
            </ul>  
        </div>
      
    </>
    
  )
}

export default DashboardLeftNav