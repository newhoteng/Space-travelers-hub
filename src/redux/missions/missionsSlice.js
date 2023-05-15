import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  isLoading: false,
  error: undefined,
  reservedMission: [],
};

export const getMissions = createAsyncThunk('missions/getMissions', async (name, thunkAPI) => {
  try {
    const resp = await axios(`${baseUrl}`);
    const { data } = resp;
    const neededData = [];
    data.forEach((element) => {
      const missionObj = {
        id: element.mission_id,
        name: element.mission_name,
        description: element.description,
        reserved: false,
      };
      neededData.push(missionObj);
    });
    return neededData;
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
    // leaveMission: (state, action) => {

    // }
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

export const { joinMission } = missionsSlice.actions;
export default missionsSlice.reducer;
