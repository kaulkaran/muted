import API from "../axios";

export const fetchMessagesRequest = async (conversationId) => {
  const res = await API.get(`/messages/${conversationId}?limit=10000`);
  return res.data;
};

export const sendMessageRequest = async ({ conversationId, text, mediaId }) => {
  const payload = { conversationId };

  if (text) payload.text = text;
  if (mediaId) payload.mediaId = mediaId;

  const res = await API.post("/messages", payload);
  return res.data;
};
