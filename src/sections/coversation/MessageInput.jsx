import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import socket from "../../socket";
import { uploadMediaRequest } from "../../app/media/mediaApi";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const fileRef = useRef(null);



  const activeConversationId = useSelector((state) => state.chat.activeConversationId);

  const handleSendTextSocket = () => {
    if (!text.trim() || !activeConversationId || isSending) return;

    setIsSending(true);

    socket.emit(
      "message:send",
      {
        conversationId: activeConversationId,
        text: text.trim(),
      },
      (ack) => {
        setIsSending(false);
        if (ack?.status === "ok") setText("");
      },
    );
  };

  const handlePickFile = () => {
    if (!activeConversationId || isUploading) return;
    fileRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file || !activeConversationId) return;

    try {
      setIsUploading(true);

      // 1) upload media
      const media = await uploadMediaRequest(file);

      // 2) create message (REST) with mediaId
      socket.emit(
        "message:send",
        {
          conversationId: activeConversationId,
          mediaId: media._id,
        },
        (ack) => {
          if (ack?.status !== "ok") {
            console.error("Failed to send media message:", ack);
          }
        },
      );

      // NOTE: message will appear realtime ONLY after backend emits socket event from REST.
      // We'll add that in backend step below.
    } catch (err) {
      console.error(err?.response?.data || err.message);
    } finally {
      setIsUploading(false);
      e.target.value = ""; // allow re-select same file
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendTextSocket();
    }
  };

  return (
    <div className="min-h-[72px] px-6 py-3 bg-white flex items-center gap-3 border-t border-black/5">
      {/* hidden file input */}
      <input ref={fileRef} type="file" hidden onChange={handleFileChange} accept="image/*,video/*,.pdf,.doc,.docx,.ppt,.pptx,.zip,.rar,.txt" />

      {/* Attach */}
      <button
        onClick={handlePickFile}
        disabled={!activeConversationId || isUploading}
        className="p-2 text-[#74717a] hover:text-[rgb(var(--primary))] hover:bg-purple-50 rounded-full transition-colors disabled:opacity-50"
        title="Attach"
      >
        {isUploading ? (
          <span className="text-xs font-semibold">...</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        )}
      </button>

      {/* Input */}
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

      {/* Send */}
      <button
        onClick={handleSendTextSocket}
        disabled={!text.trim() || isSending}
        className={`
          p-2.5 rounded-full transition-all shadow-sm
          ${text.trim() ? "bg-[rgb(var(--primary))] text-white hover:brightness-110 active:scale-95" : "bg-gray-100 text-gray-400 cursor-default"}
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
