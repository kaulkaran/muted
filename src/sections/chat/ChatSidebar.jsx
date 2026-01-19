
import { NavLink } from "react-router-dom";
import { IconContacts, IconFiles, IconMessages, IconSettings } from "./icons/AlIcons";
import { useSelector } from "react-redux";


const SidebarItem = ({ to, icon, label, count }) => {

  return (
    <NavLink
      to={to}
      end={to === "/chat"} // Only use 'end' for the base /chat route
      className={({ isActive }) => `
        w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl
        transition-all duration-200 group
        ${isActive
          ? "bg-[rgb(var(--primary)/0.12)] text-[rgb(var(--primary))]"
          : "text-[#74717a] hover:bg-black/5 dark:hover:bg-white/5"
        }
      `}
    >
      {icon}
      <span className="font-bold text-sm flex-1 text-left">{label}</span>
      {count && (
        <span className="text-[10px] font-bold bg-[rgb(var(--primary))] text-white px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </NavLink>
  );
};




const ChatSidebar = ({ onClose }) => {

  const user = useSelector(state => state.auth.user);
  const conversations = useSelector(state => state.chat.conversations || []);



  return (
    <aside className="w-full h-full flex flex-col bg-white  border-r border-black/5 dark:border-white/5">

      {/* HEADER */}
      <div className="h-20 flex items-center justify-between px-6 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[10px] bg-[rgb(var(--primary))] flex items-center justify-center shadow-lg shadow-[rgb(var(--primary)/0.2)]">
            <svg className="size-5 text-white" viewBox="0 0 48 48" fill="none">
              <path
                d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-[#141415]">
            Muted
          </h1>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-[#74717a] hover:bg-black/5 rounded-full"
        >
          ✕
        </button>
      </div>

      {/* NAV */}
      <div className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
        <SidebarItem
          to="/chat"
          label="Messages"
          count={conversations.length}
          icon={
            <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 9H17M10 13H17M7 9H7.01M7 13H7.01M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z" stroke="#82708f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          }
        />


        <SidebarItem
          to="/chat/contacts"
          label="Contacts"
          icon={
            <svg className="size-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 6 v -1 h -3 v -4 h 3 v -1.972656 c -0.164062 -0.019532 -0.332031 -0.027344 -0.5 -0.027344 z m 4.5 0 v 3 h -3 v 2 h 3 v 3 h 2 v -3 h 3 v -2 h -3 v -3 z m 0 0" fill="#82708f"></path> </g></svg>
          }
        />

        <SidebarItem
          to="/chat/files"
          label="Files"
          icon={
            <svg className="size-6" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 0H5V12H15V4L11 0Z" fill="#82708f"></path> <path d="M1 4V16H11V14H3V4H1Z" fill="#82708f"></path> </g></svg>
          }
        />

        <SidebarItem
          to="/chat/settings"
          label="Settings"
          icon={
            <svg className="size-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#82708f" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"></path></g></svg>
          }
        />
      </div>

      {/* PROFILE */}
      <div className="p-6 border-t border-black/5">
        <div className="flex items-center gap-3">
          <img
            src={user?.avatar || "/default-avatar.png"}
            className="w-10 h-10 rounded-full object-cover"
            alt=""
          />
          <div>
            <h4 className="text-sm font-bold text-[#141415]">
              {user?.displayName || "Guest"}

            </h4>
            <p className="text-xs text-[#74717a]">
              Pro Account
            </p>
          </div>
        </div>
      </div>

    </aside>
  );
};

export default ChatSidebar;
