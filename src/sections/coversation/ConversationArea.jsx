import { useSelector } from "react-redux";
import MessageItem from "./MessageItem";
import { useRef, useEffect } from "react";

const MessageList = ({ messages = [] }) => {
  const bottomRef = useRef(null);
  const currentUserId = useSelector((state) => state.auth.user?._id);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  return (
    <div className="flex flex-col flex-1 overflow-y-auto py-2 px-3">
      <div className="flex justify-center mb-4 mt-2">
        <span className="bg-white dark:bg-[#111b21] shadow-sm text-[#54656f] dark:text-[#8696a0] text-[12.5px] px-3 py-1.5 rounded-lg">
          Today
        </span>
      </div>

      {messages.map((msg) => {
        const senderId =
          typeof msg.sender === "string"
            ? msg.sender
            : msg.sender?._id;

        return (
          <MessageItem
            key={`${msg._id}-${msg.createdAt}`}
            text={msg.text}
            time={msg.createdAt}
            isSender={senderId === currentUserId}
            status="read"
          />
        );
      })}

      <div ref={bottomRef} />
    </div>
  );
};


export default MessageList;
