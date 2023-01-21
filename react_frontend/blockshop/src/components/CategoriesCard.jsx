import React from 'react'


// create card to display subcategories of each category of product
const CategoriesCard = ({imgsrc, title}) => {
  return (
    <div className=''>
      <div>
        <img src={imgsrc} alt=''/>
      </div>
      <p>{title}</p>
    </div>
  )
}

export default CategoriesCard