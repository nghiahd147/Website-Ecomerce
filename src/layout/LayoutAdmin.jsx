import React from 'react'
import HeaderDashboard from "../components/Dashboards/HeaderDashboards"
import SidebarDashboard from '../components/Dashboards/SidebarDashboard'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
  
  return (
    <div className='bg-gradient-to-r from-yellow-200 to-violet-200 h-100 overflow-x-hidden overflow-y-auto'>
      {/* Header */}
      <HeaderDashboard />
      {/* Sidebar and Content */}
      <div className='flex'>
        <SidebarDashboard />
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutAdmin