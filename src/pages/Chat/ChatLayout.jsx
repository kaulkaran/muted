import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom"; // 1. Import useLocation
import { useSelector } from "react-redux"; // 2. Import useSelector
import ChatSidebar from "../../sections/chat/ChatSidebar";
import InfoPanel from "../../sections/info/InfoPanel";

const ChatLayout = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const location = useLocation();
  
  // 3. Get Active Chat ID
  const activeConversationId = useSelector((state) => state.chat.activeConversationId);

  // 4. LOGIC: When to show what on Mobile?
  // Show Sidebar if: We are at root "/chat" AND no conversation is active
  // (On Desktop, we ignore this and always show it via md:flex)
  const showSidebarMobile = location.pathname === "/chat" && !activeConversationId;
  
  // Show Outlet if: We are NOT at root OR a conversation is active
  const showOutletMobile = location.pathname !== "/chat" || activeConversationId;

  return (
    <div className="h-screen w-full flex bg-white overflow-hidden relative">

      {/* LEFT COLUMN: Sidebar */}
      <div 
        className={`
          ${showSidebarMobile ? "flex" : "hidden"} md:flex 
          w-full md:w-[380px] h-full flex-col border-r border-black/5 z-10 bg-white
        `}
      >
        <ChatSidebar />
      </div>

      {/* CENTER COLUMN: Chat Area */}
      <div 
        className={`
          ${showOutletMobile ? "flex" : "hidden"} md:flex 
          flex-1 h-full min-w-0 relative z-0 flex-col
        `}
      >
        <Outlet
          context={{
            isInfoOpen,
            toggleInfo: () => setIsInfoOpen((prev) => !prev),
          }}
        />
      </div>

      {/* RIGHT PANEL: Info (Fixed) - Same as before */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full md:w-[320px] bg-white shadow-2xl z-50
          border-l border-black/5
          transform transition-transform duration-300 ease-in-out
          ${isInfoOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <InfoPanel onClose={() => setIsInfoOpen(false)} />
      </div>

      {/* Overlay */}
      {isInfoOpen && (
        <div 
          onClick={() => setIsInfoOpen(false)}
          className="fixed inset-0 bg-black/20 z-40"
        />
      )}

    </div>
  );
};

export default ChatLayout;