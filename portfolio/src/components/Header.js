import React from "react";
import "../styles/HeaderStyle.css"

function Header() {
    return (
      <section class="hero">

    <div class="hero-content">
    
       <h1 class="hero-title">
           Hey there! I'm Sean
       </h1>
         
       <h2 class="hero-subtitle">
            Full Stack bootcamp graduate with a focus on the MERN stack 
       </h2>
         
       <button type="button" class="hero-button" onclick="location.href='resume.html'">
           RESUME HERE
       </button>
    
    </div>

</section>
    );
  }
  
  export default Header;