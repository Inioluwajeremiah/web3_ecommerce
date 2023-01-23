import React from 'react'
import DashboardLeftNav from '../components/dashboardcomponents/DashboardLeftNav'
import DashboardMain from '../components/dashboardcomponents/DashboardMain'
import DashboardRightNav from '../components/dashboardcomponents/DashboardRightNav'

const Dashboard = () => {
  return (
    <div>
        <DashboardLeftNav/>
        <DashboardMain/>
        <DashboardRightNav/>
    </div>
  )
}

export default Dashboard