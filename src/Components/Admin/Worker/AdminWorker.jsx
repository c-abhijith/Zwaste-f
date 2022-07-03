import React from 'react'

import AdminTopbarView from '../../../Views/Admin/AdminTopbarView/AdminTopbarView'
import AdminSidebarview from '../../../Views/Admin/AdminSidebarViews/AdminSidebarview'
import '../AdminDashboard.css'
import AdminWorkerlist from '../../../Pages/Admin/AdminWorkerlist/AdminWorkerlist'


const AdminWorker = () => {
    return (
        <div>
            <AdminTopbarView />
            <div className="containerdash">
      
                <AdminSidebarview/>
                <div className="otherdash">
                    <AdminWorkerlist/>
                  
                    
                    
                    
                </div>
            
            </div>
    
        </div>
      )
    }

export default AdminWorker







 

