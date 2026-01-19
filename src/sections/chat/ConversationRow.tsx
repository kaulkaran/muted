// @ts-nocheck
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setActiveConversation } from "../../app/chat/chatSlice";
import { fetchMessages } from "../../app/chat/chatThunks";

const ConversationRow = ({ conversation, active }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!conversation?.id) {
      console.warn("Conversation id missing", conversation);
      return;
    }

    dispatch(setActiveConversation(conversation.id));
    dispatch(fetchMessages(conversation.id));
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full flex items-center gap-3 p-3 rounded-xl bg-gray-50
        ${active ? "bg-black/10" : "hover:bg-black/10"}
      `}
    >
      <img
        src={conversation.avatar}
        className="w-10 h-10 rounded-full"
        alt=""
      />

      <div className="flex-1">
        <h4 className="font-semibold text-sm">
          {conversation.name}
        </h4>
        <p className="text-xs text-[#74717a]">
          {conversation.lastMessage}
        </p>
      </div>
    </button>
  );
};

ConversationRow.propTypes = {
  conversation: PropTypes.shape({
    id: PropTypes.string.isRequired,   // ✅ FIXED
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    lastMessage: PropTypes.string,
  }).isRequired,
  active: PropTypes.bool,
};

export default ConversationRow;
