import React from "react";
import { useSelector } from "react-redux";


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

export const ChatHeader = ({ onToggleInfo, onToggleSidebar, isSidebarOpen }) => {
  const activeConversationId = useSelector(
    state => state.chat.activeConversationId
  );

  const conversations = useSelector(
    state => state.chat.conversations
  );

  const currentUserId = useSelector(
    state => state.auth.user?._id
  );

  const conversation = conversations.find(
    c => c._id === activeConversationId
  );

  const otherUser = conversation?.participants.find(
    p => p._id !== currentUserId
  );

  return (
    <Header
      onToggleSidebar={onToggleSidebar}
      isSidebarOpen={isSidebarOpen}
      title={otherUser?.displayName || "Chat"}
      subtitle="Active now"
      avatar={
        otherUser?.avatar ||
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
      }
      showStatus={true}
      rightActions={
        <>
          {/* CALL */}
          <button className="p-2 text-[#74717a] hover:bg-black/5 hover:text-[rgb(var(--primary))] rounded-full transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5562 15.5477L14.1007 16.0272C14.1007 16.0272 13.0181 17.167 10.0631 14.0559C7.10812 10.9448 8.1907 9.80507 8.1907 9.80507L8.47752 9.50311C9.18407 8.75924 9.25068 7.56497 8.63424 6.6931L7.37326 4.90961C6.61028 3.8305 5.13596 3.68795 4.26145 4.60864L2.69185 6.26114C2.25823 6.71766 1.96765 7.30945 2.00289 7.96594C2.09304 9.64546 2.81071 13.259 6.81536 17.4752C11.0621 21.9462 15.0468 22.1239 16.6763 21.9631C17.1917 21.9122 17.6399 21.6343 18.0011 21.254L19.4217 19.7584C20.3806 18.7489 20.1102 17.0182 18.8833 16.312L16.9728 15.2123C16.1672 14.7486 15.1858 14.8848 14.5562 15.5477Z" fill="#82708f"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 7C22 9.76142 19.7614 12 17 12C16.2002 12 15.4442 11.8122 14.7738 11.4783C14.5956 11.3895 14.392 11.36 14.1997 11.4114L13.0867 11.7092C12.6035 11.8385 12.1615 11.3965 12.2908 10.9133L12.5886 9.80031C12.64 9.60803 12.6105 9.4044 12.5217 9.22624C12.1878 8.55582 12 7.79984 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7ZM17 4.8125C17.5178 4.8125 17.9375 5.23223 17.9375 5.75V6.0625H18.25C18.7678 6.0625 19.1875 6.48223 19.1875 7C19.1875 7.51777 18.7678 7.9375 18.25 7.9375H17.9375V8.25C17.9375 8.76777 17.5178 9.1875 17 9.1875C16.4822 9.1875 16.0625 8.76777 16.0625 8.25V7.9375H15.75C15.2322 7.9375 14.8125 7.51777 14.8125 7C14.8125 6.48223 15.2322 6.0625 15.75 6.0625H16.0625V5.75C16.0625 5.23223 16.4822 4.8125 17 4.8125Z" fill="#82708f"></path> </g></svg>
          </button>

          {/* VIDEO */}
          <button className="p-2 text-[#74717a] hover:bg-black/5 hover:text-[rgb(var(--primary))] rounded-full transition-colors">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" stroke="#82708f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
              <path d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z" stroke="#82708f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </button>

          <div className="w-px h-6 bg-black/10 dark:bg-white/10 mx-2"></div>

          {/* INFO */}
          <button
            onClick={onToggleInfo}
            className="p-2  text-[#141415] hover:brightness-110 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="#1C274C" />
            </svg>
          </button>
        </>
      }
    />
  );
};


// Example usage for Contacts
export const ContactHeader = ({ onToggleSidebar, isSidebarOpen, onAddContact, onSearch }) => {
  return (
    <Header
      onToggleSidebar={onToggleSidebar}  // Add this line
      isSidebarOpen={isSidebarOpen}
      centerContent={
        <div>
          <h3 className="font-bold text-[#141415] text-lg">Contacts</h3>
          <p className="text-xs text-[#74717a]">342 contacts</p>
        </div>
      }
      rightActions={
        <>
          <button
            onClick={onSearch}
            className="p-2 text-[#74717a] hover:bg-black/5 hover:text-[rgb(var(--primary))] rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
            </svg>
          </button>

          <button
            onClick={onAddContact}
            className="p-2 bg-[rgb(var(--primary)/0.1)] text-[rgb(var(--primary))] hover:brightness-110 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
            </svg>
          </button>
        </>
      }
    />
  );
};


export const ProfileSettingsHeader = ({ onToggleSidebar, isSidebarOpen }) => {
  const user = useSelector(state => state.auth.user);

  return (
    <Header
      onToggleSidebar={onToggleSidebar}
      isSidebarOpen={isSidebarOpen}
      title={user?.displayName || "Profile"}
      subtitle="Manage your profile"
      avatar={user?.avatar || "/default-avatar.png"}
      showStatus={false}
      rightActions={null}
    />
  );
};

