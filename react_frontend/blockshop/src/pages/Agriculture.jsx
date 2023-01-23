import React from 'react'
import CategoriesCard from '../components/CategoriesCard';
import LandingSection from '../components/LandingSection';
import { AgricultureCategories, MajorCategories } from '../data/CategoriesData'
import { phones } from '../data/DummyData';

const Agriculture = () => {
  return (
    <main>
      <LandingSection
      image = {MajorCategories[0].image}
      title = {MajorCategories[0].name}
      subtitle = {MajorCategories[0].description}
      />
      {AgricultureCategories.map((item, index) =>
          <CategoriesCard key={index}
            imgsrc={item.icon}
            name ={item.value}
          />
        ) 
      }
      <section id='cashcrops'>
          {/* { cashcrops.map()} */}
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

      <section id='farmmachines'>
          {/* {farmmachines.map()} */}
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

        {/* display agric hotdeals here */}
         {/* {agricHotdeals.map()} */}

        <section id='improvedseeds'>
            {/* {improvedseeds.map()} */}
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
        
          {/* display bulk items here */}
          {/* {agricBulkProducts.map()} */}
        <section id='fertilizers'>
            {/* {fertilizers.map()} */}
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

export default Agriculture