import React from "react";

const InfoTabs = () => {
  return (
    <div className="flex items-center gap-6 border-b border-black/5 pb-1 mb-6">
      <button className="text-sm font-bold text-[#141415] dark:text-white border-b-2 border-[rgb(var(--primary))] pb-2">
        Media <span className="ml-1 text-[10px] bg-[rgb(var(--primary))] text-white px-1.5 py-0.5 rounded-full">12</span>
      </button>
      <button className="text-sm font-medium text-[#74717a] pb-2 hover:text-[#141415] transition-colors">
        Files
      </button>
      <button className="text-sm font-medium text-[#74717a] pb-2 hover:text-[#141415] transition-colors">
        Links
      </button>
    </div>
  );
};

export default InfoTabs;