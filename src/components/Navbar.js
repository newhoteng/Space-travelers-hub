/* eslint-disable import/no-extraneous-dependencies */

import './Navbar.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        Logo
      </Link>
      <ul>
        <CustomLink to="/rockets">Rockets</CustomLink>
        <CustomLink to="/missions">Missions</CustomLink>
        <span>|</span>
        <CustomLink to="/my-profile">My Profile</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>
        {children}
      </Link>
    </li>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Navbar;
