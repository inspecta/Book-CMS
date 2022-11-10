import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const activePage = ({ isActive }) => ({
    color: isActive ? 'black' : 'grey',
  });

  return (
    <header className="header flex white">
      <div className="nav flex white">
        <h1 className="color-1 white">Bookstore CMS</h1>
        <ul className="navlinks flex">
          <li>
            <NavLink to="/" end style={activePage}>BOOKS</NavLink>
          </li>
          <li>
            <NavLink to="/categories" style={activePage}>CATEGORIES</NavLink>
          </li>
        </ul>
      </div>
      <div className="profile-pic flex">
        <FaUser />
      </div>
    </header>
  );
};

export default Header;
