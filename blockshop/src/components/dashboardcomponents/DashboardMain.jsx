import React from 'react'
import { useContext } from 'react'
import {FcElectronics} from 'react-icons/fc'
import {GiFarmTractor, GiClothes} from 'react-icons/gi'
import { BlockShopContextInstance } from '../../context/BlockShopContext'

const DashboardMain = () => {

    const {AgricultureArray, ElectronicsArray, WearsArray, AllproductsArra} = useContext(BlockShopContextInstance)

    const AnalyticsCardData = [
        {
            title: "Agriculture",
            score: AgricultureArray.length,
            icon: GiFarmTractor
        },
        {
            title: "Electronics",
            score: ElectronicsArray.length,
            icon: FcElectronics
        },
        {
            title: "Wears",
            score: WearsArray.length,
            icon: GiClothes
        }
        
    ]
  return (
    <div className=' w-full'>
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