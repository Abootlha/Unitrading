import React, { useState } from 'react';
import MobileMenu from './../Mobilemenu.jsx';
import MenuIcon from './../../assets/images/menu.svg';
import CloseIcon from './../../assets/images/close.svg';
import './../../Components/css/HomePage.css';
import './../../Components/css/submenu.css';
import HeaderLogo from './../../assets/images/logo-header.svg';


function AuthenticatedHeader({ isOpen, toggleMenu }) {
    return (
        <header className="header homepage">
        <div className="container">
            {/* Header Logo */}
            <div className="header-logo">
                <a href="/" className="custom-logo-link" rel="home" aria-current="page">
                    <img width="160" height="50" src={HeaderLogo} className="custom-logo" alt="UNITrading" decoding="async" title="Homepage" />
                </a>
            </div>

            {/* Desktop Menu */}
            <div className="header-menuWrapper header-desktop">
                <div className="header-desktopMenu">
                    <ul id="menu-header" className="header-menu">
                        {/* Menu items for authenticated users */}
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-62">
                            <a aria-current="page">Video Courses</a>
                            <ul className="submenu">
                                <li><a href="/">Trading Essentials</a></li><br />
                                <li><a href="/">Technical Trading</a></li><br />
                                <li><a href="/">Strategic Trading</a></li><br />
                                <li><a href="/">MetaTrader 4</a></li><br />
                                <li><a href="/">MetaTrader 5</a></li><br />
                                <li><a href="/">MetaTrader 5 Mobile</a></li><br />
                                {/* Add more courses as needed */}
                            </ul>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-62">
                            <a aria-current="page">eBooks</a>
                            <ul className="submenu">
                                <li><a href="/beginners-guide-to-trading-ebook">Beginner's Guide to Trading</a></li><br />
                                <li><a href="/">Advanced Guide to Trading</a></li><br />
                                <li><a href="/">Guide to Cryptocurrencies</a></li><br />
                                {/* Add more eBooks as needed */}
                            </ul>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-62">
                            <a aria-current="page">Market Research</a>
                            <ul className="submenu">
                                <li><a href="/Market-videos">Market Research Videos</a></li><br />
                                <li><a href="/Technical-Analysis-article">Technical Analysis Articles</a></li><br />
                                <li><a href="/Market-news">Market News</a></li><br />
                                <li><a href="/Market-signal">Market Signals</a></li><br />
                                <li><a href="/Economic-calendar">Economic Calendar</a></li><br />
                                <li><a href="/Crypto-calendar">Cryptocurrency Calendar</a></li><br />
                                {/* Add more research options as needed */}
                            </ul>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-62">
                            <a aria-current="page">Account</a>
                            <ul className="submenu">
                                <li><a href="/">Profile</a></li><br />
                                <li><a href="/">Logout</a></li><br />
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Menu Buttons */}
            <div className="header-menuBtn">
                    <button className={`header-openBtn ${isOpen ? 'bg-blue-500' : ''}`} onClick={toggleMenu}>
                        <img src={isOpen ? CloseIcon : MenuIcon} alt="Navbar Icon" />
                    </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && <MobileMenu />}

            <div className="header-buttons">
                            <ul id="menu-um-nav" className="header-students">
                            <li id="menu-item-782" className="studentArea__button menu-item menu-item-type-post_type menu-item-object-page menu-item-782">
                                <a href="/courses">Student Area</a>
                                </li>  
                            </ul>
                        </div>
        </div>
    </header>
    );
}

export default AuthenticatedHeader;
