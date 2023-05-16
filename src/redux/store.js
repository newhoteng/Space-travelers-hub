import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import rocketReducer from './Rockets/RocketsSlice';

export const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rocket: rocketReducer,
  },
});

export default store;
