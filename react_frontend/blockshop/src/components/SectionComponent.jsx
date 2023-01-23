import React from 'react'
import ItemCard from './ItemCard'

const SectionComponent = ({dataToMap, title}) => {
  return (
    <section id='#television' className='w-[100%] mx-auto items-center justify-center'>
        <p className='text-center text-lg font-bold p-2'>{title}</p>
    <div className='flex flex-row flex-wrap'>
    {
      dataToMap.map((item, index) =>  
        <ItemCard key ={index}
          imgSrc={item.imageuri}
          productName={item.productName}
          productDescription={item.productDescription}
          productPriceTag={item.productPriceTag}
          productDiscountPercent={item.productDiscountPercent}
          productDiscountPrice = {(item.productPriceTag * item.productDiscountPercent) / 100}
          productNoPieces = {item.productNoPieces}
          id={item.id}
          catData = {dataToMap}
        />
      )
    }
    </div>
   
  </section>
  )
}

export default SectionComponent