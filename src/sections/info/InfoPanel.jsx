// InfoPanel.jsx
import React, { useRef } from "react";
import InfoTabs from "./InfoTabs";
import MediaGrid from "./MediaGrid";
import { useDispatch } from "react-redux";
import { uploadMedia } from "../../app/media/mediaThunks"; // ✅ fixed

const InfoPanel = ({ onClose }) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleOpenPicker = () => fileInputRef.current?.click();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    dispatch(uploadMedia(file));
    e.target.value = "";
  };

  return (
    <aside className="w-full h-full bg-[#18181b] text-white flex flex-col border-l border-white/5">
      <input
        ref={fileInputRef}
        type="file"
        hidden
        onChange={handleFileChange}
        accept="image/*,video/*"
      />

      {/* Header */}
      <div className="flex items-center justify-between p-6 pb-2">
        <h2 className="text-lg font-bold">Shared Content</h2>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="px-6">
        <InfoTabs />
      </div>

      <div className="px-6 flex-1 overflow-y-auto scrollbar-hide">
        <MediaGrid />
      </div>

      {/* Footer Action */}
      <div className="p-6 mt-auto">
        <button
          onClick={handleOpenPicker}
          className="w-full h-12 rounded-[14px] bg-[rgb(var(--primary))] hover:brightness-110 text-white font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 active:scale-[0.98]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          </svg>
          Add Files
        </button>
      </div>
    </aside>
  );
};

export default InfoPanel;
