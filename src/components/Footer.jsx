import React, { useState, useEffect } from 'react';
import '../styles/footer.css';

function Footer() {
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setIsFooterVisible(false);
      } else {
        setIsFooterVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <footer className={`footer ${isFooterVisible ? '' : 'footer-hidden'}`}>
      <div className="footer-content">
        <p>
          &copy; 2024 <span className="footer-name">Tyler M. Dodd</span> All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;