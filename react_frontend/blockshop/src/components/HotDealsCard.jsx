import React from 'react'

// hot deals of cheap products to be displayed in between sections

const HotDealsCard = ({image, priceTag, priceDiscount, priceDiscountPercentage}) => {

  return (
    <div>
        <div>
            <img src={image} alt="" />
        </div>
        <div>
            <p>{priceTag}</p>
            <p>{priceDiscount}</p>
            <p>{priceDiscountPercentage}</p>
        </div>
    </div>
  )
}

export default HotDealsCard