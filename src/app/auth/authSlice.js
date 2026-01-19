import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,        // 🔥 do NOT read localStorage here
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart(state) {
      state.loading = true;
      state.error = null;
    },

    authSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    authFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    logout() {
      localStorage.removeItem("token"); // 🔥 single source of truth
      return initialState;              // 🔥 full reset
    },

    resetAuth() {
      return initialState;
    },
  },
});

export const {
  authStart,
  authSuccess,
  authFailure,
  logout,
  resetAuth,
} = authSlice.actions;

export default authSlice.reducer;
