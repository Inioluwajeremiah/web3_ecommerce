import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const ItemCard = ({id, imgSrc, productName, productDiscountPrice, productDiscountPercent, productDescription,productPriceTag, productNoPieces, catData}) => {
  return (
    <div className='w-[300px] h-[300px] max-w-[300px] items-center justify-center p-2 m-4 shadow-lg border border-[#ddd]'>
        <Link 
          to={`/preview/${productName + id}`}
          state={{ itemData: catData.filter((item) => item.Id == id), id:id.toString()}}
        >
        
            <div className='flex mx-auto h-28 w-full overflow-hidden items-center justify-center'>
                <img src={imgSrc} alt={productName}/>
            </div>
            <p className='mt-2'>{productName}</p>
            <p className='text-sm'>{productDescription.slice(0, 50)}...</p>
            <div className='flex flex-row flex-wrap justify-between text-sm p-2'>
              <p><s>{productPriceTag}</s> ETH</p>
              <p className='text-green-500'>{productDiscountPrice} ETH</p>
              <p className='text-orange-500'>{productDiscountPercent}% off</p>
              <p>{productNoPieces}</p>
            </div>
            
        </Link>
        <Link  to={`/cart/${productName + id}`}  
            state={{
              itemData: catData.filter((item) => item.id == id)
            }}
            className='bg-[#330066] text-white p-4  mt-2 w-full mx-auto items-center justify-center rounded-sm flex flex-row gap-2'>
            Add to cart <AiOutlineShoppingCart/>
        </Link>
    </div>
  )
}

export default ItemCard;