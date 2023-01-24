import React from 'react'

const ProductCard = ({ profilePics, productName, sellerAddress, price, category }) => {
  return (
    <div className=' w-full flex smii:flex-row gap-4 items-center text-text-color p-4 shadow-lg rounded mb-4 mx-[auto] xsm:flex-col'>
        <div className='w-[50px] h-[50px] rounded-full'>
            <img src={profilePics} alt="avatar profile" />
        </div>
        <div className='w-[100%]'>
            <p className='font-bold text-base '>{productName}</p>
            <div className='flex justify-between text-sm '>
            <p className='p-2'>{sellerAddress}</p>
            <p className='p-2'>{price}</p>
            <p className='p-2'>{quantity}</p>
            </div>
        </div>
    </div>
    )
}

export default ProductCard