import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const TopDealsCard = ({id, index, imgSrc,productName, date, subcategory, productQuantity, productDiscountPercent, catData }) => {
  return (
    <Link 
        to={`/preview/${productName + id}`}
        state={{ itemData: catData.filter((item) => item.Id == id), id:id.toString()}}
        key={index} className=' w-full flex smii:flex-row gap-4 items-center text-text-color p-4 shadow-lg rounded mb-4 mx-[auto] xsm:flex-col border-[1px] border-[#ddd]'> 
        <div className='w-[50px] h-[50px] rounded-full'>
          <img src={imgSrc} alt="avatar profile" className='w-[50px] h-[50px]' />
        </div>
        <div className='w-[100%] items-center ' >
          <p className='font-bold text-base '>{productName}</p>
          <div className='flex flex-row justify-between text-sm items-center w-full'>
            <p className='text-green-500'>{productQuantity} Pieces</p>
            <p className='text-orange-500 px-2'>{productDiscountPercent}% off</p>
            <p className='bg-[#330066] text-white p-2 items-center rounded-sm '>
                Buy now
            </p>
          </div>
        
        </div>
        
  </Link>
   
  )
}

export default TopDealsCard