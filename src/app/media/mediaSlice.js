import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setMedia(state, action) {
      state.items = action.payload;
    },
    addMedia(state, action) {
      state.items.unshift(action.payload); // newest first
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setMedia, addMedia, setLoading } = mediaSlice.actions;
export default mediaSlice.reducer;
