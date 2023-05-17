import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const Url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  isLoading: false,
  error: undefined,
};

export const getMissions = createAsyncThunk('missions/getMissions', async (thunkAPI) => {
  try {
    const resp = await axios(`${Url}`);
    const { data } = resp;
    return data.map((mission) => (
      {
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }
    ));
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const itemId = action.payload;
      state.missions = state.missions.map((mission) => {
        if (mission.id !== itemId) return mission;
        return { ...mission, reserved: true };
      });
    },
    leaveMission: (state, action) => {
      const itemId = action.payload;
      state.missions = state.missions.map((mission) => {
        if (mission.id !== itemId) return mission;
        return { ...mission, reserved: false };
      });
    },
  },
  extraReducers: (builder) => {
    // getDragons
    builder.addCase(getMissions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMissions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.missions = action.payload;
    });
    builder.addCase(getMissions.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
