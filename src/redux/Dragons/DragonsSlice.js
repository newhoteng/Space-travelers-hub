import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/dragons';

const initialState = {
  dragon: [],
  isLoading: false,
};

export const getDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  const response = await axios.get(url);
  const dragon = response.data;
  return dragon.map((dragon) => ({
    id: dragon.id,
    name: dragon.name,
    description: dragon.description,
    image: dragon.flickr_images[0],
  }
  ));
});

const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const dragon = state.dragon.map((dragon) => {
        if (dragon.id === action.payload) return { ...dragon, reserved: !dragon.reserved };
        return dragon;
      });
      return { ...state, dragon };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDragons.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getDragons.fulfilled, (state, action) => ({
        ...state,
        dragon: action.payload,
      }));
  },
});

export const { reserveDragon } = dragonSlice.actions;
export default dragonSlice.reducer;
