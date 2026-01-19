import React, { useState, useEffect, useRef } from "react";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Logic to trigger animation when element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run animation only once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 md:px-10">
      <div
        ref={sectionRef}
        className={`
          relative overflow-hidden
          max-w-[1000px] mx-auto
          rounded-[2.5rem]
          text-center py-24 px-6 md:px-20
          bg-[#1c1c1f]
          border border-white/10
          shadow-2xl
          transform transition-all duration-1000 ease-out
          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }
        `}
      >
        {/* Decorative Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[rgb(var(--primary)/0.15)] blur-[100px] rounded-full pointer-events-none" />
        
        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Ready for a <span className="text-[rgb(var(--primary))]">calmer</span> way to connect?
          </h2>

          <p className="text-lg text-neutral-400 mb-10 max-w-lg leading-relaxed">
            Join thousands of mindful communicators who have switched to a noise-free environment today.
          </p>

          <button
            className="
              group
              h-14 px-10 md:px-12
              rounded-[var(--radius-xl)]
              bg-[rgb(var(--primary))]
              text-white font-bold text-lg
              shadow-[0_0_20px_-5px_rgb(var(--primary)/0.4)]
              transition-all duration-300 ease-out
              hover:-translate-y-1 
              hover:shadow-[0_0_30px_-5px_rgb(var(--primary)/0.6)]
              hover:scale-105
              active:scale-95
            "
          >
            Start a private conversation
            {/* Arrow Icon that slides slightly on hover */}
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* Subtle texture overlay (optional noise) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>
      </div>
    </section>
  );
};

export default CTASection;