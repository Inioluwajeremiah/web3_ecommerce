import React from 'react'
import HotDealsCard from './HotDealsCard'
import TitleText from './TitleText'

const TopDealsSectionComponent = ({dataToMap}) => {
  return (
    <>
        <TitleText title="Top Deals"/>
        <div className='flex overflow-x-scroll gap-4 justify-between p-4 scrollbar-hide'> 
            {dataToMap.map((item, index) => 
            <HotDealsCard key = {index}
            imgSrc={item.imageuri}
            productPriceTag ={item.productPriceTag}
            productName = {item.productName}
            productDiscountPercent={item.productDiscountPercent}
            productDiscountPrice =  {(item.productPriceTag * item.productDiscountPercent) / 100}
            productNoPieces = {item.productNoPieces}
            id={item.id}
            catData = {dataToMap}
            />
            )}
        </div>
    </>
  )
}

export default TopDealsSectionComponent