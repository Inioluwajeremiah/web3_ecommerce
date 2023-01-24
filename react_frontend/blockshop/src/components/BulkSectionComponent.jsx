import React from 'react'
import BulkDealsCard from './BulkDealsCard'

const BulkSectionComponent = ({id, dataToMap, title}) => {
  return (
    <>
        <p className='text-center text-lg font-bold p-2'>{title}</p>
    <section id={`#${id}`} className='flex overflow-x-scroll gap-4 justify-between p-4 scrollbar-hide'>
        <div className='flex flex-row flex-wrap items-center justify-center'>
            {
                dataToMap.map((item, index) =>  
                    <BulkDealsCard key={index}
                        image = {item.imageuri}
                        name = {item.name}
                        quantity = {item.quantity}
                        priceTag = {item.priceTag}
                    />
                )
            }
        </div>
    </section>
    </>
  )
  
}

export default BulkSectionComponent