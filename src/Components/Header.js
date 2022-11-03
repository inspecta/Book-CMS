import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header = () => (
  <header className="header">
    <h1>Bookstore CMS</h1>
    <ul className="nav">
      <li>
        <NavLink to="/">BOOKS</NavLink>
      </li>
      <li>
        <NavLink to="/categories">CATEGORIES</NavLink>
      </li>
    </ul>
    <div className="profile-pic">
      <FaUser />
    </div>
  </header>
);

export default Header;
