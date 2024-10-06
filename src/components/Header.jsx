import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useTheme } from '../utils/ThemeContext';
import { SunIcon, MoonIcon } from './Icons';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevIsMobileMenuOpen => !prevIsMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    if (window.innerWidth <= 768) {
      setIsDropdownOpen(prevIsDropdownOpen => !prevIsDropdownOpen);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="home-link" onClick={closeMobileMenu}>
          <h1 className="full-name">Tyler Dodd</h1>
        </Link>
        <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeMobileMenu}>About</Link>
            </li>
            <li className={`interests-dropdown ${isDropdownOpen ? 'open' : ''}`}>
              <a
                href="#"
                className="nav-link"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Interests
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/interests/cooking" className="dropdown-item" onClick={closeMobileMenu}>Cooking</Link></li>
                <li><Link to="/interests/technology" className="dropdown-item" onClick={closeMobileMenu}>Technology</Link></li>
                <li><Link to="/interests/projects" className="dropdown-item" onClick={closeMobileMenu}>Projects</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</Link>
            </li>
            <li className="dark-mode-toggle">
              <button onClick={toggleTheme} aria-label="Toggle dark mode">
                {isDarkMode ? <MoonIcon /> : <SunIcon />}
              </button>
            </li>
          </ul>
        </nav>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;