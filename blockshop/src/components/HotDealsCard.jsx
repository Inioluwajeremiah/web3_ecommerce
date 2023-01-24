import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

// hot deals of cheap products to be displayed in between sections

const HotDealsCard = ({id, imgSrc, productName, productPriceTag, productDiscountPrice, productNoPieces, productDiscountPercent, catData}) => {

  return (
    <div className='w-[300px] h-[300px] min-w-[300px] items-center justify-center p-2 m-4 shadow-lg border border-[#ddd]'>
    <Link 
      to={`/preview/${productName + id}`}
      state={{ itemData: catData.filter((item) => item.id == id)}}
    >
        <div className='flex mx-auto aspect-ratio-square w-full overflow-hidden items-center justify-center'>
            <img src={imgSrc} alt={productName}/>
        </div>
        
        <div className='flex flex-row flex-wrap justify-between p-2'>
        <p className=''>{productName}</p>
          <p className='text-green-500'>{productDiscountPrice} ETH</p>
          <p className='text-orange-500'>{productDiscountPercent}% off</p>
          {/* <p>{productNoPieces}</p>
           */}
        </div>
        
    </Link>
    <Link  to={`/cart/${productName + id}`}  
        state={{
          itemData: catData.filter((item) => item.id == id)
        }}
        className='bg-[#330066] text-white p-2 w-full mx-auto items-center justify-center rounded-sm flex flex-row gap-2'>
        Add to cart <AiOutlineShoppingCart/>
    </Link>
</div>
  )
}

export default HotDealsCard