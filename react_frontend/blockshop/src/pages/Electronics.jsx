import React from 'react'
import LandingSection from '../components/LandingSection'


const Electronics = ({}) => {
  return (
    <main>
      <LandingSection/>
      <section id='#television'>
        {television.map()}
      </section>

      <section id='#phones'>
        {phones.map()}
      </section>

      <section id='#games'>
        {games.map()}
      </section>

      <section id='#computer'>
        {computer.map()}
      </section>

      <section id='#sound'>
        {sound.map()}
      </section>

    </main>
  )
}

export default Electronics