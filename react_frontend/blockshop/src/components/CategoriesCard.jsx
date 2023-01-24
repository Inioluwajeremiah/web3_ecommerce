import React from 'react'


// create card to display subcategories of each category of product
const CategoriesCard = ({imgsrc, title}) => {
  return (
      <div id='category' className='bg-blue-500 rounded-lg p-2 hover:cursor-pointer -z-10'>
       <div className='h-56 w-56 relative '>
          <img src={imgsrc} alt={title}/>
        <p className='text-[2rem] bg-[#1e293b] text-white opacity-80 absolute text-center left-[10%] right-[10%] top-[50%]'>{title}</p>
        </div>
       
      </div>
   
  )
}

export default CategoriesCard