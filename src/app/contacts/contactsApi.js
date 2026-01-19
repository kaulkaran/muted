import API from "../axios";

/* Accepted connections = Contacts */
export const fetchContactsRequest = async () => {
  const res = await API.get("/connections/accepted");
  return res.data;
};

/* Send invite (add contact by userId) */
export const sendInviteRequest = async (userId) => {
  const res = await API.post("/connections/invite", { userId });
  return res.data;
};

/* Pending invites */
export const fetchPendingInvitesRequest = async () => {
  const res = await API.get("/connections/pending");
  return res.data;
};

/* Accept invite */
export const acceptInviteRequest = async (connectionId) => {
  const res = await API.post(`/connections/${connectionId}/accept`);
  return res.data;
};

/* Find user by email */
export const findUserByEmailRequest = async (email) => {
  const res = await API.get(`/connections/users/by-email?email=${email}`);
  return res.data;
};
