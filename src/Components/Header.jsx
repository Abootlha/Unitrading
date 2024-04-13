import React, { useState, useEffect } from 'react';
import HeaderLogo from './../assets/images/logo-header.svg';
import MobileMenu from './Mobilemenu'
import MenuIcon from './../assets/images/menu.svg'
import CloseIcon from './../assets/images/close.svg'
import './css/HomePage.css'
import './css/submenu.css'

function Header(isAuthenticated) {
    
    const [isOpen, setIsOpen] = useState(false);
    // const [authenticated, setAuthenticated] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        // Remove authentication status from browser storage
    
        localStorage.removeItem("isAuthenticated");

        console.log(true)
        window.location.href = '/';
    };

    return (
        <>
            <header className="header homepage">
                <div className="container">
                    <div className="header-logo">
                        <a href="/" className="custom-logo-link" rel="home" aria-current="page">
                            <img width="160" height="50" src={HeaderLogo} className="custom-logo" alt="UNITrading" decoding="async" title="Homepage" />
                        </a>
                    </div>

                    {/* Header Menu */}
                    <div className="header-menuWrapper header-desktop">
                        <div className="header-desktopMenu">
                            {/* Conditional rendering based on authentication status */}
                            {localStorage.getItem("isAuthenticated") ? (
                                // Authenticated user menu
                                <ul id="menu-header" className="header-menu">
                                    {/* Add authenticated user menu items here */}
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
                                            <li><a href="/advanced-guide-to-trading-ebook">Advanced Guide to Trading</a></li><br />
                                            <li><a href="/guide-to-cryptocurrencies-ebook">Guide to Cryptocurrencies</a></li><br />
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
                                    {/* Add more menu items as needed */}
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-62">
                                        <a aria-current="page">Account</a>
                                            <ul className="submenu">
                                                <li><a href="/">Profile</a></li><br />
                                                <li><a onClick={handleLogout}>Logout</a></li><br />
                                            </ul>
                                    </li>
                                </ul>
                            ) : (
                                // Non-authenticated user menu
                                <ul id="menu-header" className="header-menu">
                                    <li id="menu-item-60" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-60">
                                        <a href="/#process" aria-current="page">Process</a>
                                    </li>
                                    <li id="menu-item-61" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-61">
                                        <a href="/#academy" aria-current="page">Features</a>
                                    </li>
                                    <li id="menu-item-62" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-62">
                                        <a href="/#packages" aria-current="page">Packages</a>
                                    </li>
                                    <li id="menu-item-63" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-63">
                                        <a href="/#testimonials" aria-current="page">Testimonials</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* Header Buttons */}
                    {!localStorage.getItem("isAuthenticated") ? (
                        // Non-authenticated user buttons
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
                    ) : (
                        // Authenticated user buttons
                        <div className="header-buttons">
                            <ul id="menu-um-nav" className="header-students">
                                <li id="menu-item-782" className="studentArea__button menu-item menu-item-type-post_type menu-item-object-page menu-item-782">
                                    <a href="/courses">Student Area</a>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Mobile Menu Toggle Button */}
                    <div className="header-menuBtn">
                        <button className={`header-openBtn ${isOpen ? 'bg-blue-500' : ''}`} onClick={toggleMenu}>
                            <img src={isOpen ? CloseIcon : MenuIcon} alt="Navbar Icon" />
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && <MobileMenu />}
                </div>
            </header>
        
        </>
    )
}

export default Header;
