import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';
import MissionItem from './MissionItem';

function Missions() {
  const { missions, isLoading, error } = useSelector((store) => store.missions);
  // console.log(missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  if (isLoading) {
    return (
      <ul>
        <h1>Loading...</h1>
      </ul>
    );
  }
  if (error) {
    return (
      <ul>
        <h1>Something went wrong</h1>
      </ul>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Blank</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <MissionItem
            key={mission.id}
            itemProps={mission}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Missions;
