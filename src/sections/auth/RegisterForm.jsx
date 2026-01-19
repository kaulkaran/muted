import React, { useState } from "react";
import AuthToggle from "./AuthToggle";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../app/auth/authThunks";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch thunk and pass navigate for redirect
    dispatch(registerUser(form))
      .unwrap()
      .then(() => {
        navigate("/chat");
      });

  };

  return (
    // CARD CONTAINER: Matches LoginForm exactly
    <div className=" w-full max-w-[440px] 
        bg-white  
        rounded-[var(--radius-xl)] 
        
        overflow-hidden 
        soft-shadow">

      {/* 1. Icon Section (Shield Icon for Registration) */}
      <div className="w-full pt-12 pb-4 flex items-center justify-center">
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Outer Ring */}
          <div className="absolute inset-0 border border-[rgb(var(--primary)/0.2)] rounded-full animate-[ping_3s_ease-in-out_infinite]"></div>
          {/* Middle Ring */}
          <div className="absolute inset-2 border border-[rgb(var(--primary)/0.4)] rounded-full"></div>
          {/* Inner Ring with Icon */}
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white  z-10">

            {/* SHIELD SVG (Secure Identity) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-12 text-[rgb(var(--primary))]"
            >
              <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.352-.172-2.67-.514-3.903a.75.75 0 0 0-.722-.515 11.208 11.208 0 0 1-7.877-3.08ZM12 5.75a.75.75 0 0 1 .75.75v2.75h2.75a.75.75 0 0 1 0 1.5h-2.75v2.75a.75.75 0 0 1-1.5 0v-2.75H8.5a.75.75 0 0 1 0-1.5h2.75V6.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>

          </div>
        </div>
      </div>

      {/* 2. Main Content Area */}
      <form onSubmit={handleSubmit}
        className="px-10 pb-12 flex flex-col gap-8">

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-[#141415] dark:text-white tracking-tight">
            Begin Your Journey
          </h1>
          <p className="text-sm text-[#74717a] dark:text-[#a09da6] max-w-[280px] mx-auto leading-relaxed">
            Create your identity for secure, meaningful connections.
          </p>
        </div>

        {/* Auth Toggle */}
        <AuthToggle />

        {/* Form Fields */}
        <div className="space-y-5">

          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-[rgb(var(--primary))] uppercase tracking-[0.15em] ml-1">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="John Doe"
                value={form.fullName}
                onChange={(e) =>
                  setForm({ ...form, fullName: e.target.value })
                }
                className="
                  w-full px-5 h-14 
                  rounded-2xl
                  bg-[#f8f7f7] 
                  text-[#141415] 
                  placeholder:text-[#74717a]/50 
                  border-none outline-none 
                  focus:ring-2 focus:ring-[rgb(var(--primary)/0.2)] 
                  transition-all text-sm font-medium
                "
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-[rgb(var(--primary))] uppercase tracking-[0.15em] ml-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="name@example.com"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }

                className="
                  w-full px-5 h-14 
                  rounded-2xl
                  bg-[#f8f7f7] 
                  text-[#141415] 
                  placeholder:text-[#74717a]/50 
                  border-none outline-none 
                  focus:ring-2 focus:ring-[rgb(var(--primary)/0.2)] 
                  transition-all text-sm font-medium
                "
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-[rgb(var(--primary))] uppercase tracking-[0.15em] ml-1">
              Choose Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className="
                  w-full px-5 h-14 
                  rounded-2xl
                  bg-[#f8f7f7] 
                  text-[#141415] 
                  placeholder:text-[#74717a]/50 
                  border-none outline-none 
                  focus:ring-2 focus:ring-[rgb(var(--primary)/0.2)] 
                  transition-all text-xl tracking-widest font-medium
                "
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button type="submit"
          className="
            w-full h-14 
            bg-[rgb(var(--primary))] hover:brightness-110 
            text-white 
            rounded-2xl
            font-bold text-sm tracking-wide 
            transition-all shadow-[0_10px_30px_-10px_rgb(var(--primary)/0.5)] 
            active:scale-[0.98]
          "
        >
          Create Private Space
        </button>

        {/* Divider */}
        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-black/5 dark:border-white/5"></div>
          <span className="flex-shrink mx-4 text-[10px] font-medium text-[#74717a] uppercase tracking-wider">or</span>
          <div className="flex-grow border-t border-black/5 dark:border-white/5"></div>
        </div>

        {/* Magic Link */}
        <button className="flex items-center justify-center gap-2.5 text-sm font-semibold text-[rgb(var(--primary))] hover:opacity-80 transition-opacity">
          {/* Magic Wand SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Zm8.25-3.75a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25H7.5a.75.75 0 0 1 0-1.5h2.25V7.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            <path d="M16.5 6a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5H17.25v2.25a.75.75 0 0 1-1.5 0V10.5h-2.25a.75.75 0 0 1 0-1.5h2.25V6.75A.75.75 0 0 1 16.5 6Z" />
          </svg>
          <span>Continue with Magic Link</span>
        </button>

        {/* Footer Text */}
        <p className="text-[10px] leading-relaxed text-[#74717a]/80 text-center px-4">
          Your conversations are end-to-end encrypted and never stored unencrypted.
          By continuing, you agree to our <a href="#" className="underline underline-offset-2 hover:text-[#141415] dark:hover:text-white">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;