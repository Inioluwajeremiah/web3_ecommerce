import React from 'react'
import { AgricultureCategories, MajorCategories } from '../data/CategoriesData'

const Agriculture = () => {
  return (
    <main>
        <LandingSection/>
        <div>
            {AgricultureCategories.map() }
        </div>
        <section id='cashcrops'>
            { cashcrops.map()}
        </section>

        <section id='farmmachines'>
            {farmmachines.map()}
        </section>

        {/* display agric hotdeals here */}
         {agricHotdeals.map()}

        <section id='improvedseeds'>
            {improvedseeds.map()}
        </section>
        
          {/* display bulk items here */}
          {agricBulkProducts.map()}
        <section id='fertilizers'>
            {fertilizers.map()}
        </section>
    </main>
  )
}

export default Agriculture