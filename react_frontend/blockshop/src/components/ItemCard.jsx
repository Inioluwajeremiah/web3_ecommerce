import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const ItemCard = ({imgSrc, productName, productDescription,productPrice, productNoPieces, onclick}) => {
  return (
    <div className='w-[300px] h-[300px] max-w-[300px] items-center justify-center p-4 m-4 shadow-lg border border-[#ddd]'>
        <Link to="/details/:product_details">
        
            <div className='flex mx-auto h-24 w-24 items-center justify-center'>
                <img src={imgSrc} alt={productName}/>
            </div>
            <p className='mt-8'>{productName}</p>
            <p>{productDescription}</p>
            <p>{productInitialPrice}</p>
            <p>{productDiscountPrice}</p>
            <p>{productDiscountPercent}</p>
            <p>{productNoPieces}</p>
        </Link>
        <Link to="/cart/:productCart"  state={{}}
            className='bg-green-500 text-white p-4  mt-8 w-full mx-auto items-center justify-center rounded-sm'>
            Add to cart <AiOutlineShoppingCart/>
        </Link>
    </div>
  )
}

export default ItemCard;