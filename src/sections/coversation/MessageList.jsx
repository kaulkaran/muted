import { useSelector } from "react-redux";
import MessageItem from "./MessageItem";
import { useRef, useEffect } from "react";

const MessageList = ({ messages = [] }) => {
  const bottomRef = useRef(null);

  const currentUserId = useSelector(state => state.auth.user?._id);
  const currentUserAvatar = useSelector(
    state => state.auth.user?.avatar
  );

  // 🔥 Auto-scroll on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    // ✅ FIXED: Added min-h-full to make white background fill entire space
    <div className="p-6 md:p-8 bg-white min-h-full flex flex-col">
      {messages.map((msg) => {
        const senderId =
          typeof msg.sender === "string"
            ? msg.sender
            : msg.sender?._id;

        const isSender = senderId === currentUserId;

        return (
          <MessageItem
            key={msg._id}
            text={msg.text}
            time={msg.createdAt}
            isSender={isSender}
            hasAvatar={!isSender}
            avatarUrl={
              isSender
                ? currentUserAvatar
                : msg.sender?.avatar
            }
          />
        );
      })}

      <div ref={bottomRef} />
      {/* ✅ Spacer to push content when needed */}
      <div className="flex-1" />
    </div>
  );
};

export default MessageList;