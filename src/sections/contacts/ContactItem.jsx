import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveConversation } from "../../app/chat/chatSlice";

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMessage = () => {
    if (!contact.conversationId) {
      console.error("No conversation found for this contact");
      return;
    }

    // ✅ Use the conversationId from the contact object
    dispatch(setActiveConversation(contact.conversationId));
    navigate("/chat");
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-black/5 hover:shadow-sm transition">
      <div className="flex items-center gap-4">
        <img
          src={contact.avatar}
          alt={contact.name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-[#141415]">
            {contact.name}
          </h3>
          <p className="text-sm text-[#74717a]">
            {contact.status}
          </p>
        </div>
      </div>

      <button
        onClick={handleMessage}
        className="px-4 h-10 rounded-full bg-[rgb(var(--primary))] text-white text-sm font-semibold hover:brightness-110 transition"
      >
        Message
      </button>
    </div>
  );
};

export default ContactItem;