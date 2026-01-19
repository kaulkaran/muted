import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 hero-gradient text-center overflow-hidden">
      <div className="max-w-[960px] mx-auto px-6">
        
        {/* Badge - Delays 100ms */}
        <div
          className={`
            inline-flex items-center gap-2 px-3 py-1 mb-8
            rounded-full
            bg-[rgb(var(--primary)/0.10)]
            text-[rgb(var(--primary))]
            text-xs font-bold uppercase
            transform transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          Now in Private Beta
        </div>

        {/* Heading - Delays 300ms */}
        <h1 
          className={`
            text-4xl md:text-7xl font-extrabold tracking-tight mb-8
            transform transition-all duration-1000 delay-300 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          Privacy is the <br />
          <span className="italic text-[rgb(var(--primary))]">
            new luxury.
          </span>
        </h1>

        {/* Description - Delays 500ms */}
        <p
          className={`
            text-lg md:text-xl
            text-[#767378]
            max-w-[640px] mx-auto mb-12
            transform transition-all duration-1000 delay-500 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          A dedicated space for 1-to-1 connection. No distractions, just presence.
        </p>

        {/* Actions - Delays 700ms */}
        <div 
          className={`
            flex flex-col sm:flex-row justify-center gap-4
            transform transition-all duration-1000 delay-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <button
            className="
              h-14 px-10 rounded-[var(--radius-xl)]
              bg-[rgb(var(--primary))]
              text-white
              soft-shadow
              transition-transform duration-300 hover:-translate-y-1
            "
          >
            Start a private conversation
          </button>

          <button
            className="
              h-14 px-10 rounded-[var(--radius-xl)]
              border border-black/10 dark:border-white/10
              transition-transform duration-300 hover:-translate-y-1
            "
          >
            Learn how it works
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;