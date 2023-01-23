import React from 'react'
import { Link } from 'react-router-dom';

const LandingSection = ({image, title, subtitle, sectiion_link}) => {
  return (
    <section className='w-screen h-screen max-w-[100%] overflow-hidden bg-black'>
      <div className='w-screen h-screen overflow-hidden'>
        <img src={image} alt="" />
      </div>
      <div className=' absolute top-[50%] mx-auto text-white items-center justify-center flex flex-col w-full'>
        <p>{title}</p>
        <p>{subtitle}</p>
        {/* <Link to={`/${sectiion_link}`}>Shop now</Link> */}
        <Link to="#category">Shop now</Link>
        {/* <button>Buy now</button> */}
      </div>
    </section>
  )
}

export default LandingSection;