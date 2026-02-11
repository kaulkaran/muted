import { useEffect } from "react";
import { useDispatch } from "react-redux";
import socket from "../../socket";
import { upsertMessage } from "./chatSlice";

const useChatSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleNewMessage = (message) => {
      // message.conversation might be ObjectId or populated object
      const conversationId =
        typeof message.conversation === "string"
          ? message.conversation
          : message.conversation?._id;

      if (!conversationId) return;

      console.log("📩 message:new received:", message);

      dispatch(
        upsertMessage({
          conversationId,
          message,
        })
      );
    };

    socket.on("message:new", handleNewMessage);

    return () => {
      socket.off("message:new", handleNewMessage);
    };
  }, [dispatch]);
};

export default useChatSocket;
