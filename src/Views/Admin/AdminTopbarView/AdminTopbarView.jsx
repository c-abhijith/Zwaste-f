import React from 'react'
import "./AdminTopbarView.css"




const AdminTopbarView = () => {
  return (
      <div className="topbarview">
          <div className="topbarWrapperview">
              <div className="topLeftview">
                  <spam className="logoview">Z-WastE</spam>
              </div>
              <div className="topRightview">
                  <div className="topbarIconContainerview">
                      {/* <NotificationsNone /> */}
                      <spam className="topIconBadgeview">2</spam>
                  </div>
                  <div className="topbarIconContainerview">
                      {/* <Language /> */}
                      <spam className="topIconBadgeview">2</spam>
                  </div>
                  <div className="topbarIconContainerview">
                      {/* <Settings /> */}
                      
                  </div>
                  <img src="" alt="" className="topAvatar" />
              </div>
          </div>
      </div>
  )
}

export default AdminTopbarView