import React from 'react'

import AdminTopbarView from '../../Views/Admin/AdminTopbarView/AdminTopbarView'
import AdminSidebarview from '../../Views/Admin/AdminSidebarViews/AdminSidebarview'
import './AdminDashboard.css'
import Dashboard from '../../Pages/Admin/Dashboard/Dashboard'
import AdminCharts from '../../Pages/Admin/AdminCharts/AdminCharts'


const AdminDashboad = () => {
  return (
    <div>
        <AdminTopbarView />
        <div className="containerdash">
  
            <AdminSidebarview/>
            <div className="otherdash">
                {/* <Dashboard /> */}
                <AdminCharts/>
                
            </div>
        
        </div>

    </div>
  )
}

export default AdminDashboad