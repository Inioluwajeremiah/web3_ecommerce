import { ethers } from 'ethers'
import React from 'react'
import { useContext } from 'react'
import {FcElectronics} from 'react-icons/fc'
import {GiFarmTractor, GiClothes} from 'react-icons/gi'
import { BlockShopContextInstance } from '../../context/BlockShopContext'

const DashboardMain = () => {

    // custom th element funcctional component
const TableCell = ({tableText}) => {
    return ( <td className='items-left  p-2'>{tableText}</td> )
}
// custom th element funcctional component
const TableHeaderCell = ({headerText}) => {
    return ( <th className='items-left p-2'>{headerText}</th> )
}
// custom tr element funcctional component
const TableRow = ({no, name, category, subcategory, price, quantity, status, buyer}) => {
    return (
        <tr className='text-sm text-text-color even:bg-gray-100  '>
            <TableCell tableText={no}/>
            <TableCell tableText={name}/>
            <TableCell tableText={category}/>
            <TableCell tableText={subcategory}/>
            {/* <td className='items-left  p-2' dangerouslySetInnerHTML={{__html: body}}></td> */}
            <TableCell tableText={price}/>
            <TableCell tableText={quantity}/>
            <TableCell tableText={buyer}/>
            <TableCell tableText={status}/>
        </tr>
    )
}

    const {account, AllProducts, AgricultureArray, ElectronicsArray, WearsArray, AllproductsArray} = useContext(BlockShopContextInstance)

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

    const ProductsData = AllProducts.filter((item) => { 
        // console.log('Filtered by seller address => ', ethers.utils.getAddress(item.seller))
        // console.log('Filtered by account address => ', ethers.utils.getAddress(account))
        ethers.utils.getAddress(item.seller) == ethers.utils.getAddress(account)
    }
    );
    console.log("Filtered by address product daata => ",ProductsData);
  return (
    <div className=' w-full'>
        <section id='analytics' className='mx-4 shadow-lg p-4 mt-12 border-[1px] border-[#ddd]'>
            <h2 className='text-text-color font-bold text-lg mb-2'>Analytics</h2>
            <div className='flex flex-row flex-wrap gap-2 items-center text-text-color p- mb-8 mx-[auto]'>
                {
                    AnalyticsCardData.map((dataItem, index) => 
                        <div key={index} className='items-center text-text-color p-4 shadow-lg rounded mb-4 mx-[auto] '>
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

        <section className='mx-4 shadow-lg p-4 mt-12 border-[1px] border-[#ddd] overflow-x-scroll'>
        <table className='px-4 lg:w-full'>
            <thead className='text-theme-color bg-text-color  font-bold text-base lg:w-fit items-left justify-left px-4'>
                <tr> 
                    <TableHeaderCell headerText="S/N" />
                    <TableHeaderCell headerText="Product Name" />
                    <TableHeaderCell headerText="Category" />
                    <TableHeaderCell headerText="Sub Category" />
                    <TableHeaderCell headerText="Price Tag" />
                    <TableHeaderCell headerText="Quantity" />
                    <TableHeaderCell headerText="Status" />
                    {/* <TableHeaderCell headerText="Buyer" /> */}
                    {/* <TableHeaderCell headerText="Likes" /> */}
                </tr>
            </thead>
    
            <tbody>
                {
                    ProductsData.length > 0 ?
                    ProductsData.map((dataItem, index) => 
                    <TableRow key={index} 
                        no={index+1}
                        title ={dataItem.productName}
                        category={dataItem.category}
                        subcategory={dataItem.subcategory}
                        price={dataItem.productPriceTag}
                        quantity = {dataItem.productNoPieces}
                        status = {dataItem.soldStatus == true ? "Sold" : "Unsold" }
                        // likes={dataItem.likes}
                        // buyer = {}
                    />
                    ) : 
                    <TableRow 
                        no="nil"
                        title=""
                        category=""
                        subcategory=""
                        price=""
                        quantity = ""
                        status = ""
                        // likes={dataItem.likes}
                    />
                }
            </tbody>
        </table>
        </section>

        
    </div>
  )
}

export default DashboardMain