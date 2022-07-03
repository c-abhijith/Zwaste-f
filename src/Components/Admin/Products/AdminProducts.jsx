import React from 'react'
import AdminTopbarView from '../../../Views/Admin/AdminTopbarView/AdminTopbarView'
import AdminSidebarview from '../../../Views/Admin/AdminSidebarViews/AdminSidebarview'
import '../AdminDashboard.css'
import AdminProductsTable from '../../../Pages/Admin/Productslist/AdminProductsTable'
import AdminAddProducts from '../../../Pages/Admin/Productslist/AdminAddProducts'


const AdminProducts = () => {
  return (
    <div>
        <AdminTopbarView />
        <div className="containerdash">
  
            <AdminSidebarview/>
            <div className="otherdash">
              {/* <AdminAddProducts/> */}
              <AdminProductsTable/>
                
                
                
            </div>
        
        </div>

    </div>
    
  )
}

export default AdminProducts



