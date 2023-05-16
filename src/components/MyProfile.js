import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Missions.module.css';

function MyProfile() {
  const { missions } = useSelector((store) => store.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <div className={styles.tablesContainer}>
      <div className={styles.eachTable}>
        <p>My Missions</p>
        <table className={styles.profilePage}>
          {reservedMissions.map((mission) => (
            <tr key={mission.id}>
              <td className={styles.profilePagetd}>{mission.name}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default MyProfile;
