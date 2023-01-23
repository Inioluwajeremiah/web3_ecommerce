import React from 'react'

const DashboardMain = () => {
    const AnalyticsCardData = [
        {
            title: "Agriculture",
            score: 200,
            icon: "/public/images/agriculture.jpg"
        },
        {
            title: "Electronics",
            score: 250,
            icon: "/public/images/electronics.jpg"
        },
        {
            title: "Wears",
            score: 2000,
            icon: "/public/images/wears.jpg"
        }
        
    ]
  return (
    <div>
          <section id='analytics' className='mx-4 shadow-lg p-4 mt-12'>
            <h2 className='text-text-color font-bold text-lg mb-2'>Analytics</h2>
            <div className='flex flex-row flex-wrap gap-2 items-center text-text-color p- mb-8 mx-[auto]'>
                {
                    AnalyticsCardData.map((dataItem, index) => 
                        <div key={index} className='items-center text-text-color p-4 shadow-lg rounded mb-4 mx-[auto]'>
                            <span className='flex justify-center py-2 text-2xl font-black text-app-color'><dataItem.icon/></span>
                            <div className='flex flex-row gap-2 items-center justify-between'>
                                <p className='font-medium text-base'>{dataItem.title}</p>
                                <p className='text-blue-500 text-sm i'>{dataItem.score}</p>
                            </div>
                        </div>
                    )
                }

            </div>

            {/* <div>
                <h3 className='text-text-color font-bold text-base mb-2'> Graph</h3>
                <DashBoardGraph/>

            </div> */}
        </section>
    </div>
  )
}

export default DashboardMain