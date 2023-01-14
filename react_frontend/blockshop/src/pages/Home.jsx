import React from 'react'
import Sidebar from '../components/homecomponents/Sidebar'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div >
        <Navbar/>
        <main>
            <Sidebar/>
        </main>
        
    </div>
  )
}

export default Home