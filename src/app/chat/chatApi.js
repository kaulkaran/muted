import API from "../axios";

// ✅ FIXED: Changed from /contacts to /connections/accepted
export const getContacts = () => API.get("/connections/accepted");

export const getConversations = () => API.get("/conversations");

export const getMessages = (conversationId) =>
  API.get(`/messages/${conversationId}`);

export const sendMessage = (payload) =>
  API.post("/messages", payload);