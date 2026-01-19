import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { ChatHeader } from "./ChatHeader";
import { fetchMessages } from "../../app/chat/chatThunks";
import socket from "../../socket";

const ConversationArea = ({ onToggleInfo, onToggleSidebar, isSidebarOpen }) => {
  const dispatch = useDispatch();

  const activeConversationId = useSelector(
    (state) => state.chat.activeConversationId
  );

  const messages = useSelector(
    (state) => state.chat.messages[activeConversationId] || []
  );

  useEffect(() => {
    if (activeConversationId) {
      dispatch(fetchMessages(activeConversationId));
    }
  }, [activeConversationId, dispatch]);

  if (!activeConversationId) {
    return (
      <div className="h-full flex items-center justify-center text-[#74717a] bg-[#f8f7f7]">
        Select a conversation to start chatting
      </div>
    );
  }

  useEffect(() => {
  if (!activeConversationId) return;

  socket.emit("conversation:join", {
    conversationId: activeConversationId,
  });

  return () => {
    socket.emit("conversation:leave", {
      conversationId: activeConversationId,
    });
  };
}, [activeConversationId]);


  return (
    // ✅ FIXED: Ensured consistent background color
    <div className="flex flex-col h-full w-full bg-[#f8f7f7] overflow-hidden">
      <ChatHeader
        onToggleInfo={onToggleInfo}
        onToggleSidebar={onToggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex-1 overflow-y-auto">
        <MessageList messages={messages} />
      </div>

      <div className="flex-shrink-0">
        <MessageInput conversationId={activeConversationId} />
      </div>
    </div>
  );
};

export default ConversationArea;