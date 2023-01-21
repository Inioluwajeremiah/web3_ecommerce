import React from 'react'

const BulkDealsCard = ({image, name, quantity, priceTag, priceDiscount, priceDiscountPercentage}) => {
  return (
    <div>
        <div>
            <img src={image} alt="" />
        </div>
        <div>
            <p>{name}</p>
            <p>{quantity}</p>
            <p>{priceTag}</p>
            <p>{priceDiscount}</p>
            <p>{priceDiscountPercentage}</p>
        </div>
    </div>
  )
}

export default BulkDealsCard