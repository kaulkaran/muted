// @ts-nocheck
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // 1. Import hook
import { setActiveConversation } from "../../app/chat/chatSlice";
import { fetchMessages } from "../../app/chat/chatThunks";

const ConversationRow = ({ conversation, active }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // 2. Initialize hook

  const handleClick = () => {
    if (!conversation?.id) return;

    // 1. Set the active chat in Redux
    dispatch(setActiveConversation(conversation.id));
    dispatch(fetchMessages(conversation.id));

    // 2. FORCE NAVIGATION to the chat page
    // This fixes the bug where you stay on "Settings" after clicking a user
    navigate("/chat");
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-full flex items-center gap-3 px-4 py-3 transition-colors border-b border-gray-50
        ${active 
          ? "bg-[rgb(var(--primary)/0.08)] border-l-4 border-l-[rgb(var(--primary))]" 
          : "bg-white hover:bg-gray-50 border-l-4 border-l-transparent"} 
      `}
    >
      <img
        src={conversation.avatar}
        className="w-12 h-12 rounded-full object-cover border border-gray-100"
        alt=""
      />

      <div className="flex-1 text-left min-w-0">
        <h4 className="text-sm font-semibold text-[#141415] truncate">
          {conversation.name}
        </h4>
        <p className={`text-xs truncate mt-0.5 ${active ? "text-[rgb(var(--primary))]" : "text-gray-500"}`}>
          {conversation.lastMessage}
        </p>
      </div>
    </button>
  );
};

ConversationRow.propTypes = {
  conversation: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    lastMessage: PropTypes.string,
  }).isRequired,
  active: PropTypes.bool,
};

export default ConversationRow;