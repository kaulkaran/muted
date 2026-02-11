import { useSelector } from "react-redux";
import MessageItem from "./MessageItem";
import { useRef, useEffect, useMemo } from "react";

const MessageList = ({ messages }) => {
  const bottomRef = useRef(null);
  const currentUserId = useSelector((state) => state.auth.user?._id);

  const safeMessages = useMemo(() => {
    if (!Array.isArray(messages)) return [];
    return messages;
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" });
  }, [safeMessages.length]);

  return (
    <div className="flex flex-col flex-1 overflow-y-auto py-2 px-3">
      <div className="flex justify-center mb-4 mt-2">
        <span className="bg-white shadow-sm text-[#54656f] text-[12.5px] px-3 py-1.5 rounded-lg">
          Today
        </span>
      </div>

      {safeMessages.map((msg) => {
        const senderId =
          typeof msg?.sender === "string" ? msg.sender : msg?.sender?._id;

        return (
          <MessageItem
            key={msg?._id || `${msg?.createdAt}-${senderId}`}
            text={msg?.text || ""}
            time={msg?.createdAt}
            type={msg?.type}
            media={msg?.media}
            isSender={senderId === currentUserId}
          />
        );
      })}

      <div ref={bottomRef} />
    </div>
  );
};

export default MessageList;
