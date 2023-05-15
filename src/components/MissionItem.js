import React from 'react';
import PropTypes from 'prop-types';
// import styles from '../styles/Dragons.module.css';

function MissionItem({ itemProps }) {
  return (
    <tr>
      <td>{itemProps.name}</td>
      <td>{itemProps.description}</td>
      <td><button type="button">NOT A MEMBER</button></td>
      <td><button type="button">Join Mission</button></td>
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
  // handleChange: PropTypes.func.isRequired,
  // delTodo: PropTypes.func.isRequired,
  // setUpdate: PropTypes.func.isRequired,
}