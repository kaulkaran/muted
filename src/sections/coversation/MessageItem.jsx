import React from "react";

const MessageItem = ({ text, time, isSender, avatarUrl }) => {
  return (
    <div
      className={`flex w-full mb-4 ${
        isSender ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex items-end gap-2 max-w-[75%] ${
          isSender ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Avatar */}
        <img
          src={avatarUrl || "/default-avatar.png"}
          alt="User"
          className={`rounded-full object-cover
            ${isSender ? "w-6 h-6 opacity-80" : "w-8 h-8"}
          `}
        />

        {/* Bubble */}
        <div
          className={`px-4 py-2.5 text-sm leading-relaxed
            ${
              isSender
                ? "bg-[rgb(var(--primary))] text-white rounded-2xl rounded-br-sm"
                : "bg-gray-100  text-[#141415]  border border-black/5 dark:border-white/5 rounded-2xl rounded-bl-sm"
            }
          `}
        >
          <p className="break-words">{text}</p>

          <span
            className={`block mt-1 text-[10px] font-medium
              ${
                isSender
                  ? "text-white/70 text-right"
                  : "text-[#74717a] text-left"
              }
            `}
          >
            {new Date(time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;

