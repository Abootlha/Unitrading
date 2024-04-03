import React, { useState } from 'react';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`header-mobileMenu header-links ${isOpen ? 'opened' : ''}`}>
      <ul id="menu-um-nav-1" className="header-students">
        <li className="studentLogin__button menu-item menu-item-type-post_type menu-item-object-page menu-item-782">
          <a href="https://unitrading.io/login/">Student Login</a>
        </li>
        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-783">
          <a href="/#packages" aria-current="page">Buy Package</a>
        </li>
      </ul>
      <ul id="menu-header-1" className="header-menu">
        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-60">
          <a href="/#process" aria-current="page">Process</a>
        </li>
        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-61">
          <a href="/#academy" aria-current="page">Features</a>
        </li>
        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-62">
          <a href="/#packages" aria-current="page">Packages</a>
        </li>
        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-63">
          <a href="/#testimonials" aria-current="page">Testimonials</a>
        </li>
      </ul>
      {/* Toggle button */}
      <button onClick={toggleMenu}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
    </div>
  );
}

export default MobileMenu;
