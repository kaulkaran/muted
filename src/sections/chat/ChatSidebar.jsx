import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ConversationList from "./ConversationList";

const ChatSidebar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col h-full bg-white">

      {/* 1. HEADER: Your Profile + Actions */}
      <div className="h-16 flex items-center justify-between px-4 bg-white flex-shrink-0">

        {/* User Avatar */}
        <div className="cursor-pointer" onClick={() => navigate("/chat/settings")}>
          {user ? (
            <img
              src={user.avatar || "/default-avatar.png"}
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover border border-gray-100"
            />
          ) : (
            <div className="w-9 h-9 rounded-full bg-gray-200 animate-pulse" />
          )}

        </div>

        {/* Icons: using your Purple Theme color (#82708f) */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/chat/contacts")}
            className="p-2 text-[#82708f] hover:bg-purple-50 rounded-full transition-colors"
          >
            {/* New Chat Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </button>

          <button
            onClick={() => navigate("/chat/settings")}
            className="p-2 text-[#82708f] hover:bg-purple-50 rounded-full transition-colors"
          >
            {/* Settings Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          </button>
        </div>
      </div>

      {/* 2. SEARCH BAR: Clean & Minimal */}
      <div className="px-4 pb-2">
        <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2">
          <svg className="text-gray-400 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent border-none outline-none text-sm ml-3 text-gray-700 placeholder:text-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* 3. CONVERSATION LIST */}
      <div className="flex-1 overflow-y-auto">
        <ConversationList searchQuery={searchQuery} />
      </div>

    </div>
  );
};

export default ChatSidebar;