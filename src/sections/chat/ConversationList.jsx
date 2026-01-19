import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConversationRow from "./ConversationRow";
import { fetchConversations, fetchMessages } from "../../app/chat/chatThunks";

const ConversationList = () => {
  const dispatch = useDispatch();

  const conversations = useSelector((state) => state.chat.conversations || []);
  const messagesByConvo = useSelector((state) => state.chat.messages || {});
  const activeId = useSelector((state) => state.chat.activeConversationId);
  const currentUserId = useSelector((state) => state.auth.user?._id);

  useEffect(() => {
    dispatch(fetchConversations());
  }, [dispatch]);

  // Optional: Fetch messages for all conversations when list loads
  useEffect(() => {
    conversations.forEach((convo) => {
      if (!messagesByConvo[convo._id]) {
        dispatch(fetchMessages(convo._id));
      }
    });
  }, [conversations, messagesByConvo, dispatch]);

  if (!conversations.length) {
    return (
      <div className="flex items-center justify-center h-full text-sm text-[#74717a]">
        No conversations
      </div>
    );
  }

  return (
    <div className="w-[320px] border-r border-black/5 overflow-y-auto">
      {conversations.map((convo) => {
        const otherUser = convo.participants.find((p) => p._id !== currentUserId);

        const convoMessages = messagesByConvo[convo._id] || [];
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
