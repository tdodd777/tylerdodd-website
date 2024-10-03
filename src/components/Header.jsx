import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useTheme } from '../utils/ThemeContext';
import { SunIcon, MoonIcon } from './Icons';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const { isDarkMode, toggleTheme } = useTheme();

  const openDropdown = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 500);
  };

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="home-link">
          <h1 className="full-name">Tyler Dodd</h1>
        </Link>
        <nav className="main-nav">
          <ul>
            <li 
              className="interests-dropdown" 
              ref={dropdownRef}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <a
                href="#"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Interests
              </a>
              <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <Link to="/interests/cooking" className="dropdown-item">Cooking</Link>
                <Link to="/interests/technology" className="dropdown-item">Technology</Link>
                <Link to="/interests/projects" className="dropdown-item">Projects</Link>
              </div>
            </li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
            <li className="dark-mode-toggle">
              <button onClick={toggleTheme} aria-label="Toggle dark mode">
                {isDarkMode ? <SunIcon /> : <MoonIcon />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;