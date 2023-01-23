import React from 'react'

const DashboardRightNav = () => {
  return (
    <div>
        <div className='flex flex-row gap-2'>
            <div className='h-24 w-24'>
                <img src="" alt="" />
            </div>
            <p>Address</p>
            <p>Full name</p>
        </div>
        <div>
            <p>Store name</p>
            <div className=''>
                <img src="" alt="store display profile" />
            </div>
            <p>Store Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit. Impedit, illo repudiandae, 
                cum maiores inventore itaque odio optio 
                incidunt debitis expedita necessitatibus 
                aliquid qui. Sit minima rem, accusantium 
                suscipit quis eius.
            </p>
            <p>Store Location</p>
            <div className='flex flex-row flex-wrap p-2'>
                <p>Store Country </p>
                <p>Store state</p>
                <p>Store address</p>
            </div>
            <p>Contact</p>
            <div className='flex flex-row justify-between'>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Email@xyz.com</p>
            </div>
        </div>
    </div>
  )
}

export default DashboardRightNav