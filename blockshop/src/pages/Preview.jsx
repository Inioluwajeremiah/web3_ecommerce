import React from 'react'
import { useLocation } from 'react-router-dom'

const Preview = () => {

  const location = useLocation()
  const itemData = location.state;
  console.log("itemData => ", itemData);

  return (
    <div className='mt-[80px]'>
      {
        itemData.map((item, index) =>

        <div key={index}>
          <p>{item.productName}</p>
        <p>{item.seller}</p>
 
        <p>{item.date}</p>
        <img src={item.fImage} alt={item.productName} />
        <p>{item.productDescription}</p>
        <p>{item.productNoPieces}</p>
        <p>Store description</p>
        <p>seller contact</p>
        <button>Buy now</button>
        <button>Add to cart</button>
        </div>
        
        )
}
        
    </div>
  )
}

export default Preview