import { useOutletContext } from "react-router-dom";
import ConversationArea from "../../sections/coversation/ConversationArea";
import { useSelector } from "react-redux";
import ConversationList from "../../sections/chat/ConversationList";

const MessagesPage = () => {
  const outlet = useOutletContext() || {};

  const {
    isSidebarOpen = true,
    toggleSidebar = () => {},
    toggleInfo = () => {},
  } = outlet;

  const activeConversationId = useSelector(
    (state) => state.chat.activeConversationId
  );

  return (
    <div className="flex h-full w-full">
      {/* LEFT: Conversations */}
      <ConversationList />

      {/* RIGHT: Chat */}
      {activeConversationId ? (
        <ConversationArea
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={toggleSidebar}
          onToggleInfo={toggleInfo}
        />
      ) : (
        <div className="flex-1 flex items-center justify-center text-[#74717a]">
          Select a conversation to start chatting
        </div>
      )}
    </div>
  );
};

export default MessagesPage;
