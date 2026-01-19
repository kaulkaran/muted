// conversationsApi.js

import API from "../axios";

export const fetchConversationsRequest = async () => {
  const res = await API.get("/conversations");
  return res.data; // ✅ THIS IS CRITICAL
};
