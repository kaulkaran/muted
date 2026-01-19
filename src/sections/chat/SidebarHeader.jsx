import React from "react";

const SidebarHeader = () => {
  return (
    <div className="h-20 flex items-center px-6 gap-3">
      <div className="w-8 h-8 rounded-[10px] bg-[rgb(var(--primary))] flex items-center justify-center shadow-lg shadow-[rgb(var(--primary)/0.2)]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-white">
          <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 9.75a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 9.75a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM14.625 10.875a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z" clipRule="evenodd" />
        </svg>
      </div>
      <h1 className="text-xl font-bold text-[#141415] dark:text-white tracking-tight">
        Muted
      </h1>
    </div>
  );
};

export default SidebarHeader;