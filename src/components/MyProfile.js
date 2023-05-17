import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Missions.module.css';

function MyProfile() {
  const { missions } = useSelector((store) => store.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved === true);

  const Rockets = useSelector((store) => store.rocket.rocket);
  const reservedRockets = Rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className={styles.tablesContainer}>
      <div className={styles.eachTable}>
        <p>My Missions</p>
        <table className={styles.profilePage}>
          <tbody>
            {reservedMissions.map((mission) => (
              <tr key={mission.id}>
                <td className={styles.profilePagetd}>{mission.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.eachTable}>
        <p>My Rockets</p>
        <table className={styles.profilePage}>
          <tbody>
            {reservedRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td className={styles.profilePagetd}>{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyProfile;
