import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConversationRow from "./ConversationRow";
import { fetchConversations, fetchMessages } from "../../app/chat/chatThunks";

const ConversationList = ({ searchQuery = "" }) => {
  const dispatch = useDispatch();

  const conversations = useSelector((state) => state.chat.conversations || []);
  const messagesByConvo = useSelector((state) => state.chat.messages || {});
  const activeId = useSelector((state) => state.chat.activeConversationId);
  const currentUserId = useSelector((state) => state.auth.user?._id);

  useEffect(() => {
    dispatch(fetchConversations());
  }, [dispatch]);

  // Filter conversations based on search
  const filteredConversations = conversations.filter((convo) => {
    const otherUser = convo.participants.find((p) => p._id !== currentUserId);
    const name = otherUser?.displayName || "Unknown";
    return name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (!filteredConversations.length) {
    return (
      <div className="flex flex-col items-center justify-center h-40 text-sm text-gray-400 mt-10">
        <p>No conversations found</p>
      </div>
    );
  }

  return (
    // w-full ensures it fits the Sidebar container
    <div className="w-full flex flex-col">
      {filteredConversations.map((convo) => {
        const otherUser = convo.participants.find((p) => p._id !== currentUserId);
        const convoMessages = messagesByConvo[convo._id] || [];
        
        // Show last real message or fallback
        const lastMessage = convoMessages.length
          ? convoMessages[convoMessages.length - 1].text
          : "Tap to start chatting";

        return (
          <ConversationRow
            key={convo._id}
            conversation={{
              id: convo._id,
              name: otherUser?.displayName || "Unknown",
              avatar: otherUser?.avatar || "/default-avatar.png",
              lastMessage,
            }}
            active={activeId === convo._id}
          />
        );
      })}
    </div>
  );
};

export default ConversationList;