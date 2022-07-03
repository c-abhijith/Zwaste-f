import React,{useEffect} from 'react'
import User from '../../Views/User/UserNavbar/User'
import UserHomes from '../../Pages/User/UserHome/UserHomes'

const UserHome = () => {


  
  return (
    <div>
        <User/>
        <UserHomes/>
    </div>
  )
}

export default UserHome