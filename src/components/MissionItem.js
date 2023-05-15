import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Missions.module.css';

function MissionItem({ itemProps }) {
  return (
    <tr className={styles.tablerow}>
      <td>{itemProps.name}</td>
      <td>{itemProps.description}</td>
      <td><button className={styles.member} type="button">NOT A MEMBER</button></td>
      <td><button className={styles.join} type="button">Join Mission</button></td>
    </tr>
  );
}

export default MissionItem;

MissionItem.propTypes = {
  itemProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
