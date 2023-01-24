import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const BulkDealsCard = ({id, imgSrc, productName, quantity, productPriceTag, catData}) => {
  return (
    <div className='w-[300px] h-[300px] min-w-[300px] items-center justify-center p-2 m-4 shadow-lg border border-[#ddd] aspect-ratio-square'>
        <Link 
          to={`/preview/${productName + id}`}
          state={{ itemData: catData.filter((item) => item.id == id)}}
        >
        
            <div className='flex mx-auto aspect-ratio-square w-full overflow-hidden items-center justify-center'>
                <img src={imgSrc} alt={productName}/>
            </div>
            <div className='flex flex-row flex-wrap gap-2 items-center '>  
              <p className='rounded-full border-[#330066] bg-white text-[1.4rem] font-bold text-black'>{quantity}</p>
              <div className='flex gap-2'>
                <p>{productName}</p>
                <p className='text-blue-700'>{productPriceTag} ETH</p>
              </div> 
            </div>  
        </Link>
        <Link  to={`/cart/${productName + id}`}  
            state={{
              itemData: catData.filter((item) => item.id == id)
            }}
            className='bg-[#330066] text-white p-4 w-full mx-auto items-center justify-center rounded-sm flex flex-row gap-2'>
            Add to cart <AiOutlineShoppingCart/>
        </Link>
    </div>
//     <div className='w-[300px] h-[300px] max-w-[300px] items-center justify-center p-2 m-4 shadow-lg border border-[#ddd]'>
//     <div className='w-full h-28'>
//         <img src={image} alt={name}  />
//     </div>
//     <p className='h-24 w-24 rounded-full bg-white opacity-70 text-[2rem] text-black'>{quantity}</p>
//     <div className='flex py-2'>
//         <p>{name}</p>
//         <p>{priceTag}</p>
//     </div>
// </div>
  )
}

export default BulkDealsCard