import React from 'react';
import Logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import Serach from './Serach';



const Sport = () => {
  return (
   <>
   <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>

    <Serach/>
   
   </>
  )
}

export default Sport