import React from 'react'
import { useContext } from 'react'
import CategoriesCard from '../components/CategoriesCard'
import ItemCard from '../components/ItemCard'
import LandingSection from '../components/LandingSection'
import SectionComponent from '../components/SectionComponent'
import { ElectronicsCategories, MajorCategories } from '../data/CategoriesData'
import { television, phones, games, computer, sound } from '../data/DummyData'

const Electronics = ({}) => {
  // const {television, phones, games, computer, sound} = useContext(BlockShopContextInstance)
  return (
    <main className='items-center justify-center w-full mx-auto'>
      <LandingSection
        image = {MajorCategories[1].image}
        title = {MajorCategories[1].name}
        subtitle = {MajorCategories[1].description}
      />
      {ElectronicsCategories.map((item, index) =>
                <CategoriesCard key={index}
                  imgsrc={item.icon}
                  name ={item.value}
                />
              ) 
      }
      {/* <section id='#television'>
        {
          television.map((item, index) =>  
            <ItemCard key ={index}
              imgSrc={item.imageuri}
              productName={item.productName}
              productDescription={item.productDescription}
              productPriceTag={item.productPriceTag}
              productDiscountPercent={item.productDiscountPercent}
              productDiscountPrice = {item.productDiscountPrice}
              productNoPieces = {item.productNoPieces}
              id={item.id}
              catData = {television}
            />
          )
        }
      </section> */}
      <SectionComponent dataToMap={television} title="Televison" />
      <SectionComponent dataToMap={computer} title="Computer Software and Haedware"/>
      <SectionComponent dataToMap={games}  title="Games"/>
      <SectionComponent dataToMap={phones} title="Phones and Accessories"/>
      <SectionComponent dataToMap={sound} title="Sound and Music"/>
{/* 
      <section id='#phones'>
        {
           phones.map((item, index) =>  
           <ItemCard key ={index}
             imgSrc={item.imageuri}
             productName={item.productName}
             productDescription={item.productDescription}
             productPriceTag={item.productPriceTag}
             productDiscountPercent={item.productDiscountPercent}
             productDiscountPrice = {item.productDiscountPrice}
             productNoPieces = {item.productNoPieces}
             id={item.id}
             catData = {phones}
           />
         )
        }
      </section>

      <section id='#games'>
        {
           games.map((item, index) =>  
           <ItemCard key ={index}
             imgSrc={item.imageuri}
             productName={item.productName}
             productDescription={item.productDescription}
             productPriceTag={item.productPriceTag}
             productDiscountPercent={item.productDiscountPercent}
             productDiscountPrice = {item.productDiscountPrice}
             productNoPieces = {item.productNoPieces}
             id={item.id}
             catData = {games}
           />
         )
        }
      </section>

      <section id='#computer'>
        { computer.map((item, index) =>  
            <ItemCard key ={index}
              imgSrc={item.imageuri}
              productName={item.productName}
              productDescription={item.productDescription}
              productPriceTag={item.productPriceTag}
              productDiscountPercent={item.productDiscountPercent}
              productDiscountPrice = {item.productDiscountPrice}
              productNoPieces = {item.productNoPieces}
              id={item.id}
              catData = {computer}
            />
          )
        }
      </section>

      <section id='#sound'>
        {
          sound.map((item, index) =>  
          <ItemCard key ={index}
            imgSrc={item.imageuri}
            productName={item.productName}
            productDescription={item.productDescription}
            productPriceTag={item.productPriceTag}
            productDiscountPercent={item.productDiscountPercent}
            productDiscountPrice = {(item.productDiscountPercent * item.productPriceTag) / 100 }
            productNoPieces = {item.productNoPieces}
            id={index}
            // id={item.id}
            catData = {sound}
          />
          )
        }
      </section> */}

    </main>
  )
}

export default Electronics