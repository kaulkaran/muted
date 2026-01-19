import React from "react";

const AuthCard = ({ children }) => {
  return (
    <div 
      className="
        w-full max-w-[440px] 
        bg-white 
        rounded-[var(--radius-xl)] 
        
        overflow-hidden 
        soft-shadow
      "
    >
      {children}
    </div>
  );
};

export default AuthCard;