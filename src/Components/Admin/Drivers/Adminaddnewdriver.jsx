import React from 'react'
import '../AdminDashboard.css'
import AdminTopbarView from '../../../Views/Admin/AdminTopbarView/AdminTopbarView'
import AdminSidebarview from '../../../Views/Admin/AdminSidebarViews/AdminSidebarview'
import AdminnewDriver from "../../../Pages/Admin/AdminDriver/AddnewDriver"
const Adminaddnewdriver = () => {
  return (
    <div>
    <AdminTopbarView />
    <div className="containerdash">

        <AdminSidebarview/>
        <div className="otherdash">
            <AdminnewDriver/>
          
            
            
            
        </div>
    
    </div>

</div>
  )
}

export default Adminaddnewdriver