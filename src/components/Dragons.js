import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDragons, reserveDragon } from '../redux/Dragons/DragonsSlice';
import styles from '../styles/Dragon.module.css';

const Dragons = () => {
  const dispatch = useDispatch();
  const { dragon, status } = useSelector((store) => store.dragon);

  const [reserved, setReserved] = useState(false);

  useEffect(() => {
    if (status === false) dispatch(getDragons());
  }, [dispatch, status]);

  const handleReserveDragon = (id) => {
    dispatch(reserveDragon(id));
    setReserved(!reserved);
  };

  return (
    <div className={styles.dragonsContainer}>
      {status
        && dragon.map((dragon) => (
          <div className={styles.container} key={dragon.id}>
            <div className="article">
              <img
                src={dragon.image}
                alt={dragon.name}
                className="dragon-image"
              />
            </div>
            <div className="desc">
              <h2 className="dragon-title">{dragon.name}</h2>
              <p className="dragon-details">
                {reserved && <span className="reserved">Reserved</span>}
                {dragon.description}
              </p>
              <button
                type="button"
                className={reserved ? styles.cancel : styles.reserve}
                onClick={() => handleReserveDragon(dragon.id)}
              >
                {reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dragons;
