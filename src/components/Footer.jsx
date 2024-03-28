// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="cole">
            <h5 className='about'>About Us</h5>
            <p className='pera'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat risus euismod tortor hendrerit, at finibus odio mattis.</p>
          </div>
          <div className="col">
            <h5>Links</h5>
            <ul className='title'>
              <li className='list'><a href="#home">Home</a></li>
              <li className='list'><a href="#about">About</a></li>
              <li className='list'><a href="#services">Services</a></li>
              <li className='list'><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>Contact Us</h5>
            <p className='mail'>Email: info@example.com</p>
            <p className='phone'>Phone: +123456789</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
