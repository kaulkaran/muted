import { Link } from "react-router-dom";

const AuthNavbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer select-none">
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
          <h2 className="text-xl font-bold tracking-tight text-[rgb(var(--text-light))]  transition-colors">
            Muted
          </h2>
        </Link>

        {/* Minimal Support Link */}
        <Link
          to="/support"
          className="
            flex items-center gap-2
            text-sm font-bold
            text-[rgb(var(--text-light)/0.6)] 
            hover:text-[rgb(var(--primary))] 
            transition-colors duration-200
          "
        >
          {/* REPLACED: SVG Help Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="size-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
          
          <span className="hidden sm:inline">Support</span>
        </Link>

      </div>
    </header>
  );
};

export default AuthNavbar;