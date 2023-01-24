import React from 'react'
import BulkDealsCard from '../components/BulkDealsCard';
import BulkSectionComponent from '../components/BulkSectionComponent';
import CategoriesCard from '../components/CategoriesCard';
import HotDealsCard from '../components/HotDealsCard';
import LandingSection from '../components/LandingSection';
import SectionComponent from '../components/SectionComponent';
import TitleText from '../components/TitleText';
import { AgricultureCategories, MajorCategories } from '../data/CategoriesData'
import { computer, games, phones, sound, television } from '../data/DummyData';

const Agriculture = () => {
  return (
    <main className='w-[100%] items-center justify-center px-4 '>
      <LandingSection
        image = {MajorCategories[0].image}
        title = {MajorCategories[0].name}
        subtitle = {MajorCategories[0].description}
        />

        {/* categories sliding menu */}
          <section className='flex overflow-x-scroll gap-4 justify-between p-4 scrollbar-hide'>
          { AgricultureCategories.map((item, index) =>
              <CategoriesCard key={index}
                imgsrc={item.icon}
                title ={item.value}
              />
            ) 
          }
          
        </section>
      
      <TitleText title="Hot Deals"/>
      <div className='flex overflow-x-scroll gap-4 justify-between p-4 scrollbar-hide'> 
          {television.map((item, index) => 
        <HotDealsCard key = {index}
          imgSrc={item.imageuri}
          productPriceTag ={item.productPriceTag}
          productName = {item.productName}
          productDiscountPercent={item.productDiscountPercent}
          productDiscountPrice =  {(item.productPriceTag * item.productDiscountPercent) / 100}
          productNoPieces = {item.productNoPieces}
          id={item.id}
          catData = {television}
        />
        )}
      </div>

      <SectionComponent id="cashcrops" dataToMap={television} title="Televison" />      
      
      <TitleText title="Bulk Sales"/>
      <div className='flex overflow-x-scroll gap-4 justify-between p-4 scrollbar-hide'> 
          {television.map((item, index) => 
            <BulkDealsCard key={index}
              imgSrc = {item.imageuri}
              productName = {item.productName}
              quantity = {item.productNoPieces}
              productPriceTag = {item.productPriceTag}
              catData = {television}
            />
          )
        }
      </div>

      {/* <SectionComponent id="farmmachines" dataToMap={computer} title="Computer Software and Haedware"/>
      <SectionComponent id="improvedseeds" dataToMap={games}  title="Games"/>
      <SectionComponent id='fertilizers' dataToMap={phones} title="Phones and Accessories"/>
      <SectionComponent dataToMap={sound} title="Sound and Music"/> */}
      
   
    </main>
  )
}

export default Agriculture