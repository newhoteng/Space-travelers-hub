import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets, reserveRocket } from '../redux/Rockets/RocketsSlice';

function Rockets() {
  const dispatch = useDispatch();
  const { rocket } = useSelector((state) => state.rocket);
  const { isLoading } = useSelector((state) => state.rocket);

  useEffect(() => {
    if (isLoading === false) dispatch(getRockets());
  }, [dispatch, isLoading]);

  return (
    <div className="rockets-container">
      {isLoading && rocket.map((rocket) => (
        <div key={rocket.id} className="container">
          <div className="article">
            <img src={rocket.image} alt={rocket.name} className="rocket-image" />
          </div>
          <div className="desc">
            <h2 className="rocket-title">{rocket.name}</h2>
            <p className="rocket-details">
              {rocket.reserved && <span className="reserved">Reserved</span>}
              {rocket.description}
            </p>
            <button
              type="button"
              className={rocket.reserved ? 'cancel' : 'reserve'}
              onClick={() => dispatch(reserveRocket(rocket.id))}
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
