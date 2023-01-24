import React from 'react'
import { useState } from 'react'
import FormInput from './FormInput'
import LabelText from './LabelText'

const BuyNowDialog = () => {
    const [quantity, setQuantity] = useState(0)
  return (
    <div>
        <div>
            <img src="" alt="" />
        </div>
        <p>Product name</p>
        <LabelText title ="Product name"/>
        <FormInput type="number" placeHolder="Quantity"
            onCHangeText={(e) =>setQuantity(e.target.value.trim()) }
        />
        <p>Price tag</p>
        <button>Buy</button>
    </div>
  )
}

export default BuyNowDialog