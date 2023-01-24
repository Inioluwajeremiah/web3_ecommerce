import React from 'react'
import { useContext } from 'react'
import CategoriesCard from '../components/CategoriesCard'
import ItemCard from '../components/ItemCard'
import LandingSection from '../components/LandingSection'
import SectionComponent from '../components/SectionComponent'
import { BlockShopContextInstance } from '../context/BlockShopContext'
import { ElectronicsCategories, MajorCategories } from '../data/CategoriesData'
import { television, phones, games, computer, sound } from '../data/DummyData'

const Electronics = ({}) => {
  const {ElectronicsArray} = useContext(BlockShopContextInstance)

  // filter by ctegory
  const television = ElectronicsArray.filter((product) => product.subcategory =="television")
  const phones= ElectronicsArray.filter((product) => product.subcategory =="phones")
  const games = ElectronicsArray.filter((product) => product.subcategory =="games")
  const computer = ElectronicsArray.filter((product) => product.subcategory =="computer")
  const sound = ElectronicsArray.filter((product) => product.subcategory =="sound")
  
  // top electronics deals
  const topdeals = ElectronicsArray.filter((product) => product.discountPercent >= 12 )
  // bulk sales 
  const bulksales = ElectronicsArray.filter((product) => product.productQuantity >= 200)


  console.log("television => ", television);
  console.log("computer => ", computer);
  console.log("electronics array => ", ElectronicsArray);

  return (
    <main className='w-[100%] items-center justify-center px-4 '>
      <LandingSection
        image = {MajorCategories[1].image}
        title = {MajorCategories[1].name}
        subtitle = {MajorCategories[1].description}
      />
        {/* categories sliding menu */}
      <section className='flex overflow-x-scroll gap-4 justify-between p-4 scrollbar-hide'>
        { ElectronicsCategories.map((item, index) =>
            <CategoriesCard key={index}
              imgsrc={item.icon}
              title ={item.value}
              linkid={item.id}
            />
          ) 
        }
        
      </section>
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
      <SectionComponent dataToMap={television} title="Televison" linkid="television" />
      <SectionComponent dataToMap={computer} title="Computer Software and Haedware" linkid="computer"/>
      <SectionComponent dataToMap={games}  title="Games" linkid="games"/>
      <SectionComponent dataToMap={phones} title="Phones and Accessories" linkid="phones"/>
      <SectionComponent dataToMap={sound} title="Sound and Music" linkid="sound"/>
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