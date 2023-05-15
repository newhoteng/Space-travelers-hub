import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './dragons/dragonsSlice';
import missionsReducer from './missions/missionsSlice';

export const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    missions: missionsReducer,
  },
});

export default store;
