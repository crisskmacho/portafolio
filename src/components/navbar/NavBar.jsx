import React from 'react'
import '../../index.css'

export default function NavBar() {
  return (
    <header className="header">
        <a href="#" className="logo">Cristian.<span className="animate" style={{'--i': 1}}></span></a>

        <div className="bx bx-menu" id="menu-icon"><span className="animate" style={{'--i': 2}}></span></div>

        <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>

            <span className="active-nav"></span>
            <span className="animate" style={{'--i': 2}}></span>
        </nav>
    </header>
  );
}
