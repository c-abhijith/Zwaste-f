
import React from 'react'
import AdminTopbarView from '../../../Views/Admin/AdminTopbarView/AdminTopbarView'
import AdminSidebarview from '../../../Views/Admin/AdminSidebarViews/AdminSidebarview'
import '../AdminDashboard.css'
import AdminAddProducts from '../../../Pages/Admin/Productslist/AdminAddProducts'



const AdminAddProduct = () => {
  return (
    <div>
        <AdminTopbarView />
        <div className="containerdash">
  
            <AdminSidebarview/>
            <div className="otherdash">
              <AdminAddProducts/>
              
              
              
                
                
                
            </div>
        
        </div>

    </div>
  )
}

export default AdminAddProduct




