import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui/uiSlice";
import authReducer from "./auth/authSlice";
import chatReducer from "./chat/chatSlice";
import contactsReducer from "./contacts/contactsSlice"

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
    chat: chatReducer,
    contacts: contactsReducer,
  },
});
