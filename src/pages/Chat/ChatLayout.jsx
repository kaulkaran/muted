import { useState } from "react";
import { Outlet } from "react-router-dom";

import ChatSidebar from "../../sections/chat/ChatSidebar";
import InfoPanel from "../../sections/info/InfoPanel";

const ChatLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="h-screen w-full flex bg-white  overflow-hidden">

      {/* LEFT SIDEBAR */}
      <div
        className={`
          flex-shrink-0 h-full transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "w-[280px]" : "w-0 opacity-0 overflow-hidden"}
        `}
      >
        <ChatSidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* CENTER ROUTED CONTENT */}
      <div className="flex-1 min-w-0 h-full relative">
        <Outlet
          context={{
            isSidebarOpen,
            toggleSidebar: () => setIsSidebarOpen(v => !v),
            toggleInfo: () => setIsInfoOpen(v => !v),
          }}
        />
      </div>

      {/* RIGHT INFO PANEL */}
      <div
        className={`
          flex-shrink-0 h-full bg-[#18181b]
          transition-all duration-300 ease-in-out
          ${isInfoOpen ? "w-[360px]" : "w-0 opacity-0 overflow-hidden"}
        `}
      >
        <InfoPanel onClose={() => setIsInfoOpen(false)} />
      </div>

    </div>
  );
};

export default ChatLayout;
