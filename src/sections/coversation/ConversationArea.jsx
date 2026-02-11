import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { ChatHeader } from "./ChatHeader";
import { fetchMessages } from "../../app/chat/chatThunks";
import socket from "../../socket";

const ConversationArea = ({ onToggleInfo }) => {
  const dispatch = useDispatch();
  const activeConversationId = useSelector((state) => state.chat.activeConversationId);
  const messages = useSelector((state) => state.chat.messages[activeConversationId] || []);

  const hasMessages = useSelector((state) => !!state.chat.messages[activeConversationId]);

  useEffect(() => {
    if (activeConversationId && !hasMessages) {
      dispatch(fetchMessages(activeConversationId));
    }
  }, [activeConversationId, hasMessages, dispatch]);

  useEffect(() => {
    if (!activeConversationId) return;
    socket.emit("conversation:join", { conversationId: activeConversationId });
    return () => {
      socket.emit("conversation:leave", { conversationId: activeConversationId });
    };
  }, [activeConversationId]);

  if (!activeConversationId) {
    return <div className="h-full w-full flex items-center justify-center bg-[#f8f9fa] text-gray-400">Select a conversation to start chatting</div>;
  }

  return (
    // Clean, plain background (No beige, no images)
    <div className="flex flex-col h-full w-full relative bg-[#f8f9fa] overflow-hidden">
      {/* HEADER */}
      <ChatHeader onToggleInfo={onToggleInfo} />

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto z-10 p-4">
        <MessageList messages={messages} />
      </div>

      {/* INPUT */}
      <div className="flex-shrink-0 z-10">
        <MessageInput />
      </div>
    </div>
  );
};

export default ConversationArea;
