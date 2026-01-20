import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversations: [],        // list of chats
  contacts: [],             // contacts list
  messages: {},             // { conversationId: [] }
  activeConversationId: null,
  onlineUsers: {}, // ✅ ADD THIS
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    /* ---------- UI STATE ---------- */
    setActiveConversation(state, action) {
      state.activeConversationId = action.payload;
    },

    /* ---------- CONTACTS ---------- */
    setContacts(state, action) {
      state.contacts = action.payload;
    },

    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    /* ---------- CONVERSATIONS ---------- */
    setConversations(state, action) {
      state.conversations = action.payload;
    },

    addConversation(state, action) {
      state.conversations.unshift(action.payload);
    },

    /* ---------- MESSAGES ---------- */
    setMessages(state, action) {
      const { conversationId, messages } = action.payload;
      state.messages[conversationId] = messages;
    },

    addMessage(state, action) {
      const { conversationId, message } = action.payload;

      if (!state.messages[conversationId]) {
        state.messages[conversationId] = [];
      }

      state.messages[conversationId].push(message);
    },

    setOnlineUsers(state, action) {
      state.onlineUsers = {};
      action.payload.forEach((userId) => {
        state.onlineUsers[userId] = true;
      });
    },


    setUserOnline(state, action) {
      state.onlineUsers[action.payload] = true;
    },
    setUserOffline(state, action) {
      delete state.onlineUsers[action.payload];
    },


    /* ---------- RESET ---------- */
    resetChat(state) {
      return initialState;
    },
  },
});

export const {
  setActiveConversation,
  setContacts,
  addContact,
  setConversations,
  addConversation,
  setMessages,
  addMessage,
  setOnlineUsers,
  setUserOnline,
  setUserOffline,
  resetChat,
} = chatSlice.actions;

export default chatSlice.reducer;
