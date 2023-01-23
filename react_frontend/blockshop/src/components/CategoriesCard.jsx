import React from 'react'


// create card to display subcategories of each category of product
const CategoriesCard = ({imgsrc, title}) => {
  return (
    <div id='category' className='overflow-x-scroll overflow-y-hidden grid-col-6  scrollbar-hide'>
      <div>
        <img src={imgsrc} alt={title}/>
      </div>
      <p>{title}</p>
    </div>
  )
}

export default CategoriesCard