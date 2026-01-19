import React from "react";

const ConversationItem = ({ icon, label, active }) => {
  return (
    <button
      className={`
        w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300
        ${
          active
            ? "bg-[rgb(var(--primary)/0.1)] text-[rgb(var(--primary))]"
            : "text-[#74717a]  hover:bg-black/5 "
        }
      `}
    >
      <span className="material-symbols-outlined text-[22px]">
        {icon}
      </span>
      <span className="font-bold text-sm">{label}</span>
    </button>
  );
};

export default ConversationItem;