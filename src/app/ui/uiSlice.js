import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeChatId: null,
  isSidebarOpen: true,
  isInfoOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveChat(state, action) {
      state.activeChatId = action.payload;
    },
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleInfo(state) {
      state.isInfoOpen = !state.isInfoOpen;
    },
  },
});

export const {
  setActiveChat,
  toggleSidebar,
  toggleInfo,
} = uiSlice.actions;

export default uiSlice.reducer;
