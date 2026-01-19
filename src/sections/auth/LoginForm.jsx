import React, { useState } from "react";
import AuthToggle from "./AuthToggle";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../app/auth/authThunks";

const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(form, navigate));
    };


    return (
        <div className="
        w-full max-w-[440px] 
        bg-white  
        rounded-[var(--radius-xl)] 
        
        overflow-hidden 
        soft-shadow
      ">

            {/* 1. Icon Section (Cleaned: Removed background & border) */}
            <div className="w-full pt-12 pb-4 flex items-center justify-center">
                <div className="relative w-16 h-16 flex items-center justify-center">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 border border-[rgb(var(--primary)/0.2)] rounded-full animate-[ping_3s_ease-in-out_infinite]"></div>
                    {/* Middle Ring */}
                    <div className="absolute inset-2 border border-[rgb(var(--primary)/0.4)] rounded-full"></div>
                    {/* Inner Ring with Icon */}
                    <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white  z-10">
                        <span className="material-symbols-outlined text-[rgb(var(--primary))] text-3xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-12 text-[rgb(var(--primary))]"
                            >
                                <path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.1 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.03-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>

            {/* 2. Main Content Area */}
            <form onSubmit={handleSubmit}
                className="px-10 pb-12 flex flex-col gap-8">

                {/* Title */}
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold text-[#141415] dark:text-white tracking-tight">
                        Secure Access
                    </h1>
                    <p className="text-sm text-[#74717a] dark:text-[#a09da6] max-w-[280px] mx-auto leading-relaxed">
                        Enter your credentials to continue to your private conversations.
                    </p>
                </div>

                {/* Auth Toggle */}
                <AuthToggle />

                {/* Form Fields */}
                <div className="space-y-5">

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
                        <div className="flex justify-between items-center ml-1">
                            <label className="text-[11px] font-bold text-[rgb(var(--primary))] uppercase tracking-[0.15em]">
                                Password
                            </label>
                            <a href="#" className="text-xs font-medium text-[#74717a] hover:text-[rgb(var(--primary))] transition-colors">
                                Forgot?
                            </a>
                        </div>
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
                <button type="submit" disabled={loading}
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
                    {loading ? "Signing in..." : "Continue"}
                </button>

                {/* Divider */}
                <div className="relative flex py-1 items-center">
                    <div className="flex-grow border-t border-black/5 dark:border-white/5"></div>
                    <span className="flex-shrink mx-4 text-[10px] font-medium text-[#74717a] uppercase tracking-wider">or</span>
                    <div className="flex-grow border-t border-black/5 dark:border-white/5"></div>
                </div>

                {/* Magic Link */}
                <button className="flex items-center justify-center gap-2.5 text-sm font-semibold text-[rgb(var(--primary))] hover:opacity-80 transition-opacity">
                    <span className="material-symbols-outlined text-[20px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Zm8.25-3.75a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25H7.5a.75.75 0 0 1 0-1.5h2.25V7.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                            <path d="M16.5 6a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5H17.25v2.25a.75.75 0 0 1-1.5 0V10.5h-2.25a.75.75 0 0 1 0-1.5h2.25V6.75A.75.75 0 0 1 16.5 6Z" />
                        </svg>
                    </span>
                    <span>Continue without password</span>
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

export default LoginForm;