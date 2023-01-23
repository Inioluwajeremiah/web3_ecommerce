import React from 'react'
import CategoriesCard from '../components/CategoriesCard'
import LandingSection from '../components/LandingSection'
import { WearsCategories } from '../data/CategoriesData'
import { phones } from '../data/DummyData'
const Wears = () => {
  return (
    <main>
        <LandingSection
        image = {MajorCategories[2].image}
        title = {MajorCategories[2].name}
        subtitle = {MajorCategories[2].description}
      />
        {WearsCategories.map((item, index) =>
                <CategoriesCard key={index}
                  imgsrc={item.icon}
                  name ={item.value}
                />
              ) 
            }
        <section id='cooperate'>
                {/* { cooperate.map()} */}
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

        <section id='native'>
            {/* {native.map()} */}
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


        <section id='casual'>
            {/* {casual.map()} */}
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

        <section id='sports'>
            {/* {sports.map()} */}
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
    </main>
  )
}

export default Wears