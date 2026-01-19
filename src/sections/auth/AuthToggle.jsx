import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthToggle = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we are on the login page
  const isLogin = location.pathname === "/login" || location.pathname === "/";

  return (
    <div className="flex h-12 w-full items-center justify-center rounded-xl bg-[rgb(var(--bg-light))] p-1">
      <button
        onClick={() => navigate("/login")}
        className={`flex h-full grow items-center justify-center rounded-lg text-sm font-medium transition-all
          ${
            isLogin
              ? "bg-white dark:bg-[rgb(var(--primary)/0.2)] shadow-sm text-[#141415] dark:text-white"
              : "text-[#74717a] hover:text-[#141415] dark:text-[#a09da6]"
          }`}
      >
        Sign In
      </button>

      <button
        onClick={() => navigate("/register")}
        className={`flex h-full grow items-center justify-center rounded-lg text-sm font-medium transition-all
          ${
            !isLogin
              ? "bg-white dark:bg-[rgb(var(--primary)/0.2)] shadow-sm text-[#141415] dark:text-white"
              : "text-[#74717a] hover:text-[#141415] dark:text-[#a09da6]"
          }`}
      >
        Create Account
      </button>
    </div>
  );
};

export default AuthToggle;