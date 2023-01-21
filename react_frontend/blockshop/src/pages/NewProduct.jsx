import React from 'react'
import AddProduct from '../components/AddProduct'

const NewProduct = () => {
  return (
    <div className='flex flex-row gap-2 justify-between p-4 relative'>
        <DashboardLeftNav />
        <div className='flex  flex-col lg:flex-row lg:justify-between w-full px-4'>
            <AddProduct />
            <DashboardRightNav/>
        </div> 
    </div>
  )
}

export default NewProduct