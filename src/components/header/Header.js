import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Brand() {
  return (
    <h2>
      <Link to="/">Test App</Link>
    </h2>
  );
}

function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  );
}

function Header() {
  return (
    <header className="Header">
      <nav>
        <Brand />
        <Navigation />
      </nav>
    </header>
  );
}

export default Header;
