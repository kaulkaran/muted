import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversations: [], // list of chats
  contacts: [], // contacts list
  messages: {}, // { conversationId: [] }
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

    upsertMessage: (state, action) => {
      const { conversationId, message } = action.payload;

      if (!state.messages[conversationId]) {
        state.messages[conversationId] = [];
      }

      const idx = state.messages[conversationId].findIndex((m) => m._id === message._id);

      if (idx !== -1) state.messages[conversationId][idx] = message;
      else state.messages[conversationId].push(message);
    },

    addMessage: (state, action) => {
      const { conversationId, message } = action.payload;

      // ✅ Ensure array exists
      state.messages[conversationId] = state.messages[conversationId] || [];

      const arr = state.messages[conversationId];

      const idx = arr.findIndex((m) => m._id === message._id);

      if (idx !== -1) {
        // ✅ Replace existing message (keeps populated media.url)
        arr[idx] = message;
      } else {
        arr.push(message);
      }

      // ✅ Optional: update lastMessage in conversations list (for sidebar preview)
      const conv = state.conversations.find((c) => c._id === conversationId);
      if (conv) conv.lastMessage = message;
    },

    setOnlineUsers(state, action) {
      state.onlineUsers = {};
      action.payload.forEach((userId) => {
        state.onlineUsers[userId] = true; // ✅ This is correct
      });
    },

    setUserOnline(state, action) {
      const userId = action.payload;

      state.onlineUsers[userId] = true;

      // optional: mark participant online
      state.conversations.forEach((conv) => {
        conv.participants.forEach((p) => {
          if (p._id === userId) {
            p.isOnline = true;
          }
        });
      });
    },

    setUserOffline(state, action) {
      const { userId, lastSeen } = action.payload;

      delete state.onlineUsers[userId];

      state.conversations.forEach((conversation) => {
        conversation.participants.forEach((p) => {
          if (p._id === userId) {
            p.lastSeen = lastSeen;
            p.isOnline = false;
          }
        });
      });
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
  upsertMessage,
  resetChat,
} = chatSlice.actions;

export default chatSlice.reducer;
