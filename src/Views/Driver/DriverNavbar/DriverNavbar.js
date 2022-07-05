import React, { useEffect, useState,useContext } from 'react';

import { Link,useNavigate } from 'react-router-dom';
import './DriverNavbar.css';
import logo from "./zero-waste.png"
import {Dropdown,Card,NavDropdown} from "react-bootstrap"
import axios from '../../../axios';

import jwt_decode from "jwt-decode";
import {axiosInstance} from "../../../AxiosInstance/AxiosSetBaseUrl"
import {UserContext} from '../../../App'



const DriverNavbar = () => {
   const {user,setUser}= useContext(UserContext)
   console.log(user,"rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")



  const navigate = useNavigate()

  const [not,setNot]= useState();
  const [dir,setdir]= useState();
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const token=localStorage.getItem("accessToken")
  const decode = jwt_decode(token)
  
  
  
  
  const deletedata = async(event)=>{
    setdir(event)
     setUser(event)
    // console.log(user)
    console.log(event.userid.id,"----------55555555555555555-------------------------")
    try {
      // const {data}=await axios.delete(`user/wastefull/${event.userid.id}`)
      
    } catch (error) {
      console.log(error);
    }
  }
  
  
  
  
  const Notification = async()=>{
    try {
      const {data} = await axios.get(`user/wastefull`)
      setNot(data)
      console.log(data,"0000000000000000000000000000000000")
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    Notification()
  },[]);
  

  const Driverlogout = () =>{
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    
    
    navigate('/ ')

  }
  console.log(not,"3333333333333333333333")


  console.log(not,";;;;;;;;;;;;;;;;;;;;;")
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };
  
  return (
    <>
      <nav className='navbarp'>
        <Link to='/driverhome' className='navbar-logop font-weight-bold' onClick={closeMobileMenu}>
              Z-wastE
              <img src={logo} style={{width:"40px"}} />
        </Link>
              <div className='menu-iconp' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menup active' : 'nav-menup'}>
                <li className='nav-itemp'>
                  <Link to='/driverhome' className='nav-linksp' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
              
                <li className='nav-itemp'>
                  <Link
                    to='/driveruser'
                    className='nav-linksp'
                    onClick={closeMobileMenu}
                  >
                    Users
            </Link>
          </li>
          <li className='nav-itemp'>
            <Link
              to='/driveruserprofile'
              className='nav-linksp'
              onClick={closeMobileMenu}
             >
              Profile
            </Link>
          </li>
         
          <li className='nav-itemp'>
            
            <div className="nav-itemp">
              <button className='btn btn-primary' onClick={Driverlogout} >Logout</button>
            {/* </Link> */}
            </div>
          </li>
         
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
  }
  


export default DriverNavbar





  


