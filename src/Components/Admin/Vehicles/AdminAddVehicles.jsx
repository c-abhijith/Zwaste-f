import React from 'react'
import AdminTopbarView from '../../../Views/Admin/AdminTopbarView/AdminTopbarView'
import AdminSidebarview from '../../../Views/Admin/AdminSidebarViews/AdminSidebarview'
import '../AdminDashboard.css'
import AdminAddVehicle from '../../../Pages/Admin/AdminVehicles/AdminAddVehicle'



const AdminAddVehicles = () => {
  return (
    <div>
        <AdminTopbarView />
        <div className="containerdash">
  
            <AdminSidebarview/>
            <div className="otherdash">
                scdhj
                <AdminAddVehicle/>
              
              
              
              
                
                
                
            </div>
        
        </div>

    </div>
  )
}

export default AdminAddVehicles


    

