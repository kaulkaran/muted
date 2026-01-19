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
        type: "text", 
      },
      (ack) => {
        setIsSending(false);
        if (ack?.status === "ok") {
          setText("");
        }
      }
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
    }
  };

  return (
    // Clean White Footer with subtle top border
    <div className="min-h-[72px] px-6 py-3 bg-white flex items-center gap-3 border-t border-black/5">

      {/* Attach Button (Plus) */}
      <button 
        disabled={!activeConversationId}
        className="p-2 text-[#74717a] hover:text-[rgb(var(--primary))] hover:bg-purple-50 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </button>

      {/* Input Field */}
      <div className="flex-1">
        <input
          type="text"
          value={text}
          disabled={!activeConversationId}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="w-full h-10 bg-gray-50 text-[#141415] placeholder:text-gray-400 rounded-xl px-4 text-sm border-none focus:ring-1 focus:ring-[rgb(var(--primary))] outline-none transition-all"
        />
      </div>

      {/* Send Button */}
      <button
        onClick={handleSend}
        disabled={!text.trim() || isSending}
        className={`
          p-2.5 rounded-full transition-all shadow-sm
          ${text.trim() 
             ? "bg-[rgb(var(--primary))] text-white hover:brightness-110 active:scale-95" 
             : "bg-gray-100 text-gray-400 cursor-default"}
        `}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 translate-x-0.5">
           <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
        </svg>
      </button>

    </div>
  );
};

export default MessageInput;