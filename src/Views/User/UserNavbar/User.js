import React, { useState } from 'react';
// import { Button } from './UseerButton';
import { Link ,useNavigate} from 'react-router-dom';
import './UserNavbar.css';
import logo from "./zero-waste.png"




const User = () => {
  const navigate = useNavigate()
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const logout = () =>{
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    // window.location.reload();
    navigate('/')

  }
  
  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };
  
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };
  
  return (
    <>
      <nav className='navbaru'>
        <Link to='/' className='navbar-logou' onClick={closeMobileMenu}>
          Z-wastE
          <img src={logo} style={{width:"40px"}} />
        </Link>
        <div className='menu-iconu' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menuu active' : 'nav-menuu'}>
          <li className='nav-itemu'>
            <Link to='/home' className='nav-linksu' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
         
          <li className='nav-itemu'>
            <Link
              to='/products'
              className='nav-linksu'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className='nav-itemu'>
            <Link
              to='/profile'
              className='nav-linksu'
              onClick={closeMobileMenu}
            >
              <i class="fa-solid fa-user"></i>
            </Link>
          </li>
          <li className='nav-itemu'>
           
              <button className='btn btn-primary nav-linksu' onClick={logout}>Logout</button>
            
          </li>
         
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
  }
  

export default User








