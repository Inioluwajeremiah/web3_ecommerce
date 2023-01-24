import React from 'react'
import { Link } from 'react-router-dom';

const LandingSection = ({image, title, subtitle, sectiion_link}) => {
  return (
    <section className='w-screen  max-w-[100%] overflow-hidden flex flex-row gap-4 mt-24 items-center'>
      <div className=' mx-auto text-black items-start justify-start flex flex-col w-full'>
        <p className='text-[2rem] font-bold'>{title}</p>
        <p className='leading-6'>{subtitle}</p>
        {/* <Link to={`/${sectiion_link}`}>Shop now</Link> */}
        <Link to="#category" className='text-[2rem] text-white bg-[#330066] p-4 rounded-md'>Shop now</Link>
      {/* <button>Buy now</button> */}
      </div>
      <div className='w-full aspect-ratio-square'>
        <img src={image} alt="" className='w-full' />
      </div>
    
    </section>
  )
}

export default LandingSection;