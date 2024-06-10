import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaLinks from '../components/SocialMediaLinks';
import './Footer.css'; // Add styling as needed

const Footer = () => {
  return (
    <footer>
      <SocialMediaLinks /> {/* Render SocialMediaLinks component for social media icons */}

      <div className="footer-links">
        <Link to="/terms">Terms and Conditions</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/cookie">Cookie Policy</Link>
      </div>

    </footer>
  );
};

export default Footer;
