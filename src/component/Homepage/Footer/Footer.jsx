import React from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon
import { Link } from "react-router-dom"; // Import Link component
import "./Footer.css"; // Assuming you store CSS styles separately

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-logo">
          <h1 className="logo">
            Catalyst<span style={{ color: "var(--bright-green)" }}>ion</span>
          </h1>
          <p className="footer-tagline">Empowering Businesses with Expertise</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="footer-list">
            <li>
              <Link to="/about" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="footer-link">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer-terms">
          <h2 className="footer-heading">Legal</h2>
          <ul className="footer-list">
            <li>
              <Link to="/terms" className="footer-link">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="footer-link">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h2 className="footer-heading">Follow Us</h2>
          <ul className="footer-social-list">
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FaLinkedin /> {/* LinkedIn Icon */}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 Catalystion. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
