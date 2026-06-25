import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';
import logoImage from "../../assets/logo-tailor.png"
import hamburgerImage from "../../assets/hamburger.png";

const Navbar = ({ logo, hamburger }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <>
      <nav  className={`navbar 
    ${scrolled ? "navbar-scrolled" : ""}
    ${isOpen ? "navbar-hidden" : ""}
  `}>
        <div className="logo">
          <img src={logoImage} alt="Logo" />
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Service</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>

        <div className="nav-actions">
          <button className="talk-btn">Let's Talk</button>
          <button className="menu-btn" onClick={toggleSidebar} aria-label="Open menu">
            <img src={hamburgerImage} alt="Menu" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={closeSidebar} />
      
      <aside ref={sidebarRef} className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <img src={logoImage} alt="Logo" />
          </div>
          <button className="close-btn" onClick={closeSidebar} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <ul className="sidebar-links">
          <li onClick={closeSidebar}>Home</li>
          <li onClick={closeSidebar}>About Us</li>
          <li onClick={closeSidebar}>Service</li>
          <li onClick={closeSidebar}>Pages</li>
          <li onClick={closeSidebar}>Contact</li>
        </ul>

        <div className="sidebar-footer">
          <button className="talk-btn" onClick={closeSidebar}>Let's Talk</button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;