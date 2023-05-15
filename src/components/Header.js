import styles from '../styles/Header.module.css';
import planet from '../Assets/planet.png';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={planet} alt="planet" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <nav>
        <ul className={styles.navigation}>
          <li>Rockets</li>
          <li>Missions</li>
          <li className={styles.item} />
          <li>My Profile</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
