import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/users";

/* ---------- SIGNUP ---------- */
export const signupUser = createAsyncThunk(
  "auth/signup",
  async (userData) => {
    const res = await axios.post(API_URL, userData);
    return res.data;
  }
);

/* ---------- LOGIN ---------- */
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password, role }) => {
    const res = await axios.get(
      `${API_URL}?email=${email}&password=${password}&role=${role}`
    );

    if (res.data.length === 0) {
      throw new Error("Invalid credentials");
    }

    return res.data[0];
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
