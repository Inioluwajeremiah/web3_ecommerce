import React from 'react'
import ItemCard from './ItemCard'
import TitleText from './TitleText'

const SectionComponent = ({linkid, dataToMap, title}) => {
  return (
    <section id={`${linkid}`} className='w-full mx-[auto] items-center'>
    <TitleText title={title}/>
    <div className='flex flex-row flex-wrap items-center justify-center'>
    {
      dataToMap.map((item, index) =>  
        <ItemCard key ={index}
          imgSrc={item.fImage}
          productName={item.productName}
          productDescription={item.productDescription}
          productPriceTag={item.productPriceTag}
          productDiscountPercent={item.productDiscountPercent}
          productDiscountPrice = {item.productDiscountPrice}
          productNoPieces = {item.productNoPieces}
          id={item.Id}
          catData = {dataToMap}
        />
      )
    }
    </div>
   
  </section>
  )
}

export default SectionComponent