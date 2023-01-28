import React from 'react'
import BulkDealsCard from './BulkDealsCard'
import TitleText from './TitleText'

const BulkSectionComponent = ({ dataToMap}) => {
  return (
    <>
    <TitleText title="Bulk deals" />
      <div className='flex overflow-x-scroll gap-4 justify-between p-4 scrollbar-hide'> 
          {dataToMap.map((item, index) => 
            <BulkDealsCard key={index}
              imgSrc = {item.imageuri}
              productName = {item.productName}
              quantity = {item.productNoPieces}
              productPriceTag = {item.productPriceTag}
              catData = {dataToMap}
              id={item.Id}
            />
          )
        }
      </div>
    </>
  )
  
}

export default BulkSectionComponent