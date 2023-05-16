import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  dragon: [],
  status: false,
  error: null,
};

export const getDragons = createAsyncThunk('dragons, getDragons', async () => {
  try {
    const response = await axios.get(url);
    const dragonData = response.data;
    return dragonData.map((dragon) => ({
      id: dragon.id,
      name: dragon.name,
      description: dragon.description,
      image: dragon.flickr_images[0],
    }));
  } catch (error) {
    return isRejectedWithValue(error);
  }
});

const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const dragons = state.dragon.map((dragon) => {
        if (dragon.id === action.payload) return { ...dragon, reserved: !dragon.reserved };
        return dragon;
      });
      return { ...state, dragons };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDragons.pending, (state) => ({
        ...state,
        status: true,
      }))
      .addCase(getDragons.fulfilled, (state, action) => ({
        ...state,
        dragon: action.payload,
      }));
  },
});

export const { reserveDragon } = dragonSlice.actions;
export default dragonSlice.reducer;
