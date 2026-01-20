import { fetchConversationsRequest } from "../conversations/conversationsApi";
import { fetchMessagesRequest, sendMessageRequest } from "../messages/messagesApi";
import { addMessage, setConversations, setMessages } from "./chatSlice";

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
  try {
    const messages = await fetchMessagesRequest(conversationId);

    dispatch(
      setMessages({
        conversationId,
        messages: res.data.reverse(),
      })
    );
  } catch (err) {
    console.error(err.message);
  }
};


export const sendMessage = ({ conversationId, text }) => async (dispatch) => {
  try {
    const message = await sendMessageRequest({ conversationId, text });
    dispatch(addMessage({ conversationId, message }));
  } catch (err) {
    console.error(err.message);
  }
};
