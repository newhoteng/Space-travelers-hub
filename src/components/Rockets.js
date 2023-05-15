import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets, reserveRocket } from '../redux/Rockets/RocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rocket, status } = useSelector((store) => store.rocket);

  const [reserved, setReserved] = useState(false);

  useEffect(() => {
    if (status === false) dispatch(getRockets());
  }, [dispatch, status]);

  const handleReserveRocket = (id) => {
    dispatch(reserveRocket(id));
    setReserved(!reserved);
  };

  return (
    <div className="rockets-container">
      {status && rocket.map((rocket) => (
        <div className="container" key={rocket.id}>
          <div className="article">
            <img src={rocket.image} alt={rocket.name} className="rocket-image" />
          </div>
          <div className="desc">
            <h2 className="rocket-title">{rocket.name}</h2>
            <p className="rocket-details">
              {reserved && <span className="reserved">Reserved</span>}
              {rocket.description}
            </p>
            <button
              type="button"
              className={reserved ? 'cancel' : 'reserve'}
              onClick={() => handleReserveRocket(rocket.id)}
            >
              {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
