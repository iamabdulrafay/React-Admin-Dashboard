import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state for the user slice
const initialState = {
  user: [],
  loading: "idle",
  error: null,
};

// Define the asynchronous thunk to fetch user data
export const apiFetching = createAsyncThunk(
  "user/fetchByIdStatus",
  async (url, thunkAPI) => {
    try {
      const { data } = await axios(url);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  }
);

// Create a user slice with extra reducers for handling the async thunk
export const userSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(apiFetching.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(apiFetching.fulfilled, (state, action) => {
        state.loading = "idle";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(apiFetching.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.payload;
      });
  },
});

// Export the reducer
export const reducer = userSlice.reducer;
