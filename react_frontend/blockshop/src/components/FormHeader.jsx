import React from 'react'
import logo from '/public/images/blockshop.png'

const FormHeader = () => {
  return (
    <div className='flex flex-row justify-around items-center border-b-[1px] border-[#ddd] py-2 mb-8'>
          <h1 className='text-text-color text-2xl font-bold'>BlockShop</h1>
          <div className='h-16 w-16' >
              <img src={logo} alt="logo" />
          </div>
    </div>
  )
}

export default FormHeader;