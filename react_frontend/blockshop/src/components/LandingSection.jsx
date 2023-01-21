import React from 'react'

const LandingSection = ({image, title, subtitle, sectiion_link}) => {
  return (
    <section>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
      <Link to={`/${sectiion_link}`}>Buy now</Link>
      <button>Buy now</button>
    </section>
  )
}

export default LandingSection;