import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header = () => (
  <header className="header flex">
    <div className="nav flex">
      <h1>Bookstore CMS</h1>
      <ul className="navlinks flex">
        <li>
          <NavLink to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </div>
    <div className="profile-pic flex">
      <FaUser />
    </div>
  </header>
);

export default Header;
