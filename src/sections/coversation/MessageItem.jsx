import React from "react";

const MessageItem = ({ text, time, isSender }) => {
  
  const formattedTime = new Date(time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`flex w-full mb-2 ${
        isSender ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[70%] px-4 py-2 text-sm rounded-2xl relative shadow-sm
          ${
            isSender
              ? "bg-[rgb(var(--primary))] text-white rounded-br-sm" // Your Purple Theme
              : "bg-white text-[#141415] border border-black/5 rounded-bl-sm" // Clean White/Gray
          }
        `}
      >
        <p className="mb-1">{text}</p>
        
        <div className={`text-[10px] text-right ${isSender ? "text-white/70" : "text-gray-400"}`}>
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;