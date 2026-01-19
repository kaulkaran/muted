import React, { useState } from "react";
import { useSelector } from "react-redux";
import socket from "../../socket";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);

  const activeConversationId = useSelector(
    (state) => state.chat.activeConversationId
  );

  const handleSend = () => {
    if (!text.trim() || !activeConversationId || isSending) return;

    setIsSending(true);

    socket.emit(
      "message:send",
      {
        conversationId: activeConversationId,
        text: text.trim(),
        type: "text", // ✅ REQUIRED
      },
      (ack) => {
        setIsSending(false);

        if (ack?.status === "ok") {
          setText("");
        } else {
          console.error("Message send failed:", ack?.message);
        }
      }
    );
  };

  return (
    <div className="p-4 bg-[#f8f7f7]">
      <div className="flex items-center gap-3 bg-white p-2 pr-2 pl-6 rounded-[2rem] border border-black/5 shadow-sm">

        <input
          type="text"
          value={text}
          disabled={!activeConversationId}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder={
            activeConversationId
              ? "Type a message..."
              : "Select a conversation first"
          }
          className="flex-1 bg-transparent border-none outline-none text-sm text-[#141415] placeholder:text-[#74717a]"
        />

        <div className="flex items-center gap-1">
          {/* Attachment Icon */}
          <button
            disabled={!activeConversationId}
            className="p-2 text-[#74717a] hover:text-[rgb(var(--primary))] transition-colors disabled:opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 -rotate-45">
              <path fillRule="evenodd" d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835Z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Send Button */}
          <button
            onClick={handleSend}
            disabled={!activeConversationId || isSending || !text.trim()}
            className="p-3 bg-[rgb(var(--primary)/0.4)] hover:bg-[rgb(var(--primary))] text-white rounded-full transition-all shadow-md active:scale-95 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 translate-x-0.5 group-hover:translate-x-1 transition-transform">
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
