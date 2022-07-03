import React from 'react'

import { Link } from "react-router-dom";
import "./AdminSidebarview.css"
import {useNavigate} from 'react-router-dom'


const AdminSidebarview = () => {
  const navigate = useNavigate()

  const adminlogout = () =>{
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    navigate('/')

  }
  return (
    <div className="sidebarside">
      <div className="sidebarWrapperside">
        <div className="sidebarMenuside">
          <h3 className="sidebarTitleside">Dashboard</h3>
                <ul className="sidebarListside">
                        <Link to="/dash" className="linkside">
                          <li className="sidebarListItemside">
                          {/* <LineStyle className="sidebarIconside" /> */}
                          Home
                          </li>
                        </Link>

                            {/* <li className="sidebarListItemside">
                            <Timeline className="sidebarIconside" />
                            Analytics
                            </li> */}

                        {/* <li className="sidebarListItemside">
                        < className="sidebarIconside" />
                        Sales
                        </li> */}
                        <Link to="/dashusers" className="linkside">
                        <li className="sidebarListItemside">
                            {/* <PermIdentity className="sidebarIconside" /> */}
                            Users
                        </li>
                        </Link>
                          {/* <Link to="/dashregdriver" className="linkside">
                          <li className="sidebarListItemside">
                              <PermIdentity className="sidebarIconside" />
                              Add Driver
                          </li>
                          </Link> */}
                </ul>
        </div>
        <div className="sidebarMenuside">
            <h3 className="sidebarTitleside">Quick Menu</h3>
                <ul className="sidebarListside">
                    <Link to="/dashproducts" className="linkside">
                    <li className="sidebarListItemside">
                        {/* <Storefront className="sidebarIconside" /> */}
                        Products
                    </li>
                    </Link>
                    <Link to="/dashworkers" className="linkside">
                         <li className="sidebarListItemside">
                         {/* <AttachMoney */}
                         {/* <Build className="sidebarIconside" /> */}
                         Workers
                        </li>
                    {/* <li className="sidebarListItemside">
                        <Storefront className="sidebarIconside" />
                        Products
                    </li> */}
                    </Link>
                    {/* <Link to="/dashdrivers" className="linkside">
                        <li className="sidebarListItemside">
                        <Commute className="sidebarIconside" />
                           Drivers
                        </li>

                    </Link> */}

                    <Link to="/dashvehicles" className="linkside">
                        <li className="sidebarListItemside">
                        {/* <Commute className="sidebarIconside" /> */}
                           Vehicles
                        </li>

                    </Link>

                </ul>
        </div>
        <div className="sidebarMenuside">
            <h3 className="sidebarTitleside">Driver Menu</h3>
                <ul className="sidebarListside">
                  
                    <Link to="/dashdrivers" className="linkside">
                        <li className="sidebarListItemside">
                        {/* <Commute className="sidebarIconside" /> */}
                           Drivers
                        </li>

                    </Link>
                   


                    

                </ul>
        </div>
        <div className="sidebarMenuside">
            <h3 className="sidebarTitleside">Payment Menu</h3>
                <ul className="sidebarListside">
                  
                    <Link to="/dashorders" className="linkside">
                        <li className="sidebarListItemside">
                        {/* <AttachMoney className="sidebarIconside" /> */}
                           Orders
                        </li>

                    </Link>


                    

                </ul>
        </div>
        <div className="sidebarMenuside">
            <h3 className="sidebarTitleside">Exit Menu</h3>
                <ul className="sidebarListside">
                  
                    <div  className="linkside">
                        <li onClick={adminlogout} className="sidebarListItemside">
                        
                           Logout
                        </li>

                    </div>


                    

                </ul>
        </div>
        {/* <div className="sidebarMenuside">
          <h3 className="sidebarTitleside">Notifications</h3>
          <ul className="sidebarListside">
            <li className="sidebarListItemside">
              <MailOutline className="sidebarIconside" />
              Mail
            </li>
            <li className="sidebarListItemside">
              <DynamicFeed className="sidebarIconside" />
              Feedback
            </li>
            <li className="sidebarListItemside">
              <ChatBubbleOutline className="sidebarIconside" />
              Messages
            </li>
          </ul>
        </div> */}
        {/* <div className="sidebarMenuside">
          <h3 className="sidebarTitleside">Staff</h3>
          <ul className="sidebarListside">
            <li className="sidebarListItemside">
              <WorkOutline className="sidebarIconside" />
              Manage
            </li>
            <li className="sidebarListItemside">
              <Timeline className="sidebarIconside" />
              Analytics
            </li>
            <li className="sidebarListItemside">
              <Report className="sidebarIconside" />
              Reports
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default AdminSidebarview