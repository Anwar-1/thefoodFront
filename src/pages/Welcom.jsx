import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutForm from '../components/WorkoutForm'; // Adjust the import path

const Welcome = () => {

  const paragraphStyle = {
    textAlign: 'center',
    paddingTop: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
  };

  return (
    <>
    <div className="waviy-container"> 
        <div className="waviy">
          <span style={{ '--i': 1 }}>W</span>
          <span style={{ '--i': 2 }}>E</span>
          <span style={{ '--i': 3 }}>L</span>
          <span style={{ '--i': 4 }}>C</span>
          <span style={{ '--i': 5 }}>O</span>
          <span style={{ '--i': 6 }}>M</span>
          <span style={{ '--i': 7 }}>E</span>
          <span style={{ '--i': 8 }}>.</span>
          <span style={{ '--i': 9 }}>.</span>
          <span style={{ '--i': 10 }}>.</span>
        </div>
  </div>    
     

 <div>
  <p style={paragraphStyle}>
  A web page facilitates communication with a nutrition specialist to create a personalized dietary plan for each individual. Users can input the required information to receive their customized nutrition regimen, which may also include fitness exercises.
  </p>
 </div>
  <button> <Link   style={{ textDecoration: 'none' }}  to="/login">Login</Link></button>
  <button><Link   style={{ textDecoration: 'none' }} to="/signup">Signup</Link></button>   
  <button><Link   style={{ textDecoration: 'none' }} to="/dietitian">Dietitian</Link></button> 
  <button><Link   style={{ textDecoration: 'none' }} to="/Contact">Contact</Link></button>   


  
 

    
   
     
      
     
  
  
    </>
  );
};

export default Welcome;
