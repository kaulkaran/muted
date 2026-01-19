import React from "react";

const features = [
  {
    title: "Private by design",
    desc: "End-to-end encryption that respects your space. Your data never leaves your device without permission.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    title: "Focused conversations",
    desc: "No feeds, no ads, no algorithms. Just the people and topics that actually matter to you.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: "Smart organization",
    desc: "Find memories by meaning, not date. Our local AI helps you retrieve context instantly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  }
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      
      {/* Decorative Background Blur - kept subtle and behind everything */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgb(var(--primary)/0.03)] blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          {/* FIXED: Removed 'dark:text-white' to ensure text is visible on light background */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[rgb(var(--text-light))]">
            Reclaim your <span className="text-[rgb(var(--primary))]">digital peace.</span>
          </h2>
          <p className="text-lg text-[#767378] max-w-xl leading-relaxed">
            We stripped away the noise to bring you a communication tool that values your time and privacy above all else.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="
                group
                p-8
                rounded-[var(--radius-xl)]
                bg-white
                border border-transparent hover:border-[rgb(var(--primary)/0.1)]
                soft-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                transition-all duration-300 ease-out
                hover:-translate-y-2
              "
            >
              {/* Icon Container */}
              <div 
                className="
                  w-12 h-12 mb-6
                  rounded-[var(--radius)]
                  bg-[rgb(var(--primary)/0.1)]
                  text-[rgb(var(--primary))]
                  flex items-center justify-center
                  group-hover:scale-110 group-hover:bg-[rgb(var(--primary))] group-hover:text-white
                  transition-all duration-300
                "
              >
                {f.icon}
              </div>

              {/* FIXED: Removed 'dark:text-white' here as well */}
              <h3 className="text-xl font-bold mb-3 text-[rgb(var(--text-light))]">
                {f.title}
              </h3>

              <p className="text-[#767378] leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;