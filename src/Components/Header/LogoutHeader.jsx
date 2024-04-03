import React, { useState } from 'react';
import HeaderLogo from './../../assets/images/logo-header.svg';
import MobileMenu from './../Mobilemenu.jsx';
import MenuIcon from './../../assets/images/menu.svg';
import CloseIcon from './../../assets/images/close.svg';
import './../../Components/css/HomePage.css';
import './../../Components/css/submenu.css';

function LogoutHeader({ isOpen, toggleMenu }) {
  return (
    <>
    

    <header className="header homepage">
            <div className="container">
                <div className="header-logo">
                    <a href="/" className="custom-logo-link" rel="home" aria-current="page">
                        <img width="160" height="50" src={HeaderLogo} className="custom-logo" alt="UNITrading" decoding="async" title="Homepage" />
                    </a>
                </div>

                <div className="header-menuWrapper header-desktop">
                    <div className="header-desktopMenu">
                        <ul id="menu-header" className="header-menu">
                            <li>
                                <a href="/#process">Process</a>
                            </li>
                            <li>
                                <a href="/#academy">Features</a>
                            </li>
                            <li>
                                <a href="/#packages">Packages</a>
                            </li>
                            <li>
                                <a href="/#testimonials">Testimonials</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="header-menuBtn">
                    <button className={`header-openBtn ${isOpen ? 'bg-blue-500' : ''}`} onClick={toggleMenu}>
                        <img src={isOpen ? CloseIcon : MenuIcon} alt="Navbar Icon" />
                    </button>
                </div>

                <div className="header-buttons">
                            <ul id="menu-um-nav" className="header-students">
                                <li id="menu-item-782" className="studentLogin__button menu-item menu-item-type-post_type menu-item-object-page menu-item-782">
                                    <a href="/login">Student Login</a>
                                </li>
                                <li id="menu-item-783" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-783">
                                    <a href="/#packages" aria-current="page">Buy Package</a>
                                </li>
                            </ul>
                        </div>

                {isOpen && <MobileMenu />}
            </div>
        </header>
    
    
    
    
    
    </>
  )
}

export default LogoutHeader