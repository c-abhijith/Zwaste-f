import React from 'react'
import AdminTopbarView from '../../../Views/Admin/AdminTopbarView/AdminTopbarView'
import AdminSidebarview from '../../../Views/Admin/AdminSidebarViews/AdminSidebarview'
import '../AdminDashboard.css'

import AdminDriverlist from '../../../Pages/Admin/AdminDriver/AdminDriverlist'



const AdminDriver = () => {
    return (
        <div>
            <AdminTopbarView />
            <div className="containerdash">
      
                <AdminSidebarview/>
                <div className="otherdash">
                  <AdminDriverlist/>
                    
                    
                    
                </div>
            
            </div>
    
        </div>
        
      )
    }

export default AdminDriver



 





