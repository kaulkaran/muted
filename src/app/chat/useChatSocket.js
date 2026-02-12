import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import socket from "../../socket";
import { addMedia } from "../media/mediaSlice";
import { upsertMessage } from "./chatSlice";

const useChatSocket = () => {
  const dispatch = useDispatch();

  // ⭐ Needed so we only add media for the active chat
  const activeConversationId = useSelector(
    (state) => state.chat.activeConversationId
  );

  useEffect(() => {
    const handleNewMessage = (message) => {
      const conversationId =
        typeof message.conversation === "string"
          ? message.conversation
          : message.conversation?._id;

      if (!conversationId) return;

      console.log("📩 message:new received:", message);

      // ✅ 1) Update chat messages (already working)
      dispatch(
        upsertMessage({
          conversationId,
          message,
        })
      );

      // ✅ 2) 🔥 UPDATE INFO PANEL INSTANTLY (THIS WAS MISSING)
      if (
        conversationId === activeConversationId &&   // only current chat
        message?.media &&
        typeof message.media === "object" &&
        message.media._id
      ) {
        dispatch(addMedia(message.media));
      }
    };

    socket.on("message:new", handleNewMessage);

    return () => {
      socket.off("message:new", handleNewMessage);
    };
  }, [dispatch, activeConversationId]);
};

export default useChatSocket;
