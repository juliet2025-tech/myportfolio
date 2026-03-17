import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      

 <div className="logo">
        <img src="/logo102.png" alt="Logo" />
        <span>Jules Web Studio</span>
      </div>

      <ul className="nav-links">
        <li><a href="#Hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#certifications">Certification</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;