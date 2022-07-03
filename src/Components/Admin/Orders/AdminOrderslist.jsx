import React from 'react'
import AdminTopbarView from '../../../Views/Admin/AdminTopbarView/AdminTopbarView'
import AdminSidebarview from '../../../Views/Admin/AdminSidebarViews/AdminSidebarview'
import '../AdminDashboard.css'
import Oderslist from '../../../Pages/Admin/Oders/Oderslist'


const AdminOrderslist = () => {
  return (
    <div>
        <AdminTopbarView />
        <div className="containerdash">
  
            <AdminSidebarview/>
            <div className="otherdash">
              <Oderslist/>
              
            
                
                
                
            </div>
        
        </div>

    </div>
  )
}

export default AdminOrderslist









