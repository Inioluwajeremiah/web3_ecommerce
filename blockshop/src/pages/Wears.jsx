import React, { useContext } from 'react'
import CategoriesCard from '../components/CategoriesCard'
import ItemCard from '../components/ItemCard'
import LandingSection from '../components/LandingSection'
import SectionComponent from '../components/SectionComponent'
import { BlockShopContextInstance } from '../context/BlockShopContext'
import { MajorCategories, WearsCategories } from '../data/CategoriesData'
import { phones } from '../data/DummyData'


const Wears = () => {

  const {WearsArray} = useContext(BlockShopContextInstance)

  const corporate = WearsArray.filter((product) => product.subcategory =="corporate")
  const native = WearsArray.filter((product) => product.subcategory =="native")
  const casual = WearsArray.filter((product) => product.subcategory =="casual")
  const sports = WearsArray.filter((product) => product.subcategory =="sports")
  const weather = WearsArray.filter((product) => product.subcategory =="weather")
 
  // top electronics deals
  const topdeals = WearsArray.filter((product) => product.discountPercent >= 12 )
  // bulk sales 
  const bulksales = WearsArray.filter((product) => product.productQuantity >= 200)

 
  return (
    <main className='w-[100%] items-center justify-center px-4 '>
      <LandingSection
        image = {MajorCategories[2].image}
        title = {MajorCategories[2].name}
        subtitle = {MajorCategories[2].description}
      />

      {/* categories sliding menu */}
      <section className='flex overflow-x-scroll gap-4 justify-between p-4 scrollbar-hide'>
        { WearsCategories.map((item, index) =>
            <CategoriesCard key={index}
              imgsrc={item.icon}
              title ={item.name}
              linkid={item.value}
            />
          ) 
        } 
        </section>

        <SectionComponent linkid="corperate" dataToMap={corporate} title="Corporate Wears" /> 
        <SectionComponent linkid="native" dataToMap={native} title="Native Wears" /> 
        <SectionComponent linkid="casual" dataToMap={casual} title="Casual Wears" /> 
        <SectionComponent linkid="sports" dataToMap={sports} title="Sport Wears" /> 
        <SectionComponent linkid="weather" dataToMap={weather} title="Weather Clothiongs" /> 
    </main>
  )
}

export default Wears