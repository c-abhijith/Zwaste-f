import React from 'react'
import AdminTopbarView from '../../../Views/Admin/AdminTopbarView/AdminTopbarView'
import AdminSidebarview from '../../../Views/Admin/AdminSidebarViews/AdminSidebarview'
import '../AdminDashboard.css'
import AdminAddUser from '../../../Pages/Admin/AdminDriver/AdminAddUser'



const AdminaddDrive = () => {
  return (
    
    <div>
    <AdminTopbarView />
    <div className="containerdash">

        <AdminSidebarview/>
        <div className="otherdash">
            <AdminAddUser/>
          
            
            
            
        </div>
    
    </div>

</div>
  )
}

export default AdminaddDrive



  

