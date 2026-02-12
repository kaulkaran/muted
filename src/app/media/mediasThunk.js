import { uploadMediaRequest } from "./mediaApi";
import { addMedia, setLoading } from "./mediaSlice";
import { sendMessageRequest } from "../messages/messagesApi";
import { addMessage } from "../chat/chatSlice";

export const uploadMediaAndSend =
  ({ file, conversationId }) =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));

      // 1) upload file -> returns mediaDoc
      const mediaDoc = await uploadMediaRequest(file);

      // 2) send message with mediaId -> backend returns populated message (with media)
      const message = await sendMessageRequest({
        conversationId,
        mediaId: mediaDoc._id,
      });

      // 3) update chat immediately
      dispatch(addMessage({ conversationId, message }));

      // ✅ 4) update Info panel immediately (NO refresh needed)
      if (message?.media && typeof message.media === "object" && message.media._id) {
        dispatch(addMedia(message.media));
      } else {
        // fallback: at least show uploaded mediaDoc if message not populated
        dispatch(addMedia(mediaDoc));
      }
    } catch (err) {
      console.error("uploadMediaAndSend failed:", err?.message || err);
    } finally {
      dispatch(setLoading(false));
    }
  };
