import React from 'react'
import LandingSection from '../components/LandingSection'

const Wears = () => {
  return (
    <main>
        <LandingSection/>
        <section id='cooperate'>
            { cooperate.map()}
        </section>

        <section id='native'>
            {native.map()}
        </section>


        <section id='casual'>
            {casual.map()}
        </section>

        <section id='sports'>
            {sports.map()}
        </section>
    </main>
  )
}

export default Wears