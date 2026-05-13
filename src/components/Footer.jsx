// components/Footer.jsx
import React from 'react';
import img from "../assets/icon.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="nav-logo" style={{ textDecoration: 'none' }}>
            {/* <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '40px' }}>
              <circle cx="16" cy="14" r="7" fill="#2B3BFF"/>
              <rect x="20" y="18" width="10" height="32" rx="5" transform="rotate(-18 20 18)" fill="#2B3BFF"/>
            </svg> */}
            <img src={img} alt="icon" className='img-1'/>
            <span style={{ color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 800 }}>EXZASOFT</span>
            
          </a>
          <p>We build digital experiences that inspire, engage, and deliver measurable growth for businesses worldwide.</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/exzasoft3?igsh=NDJ0eDNlNW02dGw1" className="social-btn">In</a>
            <a href="www.linkedin.com/in/exzasoft-undefined-22520240a" className="social-btn">Ln</a>
            <a href="https://www.facebook.com/profile.php?id=61589406973603" className="social-btn">f</a>
            {/* <a href="#" className="social-btn"></a> */}
          </div>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
            <li><a href="#">WordPress</a></li>
            <li><a href="#">Shopify</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Work</a></li>
            <li><a href="#">Process</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="#">exzasoft3@gmail.com</a></li>
            <li><a href="#">+92 330 0237697</a></li>
            <li><a href="#">Karachi, Pakistan</a></li>
            <li><a href="#">Get a Quote</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 ExzaSoft. All rights reserved.</span>
        <span><a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a></span>
      </div>
    </footer>
  );
};

export default Footer;