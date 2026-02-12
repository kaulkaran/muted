import { uploadMediaRequest } from "./mediaApi";
import { addMedia, setLoading } from "./mediaSlice";
import { sendMessageRequest } from "../messages/messagesApi";
import { addMessage } from "../chat/chatSlice";

export const uploadMediaAndSend =
  ({ file, conversationId }) =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));

      // 1) upload file -> returns media doc
      const mediaDoc = await uploadMediaRequest(file);

      // 2) send message with mediaId -> returns populated message (with media)
      const message = await sendMessageRequest({
        conversationId,
        mediaId: mediaDoc._id,
      });

      // 3) update chat + info panel immediately
      dispatch(addMessage({ conversationId, message }));
      if (message?.media) dispatch(addMedia(message.media));
    } finally {
      dispatch(setLoading(false));
    }
  };
