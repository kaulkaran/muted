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
    // MAIN CARD: Adjusted max-width and padding for mobile
    <div className="w-full max-w-xl mx-auto bg-white rounded-3xl md:rounded-[2.5rem] border border-black/5 overflow-hidden shadow-xl shadow-black/5">
      
      {/* Content Area */}
      <div className="p-6 md:p-12">
        
        {/* Progress Header (Kept as requested) */}
        <ProgressHeader step={step} totalSteps={totalSteps} />

        <div className="mt-6 md:mt-8 mb-8 md:mb-10 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#141415] tracking-tight mb-3">
            Who are you talking to?
          </h1>
          <p className="text-sm md:text-base text-[#74717a] leading-relaxed max-w-sm mx-auto">
            Enter their email to send an invite, or share a private link manually.
          </p>
        </div>

        <div className="space-y-5 md:space-y-6">
          
          {/* Email Input */}
          <div className="space-y-2 md:space-y-3">
            <label className="block text-[10px] md:text-[11px] font-bold text-[rgb(var(--primary))] uppercase tracking-[0.15em] ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 md:px-6 h-14 md:h-16 rounded-2xl bg-[#f8f7f7] text-[#141415] placeholder:text-[#74717a]/50 border-none outline-none focus:ring-2 focus:ring-[rgb(var(--primary)/0.2)] transition-all text-base md:text-lg font-medium"
            />
          </div>

          {/* Divider */}
          {/* <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-black/5"></div>
            <span className="flex-shrink mx-4 text-[10px] font-bold text-[#74717a] uppercase tracking-widest">
              or
            </span>
            <div className="flex-grow border-t border-black/5"></div>
          </div> */}

          {/* Invite Link Button (SVG added) */}
          {/* <button
            type="button"
            className="w-full h-12 md:h-14 rounded-2xl bg-[#f8f7f7] text-[#141415] font-bold text-sm hover:bg-black/5 transition-colors flex items-center justify-center gap-2.5 active:scale-[0.98]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#74717a]">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            Generate private invite link
          </button> */}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 md:mt-10">
          <button
            onClick={handleInvite}
            disabled={loading}
            className="w-full h-14 md:h-16 flex items-center justify-center gap-2 bg-[rgb(var(--primary))] hover:brightness-110 text-white rounded-2xl font-bold text-base tracking-wide transition-all shadow-lg shadow-[rgb(var(--primary)/0.25)] active:scale-[0.98]"
          >
            <span>{loading ? "Sending Invite..." : "Start Conversation"}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>

          <button
            onClick={() => navigate("/onboarding/privacy")}
            className="w-full mt-5 md:mt-6 text-xs font-medium text-[#74717a] hover:text-[rgb(var(--primary))] transition-colors p-2"
          >
            Back to previous step
          </button>
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="bg-[#fcfcfc] px-6 md:px-10 py-4 flex items-center justify-between border-t border-black/5">
        <span className="text-[10px] font-bold tracking-widest text-[#74717a] uppercase">
          Setup Status
        </span>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--primary))] animate-pulse"></div>
          <span className="text-[10px] font-bold tracking-widest text-[rgb(var(--primary))] uppercase">
            Ready
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 w-full bg-[rgb(var(--primary))]"></div>
    </div>
  );
};

export default InviteForm;