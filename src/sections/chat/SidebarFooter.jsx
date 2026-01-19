import React from "react";

const SidebarFooter = () => {
  return (
    <div className="p-6 border-t border-black/5">
      <div className="flex items-center gap-3">
        <img 
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" 
          alt="Profile" 
          className="w-10 h-10 rounded-full object-cover border border-white dark:border-[#211f26] shadow-sm"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-[#141415] dark:text-white truncate">Alex Rivers</h4>
          <p className="text-xs text-[#74717a] truncate">Pro Account</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarFooter;