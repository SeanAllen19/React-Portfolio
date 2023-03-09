import React from 'react';

 function Nav() {


  return (
   <nav>
   
    <h1 className='d-flex w-5 text-warning bg-primary'>
     
        <ul className='d-flex flex-row justify-content-center align-items-center'>
          <li><a href='/About'>About</a></li>
          <li> Contact</li>
          <li> Project</li>
          <li> Resume</li>
        </ul>
      
    </h1>

  
    </nav>
  );
}


export default Nav