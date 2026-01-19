import API from "../axios";
import { fetchConversations } from "../chat/chatThunks";
import {
  fetchContactsRequest,
  fetchPendingInvitesRequest,
  sendInviteRequest,
  acceptInviteRequest,
  findUserByEmailRequest
} from "./contactsApi";

import {
  setContacts,
  setPendingInvites,
  addPendingInvite,
  addContact
} from "./contactsSlice";

/* FETCH ACCEPTED CONTACTS */
export const fetchContacts = () => async (dispatch) => {
  try {
    const connections = await fetchContactsRequest();
    dispatch(setContacts(connections));
  } catch (err) {
    console.error(err.message);
  }
};

/* FETCH PENDING INVITES */
export const fetchPendingInvites = () => async (dispatch) => {
  try {
    const invites = await fetchPendingInvitesRequest();
    dispatch(setPendingInvites(invites));
  } catch (err) {
    console.error(err.message);
  }
};

/* INVITE BY EMAIL */
/* INVITE BY EMAIL */
export const inviteByEmail = (email) => async (dispatch) => {
  try {
    console.log("🔍 Finding user by email:", email);
    
    // 1. Find user by email
    const userRes = await API.get(
      `/connections/users/by-email?email=${encodeURIComponent(email)}`
    );

    const user = userRes.data;
    console.log("✅ Found user:", user);
    
    if (!user?._id) {
      throw new Error("User not found");
    }

    // 2. Send invite with the found userId
    console.log("📤 Sending invite to userId:", user._id);
    
    const inviteRes = await API.post("/connections/invite", {
      userId: user._id,
    });

    console.log("✅ Invite sent successfully:", inviteRes.data);
    return inviteRes.data;
    
  } catch (error) {
    console.error("❌ Invite error:", error.response?.data || error.message);
    throw error;
  }
};

/* ACCEPT INVITE */

export const acceptInvite = (connectionId) => async (dispatch) => {
  try {
    const { connection, conversation } =
      await acceptInviteRequest(connectionId);

    dispatch(addContact(connection));

    // 🔥 THIS IS MISSING
    dispatch(fetchConversations());

  } catch (err) {
    console.error(err.message);
  }
};
