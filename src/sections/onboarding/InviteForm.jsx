import React, { useState } from "react";
import ProgressHeader from "./ProgressHeader";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { inviteByEmail } from "../../app/contacts/contactsThunk";

const InviteForm = ({ step, totalSteps }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInvite = async () => {
    if (!email) return;

    try {
      setLoading(true);
      await dispatch(inviteByEmail(email));
      navigate("/chat");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-black/5 overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)]">
      <div className="p-10 md:p-12">
        <ProgressHeader step={step} totalSteps={totalSteps} />

        <div className="mt-8 mb-10 text-center">
          <h1 className="text-3xl font-bold text-[#141415] tracking-tight mb-4">
            Who are you talking to?
          </h1>
          <p className="text-base text-[#74717a] leading-relaxed max-w-sm mx-auto">
            Enter their email to send an invite, or share a private link manually.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <label className="block text-[11px] font-bold text-[rgb(var(--primary))] uppercase tracking-[0.15em] ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 h-16 rounded-2xl bg-[#f8f7f7] text-[#141415] placeholder:text-[#74717a]/50 border-none outline-none focus:ring-2 focus:ring-[rgb(var(--primary)/0.2)] transition-all text-lg font-medium"
            />
          </div>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-black/5"></div>
            <span className="flex-shrink mx-4 text-[10px] font-bold text-[#74717a] uppercase tracking-widest">
              or
            </span>
            <div className="flex-grow border-t border-black/5"></div>
          </div>

          <button
            type="button"
            className="w-full h-14 rounded-2xl bg-[#f8f7f7] text-[#141415] font-bold text-sm hover:bg-black/5 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">link</span>
            Generate private invite link
          </button>
        </div>

        <div className="mt-10">
          <button
            onClick={handleInvite}
            disabled={loading}
            className="w-full h-16 flex items-center justify-center gap-2 bg-[rgb(var(--primary))] hover:brightness-110 text-white rounded-2xl font-bold text-base tracking-wide transition-all shadow-[0_10px_30px_-10px_rgb(var(--primary)/0.5)] active:scale-[0.98]"
          >
            <span>{loading ? "Sending Invite..." : "Start Conversation"}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button
            onClick={() => navigate("/onboarding/privacy")}
            className="w-full mt-6 text-xs font-medium text-[#74717a] hover:text-[rgb(var(--primary))] transition-colors"
          >
            Back to previous step
          </button>
        </div>
      </div>

      <div className="bg-[#fcfcfc] px-10 py-4 flex items-center justify-between border-t border-black/5">
        <span className="text-[10px] font-bold tracking-widest text-[#74717a] uppercase">
          Setup Status
        </span>
        <span className="text-[10px] font-bold tracking-widest text-[rgb(var(--primary))] uppercase">
          Ready
        </span>
      </div>

      <div className="h-1 w-full bg-[rgb(var(--primary))]"></div>
    </div>
  );
};

export default InviteForm;
