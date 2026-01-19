import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const PublicNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/login")
  }

  const toRegister = () => {
    navigate("/register")
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b ${
          isScrolled
            ? "bg-[rgb(var(--bg-light)/0.9)] backdrop-blur-xl border-neutral-200/50 shadow-sm"
            : "bg-transparent backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer select-none">
            <div className="p-2 rounded-[var(--radius)] bg-[rgb(var(--primary))] flex items-center justify-center shadow-lg shadow-[rgb(var(--primary)/0.3)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-active:scale-95">
              <svg
                className="size-5 text-white"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <h2 className="text-xl font-bold tracking-tight text-[rgb(var(--text-light))]">
              Muted
            </h2>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Features", "Privacy", "About"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-[rgb(var(--text-light)/0.7)] hover:text-[rgb(var(--primary))] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button onClick={toLogin} className="hidden sm:block text-sm font-bold text-[rgb(var(--text-light))] hover:text-[rgb(var(--primary))] transition-colors duration-200">
              Sign In
            </button>

            <button onClick={toRegister} className="h-11 px-6 text-sm font-bold rounded-[var(--radius-xl)] bg-[rgb(var(--primary))] text-white shadow-[0_4px_14px_0_rgb(var(--primary)/0.3)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(var(--primary),0.4)] hover:brightness-110 active:scale-95">
              Get Started
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[rgb(var(--text-light))] hover:bg-black/5 rounded-full transition-colors z-50"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-0 z-40 md:hidden bg-[rgb(var(--bg-light))] h-screen w-full pt-24 px-6 flex flex-col gap-6 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {["Features", "Privacy", "About"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-2xl font-semibold text-[rgb(var(--text-light))] border-b border-black/5 pb-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link}
          </a>
        ))}

        <button className="w-full py-4 mt-4 text-lg font-bold text-[rgb(var(--primary))] bg-[rgb(var(--primary)/0.1)] rounded-[var(--radius-lg)]">
          Sign In
        </button>
      </div>
    </>
  );
};

export default PublicNavbar;
