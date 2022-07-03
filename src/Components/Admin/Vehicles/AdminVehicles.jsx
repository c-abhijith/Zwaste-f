import React from 'react'

import AdminTopbarView from '../../../Views/Admin/AdminTopbarView/AdminTopbarView'
import AdminSidebarview from '../../../Views/Admin/AdminSidebarViews/AdminSidebarview'
import '../AdminDashboard.css'
import AdminVehicleslist from '../../../Pages/Admin/AdminVehicles/AdminVehicleslist'




const AdminVehicles = () => {
    return (
        <div>
            <AdminTopbarView />
            <div className="containerdash">
      
                <AdminSidebarview/>
                <div className="otherdash">
                  <AdminVehicleslist/>
                    
                    
                    
                </div>
            
            </div>
    
        </div>
      )
    }
    
export default AdminVehicles




  
