import React, { useState } from "react";
import ProgressHeader from "./ProgressHeader";
import { useNavigate } from "react-router-dom";

// Toggle Switch Component (Optimized for reuse)
const Toggle = ({ enabled, onChange }) => (
  <button
    onClick={() => onChange(!enabled)}
    className={`relative inline-flex h-7 w-12 md:h-8 md:w-14 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary)/0.2)] ${
      enabled ? "bg-[rgb(var(--primary))]" : "bg-black/10"
    }`}
  >
    <span
      className={`inline-block h-5 w-5 md:h-6 md:w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
        enabled ? "translate-x-6 md:translate-x-7" : "translate-x-1"
      }`}
    />
  </button>
);

const PrivacyControls = ({ step, totalSteps }) => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    invisible: true,
    readReceipts: false,
    encryptedMedia: true,
  });

  const toggle = (key) => setSettings({ ...settings, [key]: !settings[key] });

  return (
    // MAIN CARD: Responsive container matching InviteForm
    <div className="w-full max-w-xl mx-auto bg-white rounded-3xl md:rounded-[2.5rem] border border-black/5 overflow-hidden shadow-xl shadow-black/5">
      
      {/* Content Area */}
      <div className="p-6 md:p-12">
        
        <ProgressHeader step={step} totalSteps={totalSteps} />

        <div className="mt-6 md:mt-8 mb-8 md:mb-10 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-[#141415] tracking-tight mb-3">
            Your privacy, your control
          </h1>
          <p className="text-sm md:text-base text-[#74717a] leading-relaxed">
            Tailor your messaging experience to match your comfort level.
          </p>
        </div>

        {/* Settings List */}
        <div className="space-y-4 mb-8 md:mb-10">
          
          {/* Item 1: Invisible Status */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-[#f8f7f7] border border-transparent hover:border-black/5 transition-colors group">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[rgb(var(--primary)/0.1)] flex items-center justify-center text-[rgb(var(--primary))] group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.243 4.243Z" />
                  <path d="M6.75 12c0-.619.107-1.215.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#141415] text-sm md:text-base">Invisible Status</h3>
                <p className="text-xs md:text-sm text-[#74717a]">Hide your presence</p>
              </div>
            </div>
            <Toggle enabled={settings.invisible} onChange={() => toggle('invisible')} />
          </div>

          {/* Item 2: Read Receipts */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-[#f8f7f7] border border-transparent hover:border-black/5 transition-colors group">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[rgb(var(--primary)/0.1)] flex items-center justify-center text-[rgb(var(--primary))] group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  <path d="M14.5 4.626a.75.75 0 0 1 .208 1.04L13.57 7.375a.75.75 0 1 1-1.25-.83l1.14-1.713a.75.75 0 0 1 1.04-.206Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#141415] text-sm md:text-base">Read Receipts</h3>
                <p className="text-xs md:text-sm text-[#74717a]">Control message feedback</p>
              </div>
            </div>
            <Toggle enabled={settings.readReceipts} onChange={() => toggle('readReceipts')} />
          </div>

          {/* Item 3: Encrypted Media */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-[#f8f7f7] border border-transparent hover:border-black/5 transition-colors group">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[rgb(var(--primary)/0.1)] flex items-center justify-center text-[rgb(var(--primary))] group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#141415] text-sm md:text-base">Encrypted Media</h3>
                <p className="text-xs md:text-sm text-[#74717a]">Protect images and videos</p>
              </div>
            </div>
            <Toggle enabled={settings.encryptedMedia} onChange={() => toggle('encryptedMedia')} />
          </div>

        </div>

        {/* Actions */}
        <div>
          <button
            onClick={() => navigate("/onboarding/invite")}
            className="w-full h-14 md:h-16 bg-[rgb(var(--primary))] hover:brightness-110 text-white rounded-2xl font-bold text-base tracking-wide transition-all shadow-lg shadow-[rgb(var(--primary)/0.25)] active:scale-[0.98]"
          >
            Continue
          </button>

          <button
            onClick={() => navigate("/chat")}
            className="w-full mt-4 md:mt-5 text-xs md:text-sm font-medium text-[#74717a] hover:text-[#141415] transition-colors p-2"
          >
            Skip for now
          </button>
        </div>
      </div>

      {/* Footer Status Bar (Matches InviteForm) */}
      <div className="bg-[#fcfcfc] px-6 md:px-10 py-4 flex items-center justify-between border-t border-black/5">
        <span className="text-[10px] font-bold tracking-widest text-[#74717a] uppercase">
          Setup Status
        </span>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--primary))] animate-pulse"></div>
          <span className="text-[10px] font-bold tracking-widest text-[rgb(var(--primary))] uppercase">
            In Progress
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 w-full bg-[rgb(var(--primary))]"></div>
    </div>
  );
};

export default PrivacyControls;