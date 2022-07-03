import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


import AdminDashboad from './Components/Admin/AdminDashboad';
import AdminDriver from './Components/Admin/Drivers/AdminDriver';
import AdminProducts from './Components/Admin/Products/AdminProducts';
import AdminUser from './Components/Admin/AdminUser';
import AdminVehicles from './Components/Admin/Vehicles/AdminVehicles';
import AdminWorker from './Components/Admin/Worker/AdminWorker';
import DriverHome from './Components/Driver/DriverHome';
import DriverUser from './Components/Driver/DriverUser';
import DriverUserprofie from './Components/Driver/DriverUserprofie';
import UserHome from './Components/User/UserHome';
import UserProducts from './Components/User/UserProducts';
import UserProfile from './Components/User/UserProfile';
import UserandAdminlogin from './Components/UserandAdminlogin';
import UserandAdminSignup from './Components/UserandAdminSignup';
import AdminAddProduct from './Components/Admin/Products/AdminAddProduct';
import AdminAddWorker from './Components/Admin/Worker/AdminAddWorker';
import AdminAddVehicles from './Components/Admin/Vehicles/AdminAddVehicles';
import AdminaddDrive from './Components/Admin/Drivers/AdminaddDrive';
import AdminOrderslist from './Components/Admin/Orders/AdminOrderslist';
import TodaysDuty from './Components/Admin/Dutys/TodaysDuty';
import Adminaddnewdriver from './Components/Admin/Drivers/Adminaddnewdriver';

import { useEffect } from 'react';

import { useState, createContext, useContext } from "react";

export const UserContext = createContext();



function App() {

  const [user, setUser] = useState(" ");
  
  return (
    <UserContext.Provider value={{user:user,setUser:setUser}}>
    <Router>
    
 
    <Routes> 


    <Route element={<UserandAdminlogin />} path="/" />
    <Route element={<UserandAdminSignup />} path="/signup" />
           
      {/* Driver */}

      <Route element={<DriverHome />} path="/driverhome" />
      <Route element={<DriverUser />} path="/driveruser" />
      <Route element={<DriverUserprofie />} path="/driveruserprofile" />


      {/* use */}
      <Route element={<UserHome />} path="/home" />
      <Route element={<UserProducts />} path="/products" />
      <Route element={<UserProfile />} path="/profile" />
      
      

      {/* Admin */}
      <Route element={<AdminDashboad />} path="/dash" />
      <Route element={<AdminUser />} path="/dashusers" />
      <Route element={<AdminProducts />} path="/dashproducts" />
      <Route element={<AdminWorker />} path="/dashworkers" />
      <Route element={<AdminVehicles/>} path="/dashvehicles" />
      <Route element={<AdminDriver/>} path="/dashdrivers" />
      <Route element={<AdminOrderslist/>} path="/dashorders" />
      <Route element={<TodaysDuty/>} path="/dashduty" />



      <Route element={<AdminAddProduct />} path="/dashaddproducts" />
      <Route element={<AdminAddWorker />} path="/dashaddworker" />
      <Route element={<AdminAddVehicles/>} path="/dashaddvehicles" />
      <Route element={<AdminaddDrive/>} path="/dashaddrivers" />
      <Route element={<Adminaddnewdriver/>} path="/dashaddnewdriver" />




      
    </Routes>

  </Router>
  </UserContext.Provider>
  );
}

export default App;




   
 
