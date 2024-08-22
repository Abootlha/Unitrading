import React, { useState } from 'react';
import logo from './../assets/images/logo-header.svg';
import Headeritem from './Headeritem';
import MenuIcon from './../assets/images/menu.svg'; // Import the Menu icon
import CloseIcon from './../assets/images/close.svg';
import { Link } from 'react-router-dom';
import './css/button.css'
import './css/menu-content.css'

function Header() {
  const menu = [
    { name: 'Process', link: '/process' },
    { name: 'Features', link: '/features' },
    { name: 'Packages', link: '/packages' },
    { name: 'Testimonials', link: '/testimonials' }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showButtons, setShowButtons] = useState(false);



  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowMenu(!showButtons);
    setIsOpen(!isOpen);
  };

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

// style //

  const headerStyle = {
    backgroundColor: '#fff',
    color: '#fff',
    padding: '20px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const logoStyle = {
    width: '190px',
    marginLeft: '100px',
    // marginTop: '20px'
  };

  const logostyles = {
    width: '190px',
    marginLeft: '100px',
    
  };

  const menuIconStyle = {
    fontSize: '24px',
    cursor: 'pointer',
  };

/////

  return (
    <div style={headerStyle}>
      {/* Logo */}

      <div className='logo'>
      <img src={logo} alt="Logo" style={logoStyle} />
      </div>

      {/* Navbar Icon */}
      <div style={{ marginLeft: 'auto' }}>
        
        {/* <img src={""} onClick={toggleMenu} alt="menu-icon" style={menuIconStyle} /> */}
        
      </div>

      {/* Header Menu */}
      <ul style={{ listStyle: 'none', display: 'flex', marginRight: '20px' }}>
        {menu.map((item, index) => (
          <li key={index} style={{ marginRight: '20px' }}>
            <Headeritem name={item.name} />
          </li>
        ))}
      </ul>

    <div className="flex">
      <button className="custom-button-primary">STUDENT LOGIN</button>
      <button className="custom-button-secondary">BUY PACKAGE</button>
    </div>
    
    <div className="flex">
      <button className={`custom-icon ${isOpen ? 'bg-blue-500' : ''}`} onClick={toggleMenu}>
        <img src={isOpen ? CloseIcon : MenuIcon} alt="Navbar Icon" />
      </button>
    </div>

    

    </div>
  );
}

export default Header;
