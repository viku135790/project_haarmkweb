import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom';
import { FaTimes, FaBars, FaGlobe } from "react-icons/fa";
import "./Navbar.css"

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <header className='nav-main-class-header'>
      <h3>HAARMK</h3>
      <nav ref={navRef}>
        <NavLink to="/">
          <a href="" className='nav-link-text'>Home</a>
        </NavLink>
        <NavLink to="/AboutUs">
          <a href="" className='nav-link-text'>About Us</a>
        </NavLink>
        <NavLink to="/AboutUs">
          <a href="" className='nav-link-text'>Services</a>
        </NavLink>
        <NavLink to="">
          <a href="" className='nav-link-text'>Portfolio</a>
        </NavLink>
        <NavLink to="">
          <a href="" className='nav-link-text'>Career</a>
        </NavLink>
        <NavLink to="">
          <a href="" className='nav-link-text'>Contact Us</a>
        </NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div className="account-icon">
        <div className='icon-image'>
          <FaGlobe />
        </div>
        <div className='Welcome-name'>Hello World</div>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}

export default Navbar