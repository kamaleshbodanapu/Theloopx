import React from 'react'
import './NavBar.css'


const NavBar = () => {
  return (
    <nav className='top-nav-bar'>
        <div className='nav-logo'>
            <ul>
                <li className='nav-lists'>LEARN DOT NET HOME</li>
            </ul>
      
      </div>
      <div className='nav-items-right'>
        <ul className='nav-list'>
            <button className='butt'><li className='nav-lists'>Home</li> </button>
          <button className='butt'>  <li className='nav-lists'>About</li></button>
          <button className='butt'><li className='nav-lists'>Contact</li></button>
          <button className='butt'> <li className='nav-lists'>Contact</li></button>
          <button className='butt'><li className='nav-lists'>Login</li></button>
          <button className='butt'> <li className='nav-lists'>Email</li></button>
            
            
        </ul>
      </div>
      <div>
        
      </div>
    </nav>
  )
}

export default NavBar;
