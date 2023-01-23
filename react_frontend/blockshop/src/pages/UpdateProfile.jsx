import React from 'react'
import DashboardLeftNav from '../components/dashboardcomponents/DashboardLeftNav'
import DashboardRightNav from '../components/dashboardcomponents/DashboardRightNav'
import Profile from '../components/Profile'

const UpdateProfile = () => {
  return (
    <div>
        <DashboardLeftNav/>
        <Profile/>
        <DashboardRightNav/>
    </div>
  )
}

export default UpdateProfile