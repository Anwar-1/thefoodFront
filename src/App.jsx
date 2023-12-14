// App.js

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcom' // Update import
import Sport from './components/Sport';
import Dietitian from './pages/Dietitian';
import Show from './components/Show';
import Contact from './components/Contact';
import ColorChangeButton from './components/ColorChangeButton';

function App() {
  const users = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
       
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={users ? <Home /> : <Navigate to="/welcome" />} 
            />

            <Route 
              path="/welcome" 
              element={!users ? <Welcome /> : <Navigate to="/" />} 
            />

            <Route 
              path="/login" 
              element={!users ? <Login /> : <Navigate to="/" />} 
            />

            <Route 
              path="/signup" 
              element={!users ? <Signup /> : <Navigate to="/" />}  
            />
            
            <Route 
              path="/dietitian" 
              element={!users ? <Dietitian /> : <Navigate to="/" />}  
            />

            <Route path="/sport" element={<Sport />} />
            <Route path="/Show" element={<Show/>} />
            <Route path='/Contact' element={<Contact/>} />
          </Routes>
        </div>
    

        <ColorChangeButton />
      </BrowserRouter>
    </div>
  );
}

export default App;


 
  



 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 