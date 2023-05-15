import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission } from '../redux/missions/missionsSlice';
import styles from '../styles/Missions.module.css';

function MissionItem({ itemProps }) {
  const dispatch = useDispatch();
  return (
    <tr className={styles.tablerow}>
      <td>{itemProps.name}</td>
      <td>{itemProps.description}</td>
      <td>
        {!itemProps.reserved && (
          <button className={`${styles.nonMember} ${styles.status}`} type="button">NOT A MEMBER</button>
        )}
        {itemProps.reserved && (
          <button className={`${styles.member} ${styles.status}`} type="button">Active Member</button>
        )}
      </td>
      <td>
        {!itemProps.reserved && (
          <button
            className={`${styles.join} ${styles.joinLeave}`}
            type="button"
            onClick={() => { dispatch(joinMission(itemProps.id)); }}
          >
            Join Mission
          </button>
        )}
        {itemProps.reserved && (
          <button className={`${styles.leave} ${styles.joinLeave}`} type="button">Leave Mission</button>
        )}
      </td>
    </tr>
  );
}

export default MissionItem;

MissionItem.propTypes = {
  itemProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};
