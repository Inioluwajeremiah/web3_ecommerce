import React from 'react'
import { useContext } from 'react'
import Sidebar from '../components/homecomponents/Sidebar'
import Navbar from '../components/Navbar'
import SectionComponent from '../components/SectionComponent'
import { BlockShopContextInstance } from '../context/BlockShopContext'

const Home = () => {
  const {AllproductsArray} = useContext(BlockShopContextInstance)

  return (
   <main>
     <SectionComponent dataToMap={AllproductsArray.slice(0,30)} title="Home" linkid="/" />
   </main>
  )
}

export default Home