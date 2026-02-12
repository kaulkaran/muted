import { fetchConversationsRequest } from "../conversations/conversationsApi";
import { fetchMessagesRequest, sendMessageRequest } from "../messages/messagesApi";
import { addMessage, setConversations, setMessages } from "./chatSlice";
import { setMedia, addMedia } from "../media/mediaSlice";

/* FETCH CONVERSATIONS */
export const fetchConversations = () => async (dispatch) => {
  try {
    const conversations = await fetchConversationsRequest();
    dispatch(setConversations(conversations));
  } catch (err) {
    console.error(err?.message || err);
  }
};

/* FETCH MESSAGES + SYNC MEDIA PANEL */
export const fetchMessages = (conversationId) => async (dispatch) => {
  try {
    // ✅ clear previous convo media immediately (prevents showing old convo media)
    dispatch(setMedia([]));

    const messages = await fetchMessagesRequest(conversationId);
    dispatch(setMessages({ conversationId, messages }));

    // ✅ collect populated media objects from messages
    // backend returns message.media populated (object) OR null
    const mediaObjects = (messages || [])
      .map((m) => m?.media)
      .filter((m) => m && typeof m === "object" && m._id);

    // ✅ de-dupe by _id
    const unique = Array.from(
      new Map(mediaObjects.map((m) => [m._id.toString(), m])).values()
    );

    dispatch(setMedia(unique));
  } catch (err) {
    console.error(err?.message || err);
    dispatch(setMedia([]));
  }
};

/* SEND MESSAGE + PUSH MEDIA INTO PANEL IMMEDIATELY */
export const sendMessage = ({ conversationId, text, mediaId }) => async (dispatch) => {
  try {
    const message = await sendMessageRequest({ conversationId, text, mediaId });

    dispatch(addMessage({ conversationId, message }));

    // ✅ if message contains populated media object, add it to the Info Panel
    if (message?.media && typeof message.media === "object" && message.media._id) {
      dispatch(addMedia(message.media));
    }
  } catch (err) {
    console.error(err?.message || err);
  }
};
