import React from "react";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <nav
      className="
        fixed top-0 w-full z-50
        h-20 text-black
        border-b border-black/5 dark:border-white/5
        bg-[rgb(var(--bg-light)/0.8)] backdrop-blur-xl
        flex items-center
      "
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* 1. Brand Logo (Dashboard Link) */}
        <Link to="/app" className="flex items-center gap-3 group cursor-pointer select-none">
          <div
            className="
              p-2 rounded-[var(--radius)]
              bg-[rgb(var(--primary))] 
              flex items-center justify-center
              shadow-lg shadow-[rgb(var(--primary)/0.3)]
              transition-transform duration-300 
              group-hover:scale-110 group-hover:rotate-3 
              group-active:scale-95
            "
          >
            <svg
              className="size-5 text-white"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                fill="currentColor"
              />
            </svg>
          </div>
            <h2 className="text-xl font-bold tracking-tight text-black">
              Muted
            </h2>
        </Link>

        {/* 2. App Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          
          {/* Settings Link (Icon Style) */}
          <Link
            to="/settings"
            className="
              flex items-center gap-2 px-3 py-2 
              rounded-xl
              text-sm font-bold text-[rgb(var(--text-light)/0.7)] 
              hover:text-[rgb(var(--primary))] hover:bg-[rgb(var(--primary)/0.05)]
              transition-all duration-200
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 5.389c-.421.577-.965.974-1.581 1.16v.002a6.856 6.856 0 0 0-2.564 1.555 3.288 3.288 0 0 0-.61 3.357c.306.666.5 1.417.5 2.206s-.194 1.54-.5 2.206a3.286 3.286 0 0 0 .61 3.357c.846.83 1.84 1.366 2.564 1.555v.002c.616.186 1.16.583 1.58 1.16l.18 1.573c.15.903.932 1.566 1.849 1.566h1.766c.917 0 1.699-.663 1.85-1.567l.178-1.572c.421-.577.965-.974 1.581-1.16v-.002a6.859 6.859 0 0 0 2.564-1.555 3.286 3.286 0 0 0 .61-3.357c-.306-.666-.5-1.417-.5-2.206s.194-1.54.5-2.206a3.288 3.288 0 0 0-.61-3.357 6.856 6.856 0 0 0-2.564-1.555v-.002c-.616-.186-1.16-.583-1.58-1.16l-.178-1.573a1.883 1.883 0 0 0-1.85-1.566h-1.766ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clipRule="evenodd" />
            </svg>
            <span className="hidden sm:inline">Settings</span>
          </Link>

          {/* Profile Avatar Trigger */}
          <button 
            className="
              relative group
              w-10 h-10 
              rounded-full 
              bg-white dark:bg-[#2c2c35]
              border border-black/5 dark:border-white/10
              flex items-center justify-center
              overflow-hidden
              transition-all duration-300
              hover:ring-2 hover:ring-[rgb(var(--primary)/0.5)] hover:ring-offset-2 hover:ring-offset-[rgb(var(--bg-light))]
            "
          >
             {/* Fallback Initials (or use an <img> tag here) */}
             <span className="text-sm font-bold text-[rgb(var(--primary))] group-hover:scale-110 transition-transform">
               JD
             </span>
             
             {/* Online Status Dot */}
             <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-green-500 border-[2px] border-white dark:border-[#2c2c35] rounded-full"></span>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;