import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
  initialized: false, // ✅ NEW
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart(state) {
      state.loading = true;
      state.error = null;
    },

       // ✅ Use only for login/register where you truly have BOTH user+token
    authSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.initialized = true;

      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token);
      }
    },


    authFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.initialized = true; // ✅ done trying
    },

    setToken(state, action) {
      state.token = action.payload;
      state.initialized = true;
      if (action.payload) localStorage.setItem("token", action.payload);
    },

    setUser(state, action) {
      state.user = action.payload;
      state.initialized = true;
    },

    setInitialized(state) {
      state.initialized = true;
    },


     logout(state) {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
      state.initialized = true;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },

    /* ✅ RESET */
   resetAuth() {
      return { ...initialState, token: localStorage.getItem("token") || null };
    },
  },
});

export const {
  authStart,
  authSuccess,
  authFailure,
  logout,
  setInitialized,
  setUser,
  setToken,
  resetAuth,
} = authSlice.actions;

export default authSlice.reducer;
