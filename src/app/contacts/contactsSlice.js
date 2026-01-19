import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],        // accepted connections
  pendingInvites: [],  // incoming invites
  loading: false,
  error: null
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload;
    },

    setPendingInvites(state, action) {
      state.pendingInvites = action.payload;
    },

    addPendingInvite(state, action) {
      state.pendingInvites.unshift(action.payload);
    },

    addContact(state, action) {
      state.contacts.unshift(action.payload);
      state.pendingInvites = state.pendingInvites.filter(
        invite => invite._id !== action.payload._id
      );
    },

    resetContacts() {
      return initialState;
    }
  }
});

export const {
  setContacts,
  setPendingInvites,
  addPendingInvite,
  addContact,
  resetContacts
} = contactsSlice.actions;

export default contactsSlice.reducer;
