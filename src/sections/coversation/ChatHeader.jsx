import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveConversation } from "../../app/chat/chatSlice"; // Import Action
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

import { logout, resetAuth } from "../../app/auth/authSlice";
import { resetChat } from "../../app/chat/chatSlice";
import { resetContacts } from "../../app/contacts/contactsSlice";


const Header = ({
  onToggleSidebar,
  isSidebarOpen,
  title,
  subtitle,
  avatar,
  showStatus = false,
  statusColor = "green-500",
  statusText = "Active now",
  rightActions = null,
  centerContent = null
}) => {
  return (
    <div className="h-20 px-6 flex bg-white items-center justify-between border-b border-black/5    backdrop-blur-md flex-shrink-0 z-10">

      <div className="flex items-center gap-4">

        {/* BUTTON TO RE-OPEN SIDEBAR (Only visible when sidebar is closed) */}
        {!isSidebarOpen && (
          <button
            onClick={onToggleSidebar}
            className="p-2 -ml-2 mr-2 text-[#74717a] hover:bg-black/5 hover:text-[rgb(var(--primary))] rounded-full transition-colors"
            title="Open Sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
        )}

        {/* Avatar and Info (if provided) */}
        {avatar && (
          <>
            <div className="relative">
              <img
                src={avatar}
                alt={title || "User"}
                className="w-10 h-10 rounded-full object-cover shadow-sm"
              />
              {showStatus && (
                <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 bg-${statusColor} border-2 border-white dark:border-[#101012] rounded-full`}></span>
              )}
            </div>
            <div>
              <h3 className="font-bold text-[#141415]  text-sm">{title}</h3>
              {subtitle && (
                <p className={`text-xs font-medium ${showStatus ? 'text-green-600' : 'text-[#74717a] dark:text-[#9b9aa1]'}`}>
                  {subtitle}
                </p>
              )}
            </div>
          </>
        )}

        {/* Custom center content */}
        {centerContent}
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-2">
        {rightActions}
      </div>
    </div>
  );
};

// Example usage for Chat







export const ChatHeader = ({ onToggleInfo }) => {
  const dispatch = useDispatch(); // Initialize Dispatch
  
  const activeConversationId = useSelector((state) => state.chat.activeConversationId);
  const conversations = useSelector((state) => state.chat.conversations);
  const currentUserId = useSelector((state) => state.auth.user?._id);

  const conversation = conversations.find((c) => c._id === activeConversationId);
  const otherUser = conversation?.participants.find((p) => p._id !== currentUserId);

  if (!activeConversationId) return null;

  // HANDLE BACK CLICK (Mobile Only)
  const handleBack = () => {
    dispatch(setActiveConversation(null)); // Clear active chat -> ChatLayout shows Sidebar again
  };

  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-6 bg-white border-b border-black/5 w-full flex-shrink-0">
      
      {/* Left Section */}
      <div className="flex items-center gap-3">
        
        {/* BACK BUTTON: Visible only on Mobile (md:hidden) */}
        <button 
          onClick={handleBack}
          className="md:hidden p-1 -ml-2 text-[#74717a] hover:bg-gray-100 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        {/* User Info */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={onToggleInfo}>
          <img
            src={otherUser?.avatar || "/default-avatar.png"}
            alt={otherUser?.displayName}
            className="w-9 h-9 rounded-full object-cover"
          />
          <div>
            <h2 className="text-[#141415] font-bold text-sm">
              {otherUser?.displayName || "Unknown"}
            </h2>
            <span className="text-xs text-green-500 font-medium">
              Active now
            </span>
          </div>
        </div>
      </div>

      {/* Right Icons */}
      <button onClick={onToggleInfo} className="p-2 text-[#82708f] hover:bg-purple-50 rounded-full transition-colors">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
      </button>

    </header>
  );
};






// ----------------------------------------------------------------------
// 1. CONTACTS HEADER
// ----------------------------------------------------------------------
export const ContactHeader = ({ onAddContact, onSearch }) => {
  const navigate = useNavigate(); // 2. Initialize hook

  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-6 bg-white border-b border-black/5 w-full flex-shrink-0">
      
      <div className="flex items-center gap-3">
        {/* BACK BUTTON (Mobile Only) */}
        <button 
          onClick={() => navigate("/chat")}
          className="md:hidden p-1 -ml-2 text-[#74717a] hover:bg-gray-100 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <div>
          <h1 className="text-lg font-bold text-[#141415]">Contacts</h1>
          <p className="text-xs text-[#74717a]">Manage your connections</p>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 md:gap-3">
        <button
          onClick={onSearch}
          className="p-2 text-[#74717a] hover:bg-gray-100 hover:text-[rgb(var(--primary))] rounded-full transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>

        <button
          onClick={onAddContact}
          className="flex items-center gap-2 px-3 md:px-4 py-2 bg-[rgb(var(--primary))] text-white text-sm font-semibold rounded-full hover:brightness-110 active:scale-95 transition-all shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
          <span onClick={() => navigate("/onboarding/invite")} className="hidden md:inline">Add Contact</span>
          <span onClick={() => navigate("/onboarding/invite")} className="md:hidden">Add</span>
        </button>
      </div>
    </header>
  );
};


// ----------------------------------------------------------------------
// 2. SETTINGS HEADER
// ----------------------------------------------------------------------
export const ProfileSettingsHeader = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());          // remove token
    dispatch(resetAuth());       // clear auth state
    dispatch(resetChat());       // clear chats/messages
    dispatch(resetContacts());   // clear contacts/invites

    navigate("/login", { replace: true });
  };

  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-6 bg-white border-b border-black/5 w-full flex-shrink-0">
      
      <div className="flex items-center gap-3">
        {/* BACK BUTTON (Mobile Only) */}
        <button 
          onClick={() => navigate("/chat")}
          className="md:hidden p-1 -ml-2 text-[#74717a] hover:bg-gray-100 rounded-full"
        >
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
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <h1 className="text-lg font-bold text-[#141415]">Settings</h1>
        <div className="hidden md:block h-4 w-px bg-gray-300 mx-2"></div>
        <p className="hidden md:block text-sm text-[#74717a]">
          {user?.displayName || "My Profile"}
        </p>
      </div>

      <div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-[#ef4444] bg-red-50 hover:bg-red-100 rounded-full transition-colors text-sm font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
};

