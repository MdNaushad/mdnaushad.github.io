import React from 'react';
import {Link} from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="brand"><Link to="/">Md Naushad</Link></div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="https://www.linkedin.com/in/mdnaushad15/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/personal">Personal</Link></li>
        </ul>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
