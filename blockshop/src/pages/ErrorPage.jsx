import React from 'react'
import error from '../../public/images/error.png'

const ErrorPage = () => {
  return (
    <div className='mt-[100px] max-w-[500px] mx-auto items-center justify-center flex flex-col p-4 shadow-md '>
      <div className='h-24 w-24 p-2'>
        <img src={error} alt="error" />
      </div>
      <p className='text-[2rem] text-black p-2 font-bold'>404</p>
      <p >Page request not found</p>

    </div>
  )
}

export default ErrorPage