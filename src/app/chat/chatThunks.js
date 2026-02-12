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
    console.error(err.message);
  }
};

export const fetchMessages = (conversationId) => async (dispatch) => {
  const messages = await fetchMessagesRequest(conversationId);

  dispatch(setMessages({ conversationId, messages }));

  // ✅ collect media from messages and send to Info panel
  const mediaList = messages
    .map((m) => m.media)         // requires backend populate
    .filter(Boolean);

  // Optional: remove duplicates
  const unique = Array.from(new Map(mediaList.map((m) => [m._id, m])).values());

  dispatch(setMedia(unique));
};


export const sendMessage = ({ conversationId, text, mediaId }) => async (dispatch) => {
  const message = await sendMessageRequest({ conversationId, text, mediaId });

  dispatch(addMessage({ conversationId, message }));

  // ✅ if message contains populated media, add it to info panel
  if (message?.media) {
    dispatch(addMedia(message.media));
  }
};
