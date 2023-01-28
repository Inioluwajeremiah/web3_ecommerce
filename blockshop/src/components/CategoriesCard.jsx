import React from 'react'
import { Link } from 'react-router-dom'


// create card to display subcategories of each category of product
const CategoriesCard = ({linkid, imgsrc, title}) => {
  return (
      <Link to={`#${linkid}`} id='category' className='bg-blue-500 rounded-lg p-2 hover:cursor-pointer'>
        <div className='h-56 w-56 relative z '>
          <img src={imgsrc} alt={title}/>
          <p className='text-[1.2rem] bg-[#1e293b] text-white opacity-80 absolute text-center left-[10%] right-[10%] top-[50%]'>{title}</p>
      </div>
       
      </Link>
   
  )
}

export default CategoriesCard