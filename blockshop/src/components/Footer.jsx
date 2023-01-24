import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/images/blockshop.png'

const Footer = () => {
  return (
    <div className='h-[300px] w-full flex  items-center justify-around lg:flex-row  lg:items-center gap-2 p-4 bg-[#330066] text-white text-[1rem]'>
      
      <div className='flex flex-row gap-2 lg:inline block items-center'>
        <div className='h-24 w-24'>
          <img src={logo} alt="" />
        </div>
        <p>Block<span>Shop</span></p>
      </div>

      <div>
        <div className='p-2'>
          <p>Personal Portfolio</p>
          <p>BlockShop</p>
          <p>adewarainioluwa@gmail.com</p>
        </div>
        <div className='p-2 inline-block'>
          <p className='text-[1.3rem]'>Important Links</p>
          <Link to="/dashboard">Dashboard</Link> <br />betwee
          <Link to="/agriculture">Agriculture</Link> <br />
          <Link to="/electronics">Electronics</Link> <br />
          <Link to="/wears">Wears</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer