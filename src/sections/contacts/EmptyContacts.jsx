import { useNavigate } from "react-router-dom";

const EmptyContacts = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-20">
      <h3 className="text-lg font-semibold text-[#141415] mb-2">
        No contacts yet
      </h3>
      <p className="text-sm text-[#74717a] mb-6">
        Invite someone to start a private conversation.
      </p>

      <button
        onClick={() => navigate("/onboarding/invite")}
        className="px-6 h-12 rounded-xl bg-[rgb(var(--primary))] text-white font-semibold hover:brightness-110 transition"
      >
        Invite Contact
      </button>
    </div>
  );
};

export default EmptyContacts;
