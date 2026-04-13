import React, { useState } from 'react';
import "../styles/navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Link to="/" className="logo">Dahlia Mihalic - Data Visualization</Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/current-works">Working On</Link></li>
        <li><Link to="/past-projects">Past Projects</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><a href="https://www.linkedin.com/in/olivia-mihalic-7741402b3/" target="_blank">LinkedIN</a></li>
        <li><a href="mailto:olivia0mihalic@outlook.com">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;