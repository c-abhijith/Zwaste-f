import React from 'react'

import AdminTopbarView from '../../Views/Admin/AdminTopbarView/AdminTopbarView'
import AdminSidebarview from '../../Views/Admin/AdminSidebarViews/AdminSidebarview'
import './AdminDashboard.css'
import AdminUsertable from '../../Pages/Admin/Userlist/AdminUsertable'



const AdminUser = () => {
  return (
    <div>
        <AdminTopbarView />
        <div className="containerdash">
  
            <AdminSidebarview/>
            <div className="otherdash">
              <AdminUsertable />
                
                
                
            </div>
        
        </div>

    </div>
  )
}

export default AdminUser