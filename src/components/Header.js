import { Outlet, NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import planet from '../Assets/planet.png';

function Header() {
  const navLinkStyles = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
  });

  return (
    <>
      <header className={styles.header}>
        <div>
          <img src={planet} alt="planet" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <nav>
          <ul className={styles.navigation}>
            <li><NavLink style={navLinkStyles} to="/">Rockets</NavLink></li>
            <li><NavLink style={navLinkStyles} to="/missions">Missions</NavLink></li>
            <li><NavLink style={navLinkStyles} to="/dragons">Dragons</NavLink></li>
            <li className={styles.item} />
            <li><NavLink style={navLinkStyles} to="/profile">My Profile</NavLink></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
