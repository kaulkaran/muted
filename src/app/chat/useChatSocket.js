import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import socket from "../../socket";
import { addMessage } from "./chatSlice";

const useChatSocket = () => {
  const dispatch = useDispatch();
  const activeConversationId = useSelector(
    (state) => state.chat.activeConversationId
  );

  useEffect(() => {
    // ✅ Only put conditional logic inside useEffect
    const handleNewMessage = (message) => {
      dispatch(
        addMessage({
          conversationId: message.conversation,
          message,
        })
      );
    };

    socket.on("message:new", handleNewMessage);

    return () => {
      socket.off("message:new", handleNewMessage);
    };
  }, [dispatch]); // NOTE: do NOT include anything that can be undefined/unmounted

  // Optional: listen to typing, delivered, etc. here as well
};

export default useChatSocket;
