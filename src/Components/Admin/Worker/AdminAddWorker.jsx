import React from 'react'
import AdminTopbarView from '../../../Views/Admin/AdminTopbarView/AdminTopbarView'
import AdminSidebarview from '../../../Views/Admin/AdminSidebarViews/AdminSidebarview'
import '../AdminDashboard.css'
import AdminAddWorkers from '../../../Pages/Admin/AdminWorkerlist/AdminAddWorkers'


const AdminAddWorker = () => {
  return (
    <div>
    <AdminTopbarView />
    <div className="containerdash">

        <AdminSidebarview/>
        <div className="otherdash">
            <AdminAddWorkers/>
          
          
          
          
            
            
            
        </div>
    
    </div>

</div>
  )
}

export default AdminAddWorker






   
 


