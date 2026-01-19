import React from "react";

const ProgressHeader = ({ step, totalSteps }) => {
  return (
    <div className="mb-8">
      {/* Top Label Row */}
      <div className="flex justify-between items-end mb-3">
        <span className="text-[11px] font-bold text-[rgb(var(--primary))] tracking-[0.15em] uppercase">
          Onboarding
        </span>
        <span className="text-xs font-medium text-[#74717a] dark:text-[#a09da6]">
          {Math.round((step / totalSteps) * 100)}% Complete
        </span>
      </div>

      {/* Segmented Bars */}
      <div className="flex gap-2 h-1.5">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`
              h-full flex-1 rounded-full transition-all duration-500 ease-out
              ${
                index + 1 <= step
                  ? "bg-[rgb(var(--primary))]"
                  : "bg-black/5 dark:bg-white/10"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressHeader;