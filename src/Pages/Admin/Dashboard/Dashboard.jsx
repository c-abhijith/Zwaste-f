import React from 'react'
import "./Dashboard.css"
// import { ArrowDownward, ArrowUpward } from "@material-ui/icons";


const Dashboard = () => {
  return (
                <div className="featureddash">
                <div className="featuredItemdash">
                <span className="featuredTitledash">Revanue</span>
                <div className="featuredMoneyContainerdash">
                    <span className="featuredMoneydash">$2,415</span>
                    <span className="featuredMoneyRatedash">
                    {/* -11.4 <ArrowDownward  className="featuredIcon negativedash"/> */}
                    </span>
                </div>
                <span className="featuredSubdash">Compared to last month</span>
                </div>
                <div className="featuredItemdash">
                <span className="featuredTitledash">Sales</span>
                <div className="featuredMoneyContainerdash">
                    <span className="featuredMoneydash">$4,415</span>
                    <span className="featuredMoneyRatedash">
                    {/* -1.4 <ArrowDownward className="featuredIcon negativedash"/> */}
                    </span>
                </div>
                <span className="featuredSubdash">Compared to last month</span>
                </div>
                <div className="featuredItemdash">
                <span className="featuredTitledash">Cost</span>
                <div className="featuredMoneyContainerdash">
                    <span className="featuredMoneydash">$2,225</span>
                    <span className="featuredMoneyRatedash">
                    {/* +2.4 <ArrowUpward className="featuredIcondash"/> */}
                    </span>
                </div>
                <span className="featuredSubdashx">Compared to last month</span>
                </div>
                
            </div>
  )
}

export default Dashboard