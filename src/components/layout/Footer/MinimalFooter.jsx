import React from "react";

const MinimalFooter = () => {
  return (
    <footer className="w-full py-8 mt-auto border-t border-black/5 dark:border-white/5 bg-transparent">
      <div className="max-w-[440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright */}
        <div className="text-xs font-medium text-[#767378] dark:text-[#a09da6]">
          © 2026 Muted.
        </div>
        
        {/* Minimal Links */}
        <div className="flex gap-6">
           <a 
             href="#" 
             className="text-xs font-semibold text-[#767378] dark:text-[#a09da6] hover:text-[rgb(var(--primary))] transition-colors"
           >
             Privacy
           </a>
           <a 
             href="#" 
             className="text-xs font-semibold text-[#767378] dark:text-[#a09da6] hover:text-[rgb(var(--primary))] transition-colors"
           >
             Terms
           </a>
           <a 
             href="#" 
             className="text-xs font-semibold text-[#767378] dark:text-[#a09da6] hover:text-[rgb(var(--primary))] transition-colors"
           >
             Help
           </a>
        </div>
      </div>
    </footer>
  );
};

export default MinimalFooter;