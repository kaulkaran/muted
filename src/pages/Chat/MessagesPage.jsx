import React from "react";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import ConversationArea from "../../sections/coversation/ConversationArea";

const MessagesPage = () => {
  // We grab the context passed from ChatLayout
  const outletContext = useOutletContext() || {};
  const { toggleInfo } = outletContext;

  const activeConversationId = useSelector(
    (state) => state.chat.activeConversationId
  );

  // 1. If NO chat is selected, show the "Welcome" placeholder
  if (!activeConversationId) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center bg-[#f8f9fa] text-center px-4">
        {/* Optional: Add an illustration here */}
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
           <svg className="w-10 h-10 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
             <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 001.032 1.733l1.044 1.044a3 3 0 010 4.243l-1.044 1.044a4.404 4.404 0 00-1.032 1.733c-.114 1.866-1.483 3.477-3.405 3.727-2.075.27-4.19.408-6.337.408-2.147 0-4.262-.139-6.337-.408-1.922-.25-3.291-1.861-3.405-3.727a4.404 4.404 0 00-1.032-1.733l-1.044-1.044a3 3 0 010-4.243l1.044-1.044a4.405 4.405 0 001.032-1.733C3.05 4.519 4.419 2.908 6.341 2.658z" />
           </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#141415] mb-2">
          Muted for Web
        </h3>
        <p className="text-sm text-[#74717a] max-w-sm">
          Send and receive messages without keeping your phone online.
          Select a chat to start messaging.
        </p>
      </div>
    );
  }

  // 2. If Chat IS selected, render ONLY the Chat Area
  // It will automatically take up the full remaining width because of the Layout
  return (
    <ConversationArea 
      onToggleInfo={toggleInfo} 
    />
  );
};

export default MessagesPage;