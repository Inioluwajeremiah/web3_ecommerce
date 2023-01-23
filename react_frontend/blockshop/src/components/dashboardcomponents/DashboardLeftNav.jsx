import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlockShopContextInstance } from '../../context/BlockShopContext';

const DashboardLeftNav = () => {

    const LinkList = ({icon, title, link,...children}) => {
        return (
            <li className="items-center p-2 hover:cursor-pointer w-full hover:tracking-wide ease-in duration-500 "  {...children}>
                <Link to={link}>
                    <span className=''>{icon}</span>
                     {title}
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


    const { accountAddress } = useContext( BlockShopContextInstance );

  return (

    <>
    <p className="lg:hidden" onClick={ShowMenu} id="menu-icon">{<AiOutlineMenu/>}</p>
    <div className="hidden z-20 lg:inline left-0 p-2 max-h-[100vh] bg-white" id='menu-item' >
        <div className='flex flex-row gap-2 items-center justify-between'>
            <h1 className='text-center p-4 text-text-color tracking-wide font-black text-lg'>Dashboard</h1>
            <p className="lg:hidden" onClick={CloseMenu} id="close-icon">{<AiOutlineClose/>}</p>
        </div>
        <ul className='overflow-y-scroll p-4 h-full shadow-lg' >
            <LinkList icon={<AiOutlineHome/>} title="Home" link=""/>
            <LinkList icon={<GiFarmTractor/>} title="Agriculture" link="/agriculture" catname="Agriculture" />
            <LinkList icon={<FcElectronics/>} title="Electronics" link="/electronics" catname="Bsiness"/>
            <LinkList icon={<GiClothes/>} title="Wears" link="/wears" catname="Climate"/>
            <div className='h-[1px] w-full bg-[#ddd] my-2'></div>
            
            <LinkList icon={<AiOutlineEdit/>} title="Add Product" link="/addproducts"/>
            <LinkList icon={<IoAnalyticsOutline/>} title="Analytics" link="#analytics" />
            <LinkList icon={<FcSalesPerformance/>} title="Transactions" link="#transactions"/>
            <LinkList icon={<GoChecklist/>} title="Hot deals" link="#hotdeals" />
            <LinkList icon={<GoChecklist/>} title="Recent Products" link="#recentproducts"/>
            <LinkList icon={<GoChecklist/>} title="Bulk Products" link="#bulkproducts"/>
            
            <div className='h-[1px] w-full bg-[#ddd] my-2'></div>
            
            <LinkList icon={<IoCartOutline/>} title="Cart" link="/cart"/>
        </ul>  
    </div>
</>
    
  )
}

export default DashboardLeftNav