import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import dragonReducer from './Dragons/DragonsSlice';

export const store = configureStore({
  reducer: {
    missions: missionsReducer,
    dragon: dragonReducer,
  },
});

export default store;
