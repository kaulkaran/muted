// src/app/media/mediaSlice.js
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
      const media = action.payload;
      if (!media?._id) return;

      const exists = state.items.some((m) => m?._id?.toString() === media?._id?.toString());

      if (!exists) state.items.unshift(media);
    },

    addManyMedia(state, action) {
      const incoming = action.payload || [];
      const existingIds = new Set(state.items.map((m) => m._id));

      // newest first
      const toAdd = [];
      for (const m of incoming) {
        if (m?._id && !existingIds.has(m._id)) {
          existingIds.add(m._id);
          toAdd.push(m);
        }
      }
      state.items = [...toAdd.reverse(), ...state.items];
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setMedia, addMedia, addManyMedia, setLoading } = mediaSlice.actions;
export default mediaSlice.reducer;
