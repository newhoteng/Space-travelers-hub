import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import dragonReducer from './Dragons/DragonsSlice';
import rocketReducer from './Rockets/RocketsSlice';

export const store = configureStore({
  reducer: {
    missions: missionsReducer,
    dragon: dragonReducer,
    rocket: rocketReducer,
  },
});

export default store;
