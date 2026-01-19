import React from "react";

const PublicFooter = () => {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-[rgb(var(--bg-light))] border-t border-black/5">
      
      {/* Decorative Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[rgb(var(--primary)/0.03)] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
        
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand & Mission (Spans 4 columns) */}
          <div className="md:col-span-4 flex flex-col items-start gap-6">
            <div className="flex items-center gap-3 select-none">
              <div
                className="
                  p-2 rounded-[var(--radius)]
                  bg-[rgb(var(--primary))]
                  flex items-center justify-center
                  shadow-lg shadow-[rgb(var(--primary)/0.2)]
                "
              >
                <svg className="size-5 text-white" viewBox="0 0 48 48" fill="none">
                  <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[rgb(var(--text-light))]">
                Muted
              </h2>
            </div>
            
            <p className="text-[#767378] leading-relaxed max-w-xs">
              A dedicated space for meaningful connection. Built for humans, not data points.
            </p>

            {/* Socials */}
            <div className="flex gap-4">
              {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                <a 
                  key={social}
                  href="#"
                  className="
                    p-2 rounded-full 
                    bg-white border border-black/5 
                    text-[#767378] 
                    hover:text-[rgb(var(--primary))] hover:border-[rgb(var(--primary)/0.3)] hover:-translate-y-1
                    transition-all duration-300 shadow-sm
                  "
                  aria-label={social}
                >
                   {/* Placeholder Icon */}
                   <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Section (Spans 4 columns) */}
          <div className="md:col-span-4 flex justify-between md:justify-around gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[rgb(var(--text-light))]">Product</h4>
              <a href="#" className="text-sm text-[#767378] hover:text-[rgb(var(--primary))] transition-colors">Features</a>
              <a href="#" className="text-sm text-[#767378] hover:text-[rgb(var(--primary))] transition-colors">Pricing</a>
              <a href="#" className="text-sm text-[#767378] hover:text-[rgb(var(--primary))] transition-colors">Download</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[rgb(var(--text-light))]">Company</h4>
              <a href="#" className="text-sm text-[#767378] hover:text-[rgb(var(--primary))] transition-colors">About</a>
              <a href="#" className="text-sm text-[#767378] hover:text-[rgb(var(--primary))] transition-colors">Manifesto</a>
              <a href="#" className="text-sm text-[#767378] hover:text-[rgb(var(--primary))] transition-colors">Contact</a>
            </div>
          </div>

          {/* Newsletter (Spans 4 columns) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-bold text-[rgb(var(--text-light))]">Stay in the loop</h4>
            <p className="text-sm text-[#767378]">
              Join our newsletter to get updates on our private beta status.
            </p>
            
            <form className="flex items-center gap-2 mt-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="
                  w-full px-4 h-11 
                  rounded-[var(--radius)] 
                  bg-white border border-black/10 
                  text-sm outline-none
                  focus:border-[rgb(var(--primary))] focus:ring-1 focus:ring-[rgb(var(--primary))]
                  transition-all
                "
              />
              <button 
                className="
                  h-11 px-5 
                  rounded-[var(--radius)] 
                  bg-[rgb(var(--primary))] text-white text-sm font-bold
                  hover:brightness-110 active:scale-95
                  transition-all
                "
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm font-medium text-[#767378]">
            © 2026 Muted Messaging.
          </div>
          
          <div className="flex gap-6">
             <a href="#" className="text-xs font-semibold text-[#767378] hover:text-[rgb(var(--primary))]">Privacy Policy</a>
             <a href="#" className="text-xs font-semibold text-[#767378] hover:text-[rgb(var(--primary))]">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default PublicFooter;