import React from 'react';
import '../styles/NavBarStyle.css'
 function Nav() {


  return (    
    <div class="topnav">
    <a class="active" href="#home">Sean Allen</a>
   
    <div class="topnav-right">
      <a href="#project">Projects</a>
      <a href="#about">Contact</a>
      <a href="#search">Resume</a>
    </div>
  </div>
  );
}


export default Nav