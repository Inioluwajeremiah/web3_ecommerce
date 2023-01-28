import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const TopDealsCard = ({id, index, imgSrc,productName, date, subcategory, productQuantity, productDiscountPercent, catData }) => {
  return (
    <Link 
        to={`/preview/${productName + id}`}
        state={{ itemData: catData.filter((item) => item.Id == id), id:id.toString()}}
        key={index} className=' w-full flex smii:flex-row gap-4 items-center text-text-color p-4 shadow-lg rounded mb-4 mx-[auto] xsm:flex-col'> 
        <div className='w-[50px] h-[50px] rounded-full'>
          <img src={imgSrc} alt="avatar profile" className='w-[50px] h-[50px]' />
        </div>
        <div className='w-[100%]'>
          <div className='flex flex-row justify-between'>
          <p className='font-bold text-base '>{productName}</p>
            <Link  to={`/preview/${productName + id}`}  
                state={{
                  itemData: catData.filter((item) => item.Id == id)
                }}
                className='bg-[#330066] text-white p-2 mx-auto items-center justify-center rounded-sm flex flex-row gap-2'>
                Buy now
            </Link>
           
          </div>
          
          <div className='flex justify-between text-sm '>
            <p className='p-2'>{productName}</p>
            <p className='p-2'>{subcategory}</p>
            <p className='p-2'>{date}</p>
            <p className='text-green-500'>{productQuantity} ETH</p>
            <p className='text-orange-500'>{productDiscountPercent}% off</p>
          </div>
        
        </div>
        
  </Link>
   
  )
}

export default TopDealsCard