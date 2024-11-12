import React from 'react'

const NavBar = () => {
  return (
    <>
    <header class="header">
        <a href="#home" class="logo"> Mohamed <span>Bahgat</span> </a>

        <i class="bx bx-menu" id="menu-icon"></i>

        <nav class="navbar" id='menuList'>
            <a href="#home" class="active">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>  
    </>
  )
}

export default NavBar
