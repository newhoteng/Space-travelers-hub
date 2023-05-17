import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDragons, reserveDragon } from '../redux/Dragons/DragonsSlice';
import styles from '../styles/Dragon.module.css';

const Dragons = () => {
  const dispatch = useDispatch();
  const { dragon } = useSelector((store) => store.dragon);
  const { isLoading } = useSelector((state) => state.dragon);

  useEffect(() => {
    if (isLoading === false) dispatch(getDragons());
  }, [dispatch, isLoading]);

  return (
    <div className={styles.dragonsContainer}>
      {isLoading
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
                {dragon.reserved && <span className="reserved">Reserved</span>}
                {dragon.description}
              </p>
              <button
                type="button"
                className={dragon.reserved ? styles.cancel : styles.reserve}
                onClick={() => dispatch(reserveDragon(dragon.id))}
              >
                {dragon.reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dragons;
