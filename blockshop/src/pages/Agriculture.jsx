import React, { useContext } from 'react'
import BulkDealsCard from '../components/BulkDealsCard';
import BulkSectionComponent from '../components/BulkSectionComponent';
import CategoriesCard from '../components/CategoriesCard';
import HotDealsCard from '../components/HotDealsCard';
import LandingSection from '../components/LandingSection';
import SectionComponent from '../components/SectionComponent';
import TitleText from '../components/TitleText';
import TopDealsSectionComponent from '../components/TopDealsSectionComponent';
import { BlockShopContextInstance } from '../context/BlockShopContext';
import { AgricultureCategories, MajorCategories } from '../data/CategoriesData'
import { computer, games, phones, sound, television } from '../data/DummyData';

const Agriculture = () => {

  const {AgricultureArray} = useContext(BlockShopContextInstance)

  const produce = AgricultureArray.filter((product) => product.subcategory =="produce")
  const farmmachines = AgricultureArray.filter((product) => product.subcategory =="farmmachines")
  const seeds = AgricultureArray.filter((product) => product.subcategory =="seeds")
  const fertilizers = AgricultureArray.filter((product) => product.subcategory =="fertilizers")
  const herbicides = AgricultureArray.filter((product) => product.subcategory =="herbicides")
 
  /// top electronics deals
  const topdeals = AgricultureArray.filter((product) => product.discountPercent >= 12 )
  // bulk sales 
  const bulksales = AgricultureArray.filter((product) => product.productQuantity >= 200)
 
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
                linkid={item.id}
              />
            ) 
          }
          
        </section>
      

      <SectionComponent id="cashcrop" dataToMap={television} title="Televison" />      
      
      <SectionComponent linkid="farmmachines" dataToMap={computer} title="Computer Software and Haedware"/>
     
     
      {/* hot dea;s */}
      <TopDealsSectionComponent dataToMap={television}/>
      {/* <TitleText title="Hot Deals"/>
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
      </div> */}
      <SectionComponent linkid="improvedseeds" dataToMap={games}  title="Games"/>
      <SectionComponent linkid='fertilizers' dataToMap={phones} title="Phones and Accessories"/>
      
      {/* bulk sales */}
      {/* <TitleText title="Bulk Sales"/>
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
      </div> */}

      <BulkSectionComponent dataToMap={television} />

      <SectionComponent linkid="sound" dataToMap={sound} title="Sound and Music"/>
      
   
    </main>
  )
}

export default Agriculture