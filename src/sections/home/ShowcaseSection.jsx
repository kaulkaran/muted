import React, { useState, useEffect, useRef } from "react";

const ShowcaseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animation when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        
        {/* Header Text */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[rgb(var(--text-light))]">
            The interface of <span className="text-[rgb(var(--primary))]">silence.</span>
          </h2>
          <p className="text-[#767378]">
            No clutter. No metrics. Just the conversation.
          </p>
        </div>

        {/* The "App" Container */}
        <div
          ref={sectionRef}
          className={`
            relative mx-auto max-w-4xl
            rounded-[2rem]
            border border-neutral-200/60 dark:border-white/10
            bg-white/50 dark:bg-neutral-900/50
            backdrop-blur-xl
            shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]
            transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
          `}
        >
          {/* Window Controls (Mac-style) */}
          <div className="h-12 border-b border-neutral-200/50 dark:border-white/5 flex items-center px-6 gap-2">
            <div className="size-3 rounded-full bg-red-400/80"></div>
            <div className="size-3 rounded-full bg-amber-400/80"></div>
            <div className="size-3 rounded-full bg-green-400/80"></div>
            
            {/* Encryption Badge */}
            <div className="ml-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgb(var(--primary)/0.1)]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3 text-[rgb(var(--primary))]">
                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-semibold text-[rgb(var(--primary))]">End-to-End Encrypted</span>
            </div>
          </div>

          {/* Chat Area */}
          <div className="p-8 md:p-12 flex flex-col gap-6 min-h-[400px] relative">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* Message 1 (Incoming) */}
            <div className={`flex flex-col items-start max-w-[80%] transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
              <div className="bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-white/5 p-4 rounded-2xl rounded-tl-none shadow-sm">
                <p className="text-[rgb(var(--text-light))] dark:text-neutral-200 text-sm md:text-base leading-relaxed">
                  I was tired of the noise on other apps. The constant notifications were killing my focus.
                </p>
              </div>
              <span className="text-xs text-neutral-400 mt-2 ml-1">09:41 AM</span>
            </div>

            {/* Message 2 (Outgoing - Primary Color) */}
            <div className={`self-end flex flex-col items-end max-w-[80%] transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>
              <div className="bg-[rgb(var(--primary))] p-4 rounded-2xl rounded-tr-none shadow-lg shadow-[rgb(var(--primary)/0.2)]">
                <p className="text-white text-sm md:text-base leading-relaxed">
                  That's why I built this. No feeds, no ads. Just a quiet place to talk. 
                </p>
              </div>
              <span className="text-xs text-neutral-400 mt-2 mr-1">Read 09:42 AM</span>
            </div>

             {/* Message 3 (Incoming - with typing indicator) */}
             <div className={`flex flex-col items-start max-w-[80%] transition-all duration-700 delay-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
              <div className="bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-white/5 p-4 rounded-2xl rounded-tl-none shadow-sm">
                <p className="text-[rgb(var(--text-light))] dark:text-neutral-200 text-sm md:text-base leading-relaxed">
                  It feels... peaceful.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative ambient glow behind the mock-up */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[rgb(var(--primary)/0.1)] blur-[100px] -z-10 rounded-full" />
        
      </div>
    </section>
  );
};

export default ShowcaseSection;