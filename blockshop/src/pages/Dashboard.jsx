import React from 'react'
import DashboardLeftNav from '../components/dashboardcomponents/DashboardLeftNav'
import DashboardMain from '../components/dashboardcomponents/DashboardMain'
import DashboardRightNav from '../components/dashboardcomponents/DashboardRightNav'

const Dashboard = () => {
  return (
    <div className='flex flex-row gap-4 justify-between p-4 mt-24'>
        <DashboardLeftNav/>
        <div className='flex flex-col lg:flex-row lg:justify-between w-full px-4 gap-4'>
          <DashboardMain/>
          <DashboardRightNav/>
        </div>
    </div>
  )
}

export default Dashboard