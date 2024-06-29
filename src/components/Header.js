import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={`header ${isActive ? 'active' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/"><img src="/okra-pa-revised-logo.png" alt="Logo" /></Link>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/plan">Plan</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

