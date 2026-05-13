// components/Navbar.jsx
import React from 'react';
import img from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav id="navbar">
      <a href="#" className="nav-logo">
        {/* <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="14" r="7" fill="#2B3BFF"/>
          <rect x="20" y="18" width="10" height="32" rx="5" transform="rotate(-18 20 18)" fill="#2B3BFF"/>
        </svg> */}
        {/* <span>EXZASOFT</span> */}
        <img src={img} alt="logo" className='logo-img' />
      </a>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#portfolio">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Get a Quote →</a>
    </nav>
  );
};

export default Navbar;