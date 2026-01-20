import { useSelector } from "react-redux";
import MessageItem from "./MessageItem";
import { useRef, useEffect } from "react";

const MessageList = ({ messages = [] }) => {
  const bottomRef = useRef(null);
  const currentUserId = useSelector((state) => state.auth.user?._id);

  // Auto-scroll ONLY when new messages are added
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  return (
    <div className="flex flex-col py-2 min-h-full">
      {/* Date Divider */}
      <div className="flex justify-center mb-4 mt-2">
        <span className="bg-[#fff] dark:bg-[#111b21] shadow-sm text-[#54656f] dark:text-[#8696a0] text-[12.5px] px-3 py-1.5 rounded-lg">
          Today
        </span>
      </div>

      {messages.map((msg) => {
        const senderId =
          typeof msg.sender === "string"
            ? msg.sender
            : msg.sender?._id;

        const isSender = senderId === currentUserId;

        return (
          <MessageItem
            key={`${msg._id}-${msg.createdAt}`}
            text={msg.text}
            time={msg.createdAt}
            isSender={isSender}
            status="read"
          />
        );
      })}

      <div ref={bottomRef} />
    </div>
  );
};

export default MessageList;
