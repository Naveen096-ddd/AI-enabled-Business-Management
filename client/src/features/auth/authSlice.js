import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api, setAuthToken } from "../../apis/Api";

const tokenFromStorage = localStorage.getItem("token");

const initialState = {
  user: null,
  role: null,
  token: tokenFromStorage || null,
  isLoading: false,
  isError: false,
  message: "",
};

// Async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post("/login/", credentials);
      const { token, user, role } = response.data;

      // Set token in axios headers & localStorage
      setAuthToken(token);
      localStorage.setItem("token", token);

      return { token, user, role };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.token = null;
      localStorage.removeItem("token");
      setAuthToken(null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.role = action.payload.role;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { Logout } = authSlice.actions;
export default authSlice.reducer;
