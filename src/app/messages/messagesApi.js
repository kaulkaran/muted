import API from "../axios";

export const fetchMessagesRequest = async (conversationId) => {
  const res = await API.get(`/messages/${conversationId}`);
  return res.data;
};

export const sendMessageRequest = async ({ conversationId, text }) => {
  const res = await API.post("/messages", { conversationId, text });
  return res.data;
};
