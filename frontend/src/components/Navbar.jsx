import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navItems } from "../constants/navItems";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky navbar after scrolling down 50px
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // function to handle navigation clicks
  const handleNavClick = (item) => {
    if (item.href.startsWith("#")) {
      // For anchor links, navigate to home first then scroll
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(item.href.substring(1));
          if (element) {
            element.scrollIntoView({ behaviour: "smooth" });
          }
        }, 100);
      } else {
        // already on landing page, just scroll
        const element = document.getElementById(item.href.substring(1));
        if (element) {
          element.scrollIntoView({ behaviour: "smooth" });
        }
      }
    } else if (item.href.startsWith("/")) {
      // for internal routes
      navigate(item.href);
    }
    // close mobile menu after navigation
    setMenuOpen(false);
  };

  return (
    <>
      {/* Original navbar that shows at the top */}
      <nav className="z-20 relative w-full">
        <div className={`h-[66px] w-full flex items-center`}>
          <div className="w-full max-w-[1400px] mx-auto px-4 grid grid-cols-12 items-center h-full">
            {/* Logo: columns 1-6 */}
            <div className="col-start-2 col-span-5 flex items-center">
              <a
                href="#landingPage"
                className="font-[700] text-[20px] text-[#FFFFFF]"
              >
                TrakLinks.
              </a>
            </div>

            {/* Nav Items for md+ screens: columns 7-11 */}
            <div className="col-span-5 h-full pr-[10px] flex items-center justify-end">
              <div className="hidden lg:flex pt-[3px] justify-end items-center h-full space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className={
                      `font-[500] text-white transition no-underline text-[16px] px-[8px] py-[6px] duration-150 hover:text-[#695BC4] cursor-pointer` +
                      (item.label === "Sign Up"
                        ? " border border-white rounded-[5px] hover:border-[#695BC4]"
                        : "")
                    }
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Hamburger for small screens */}
              <div className="z-21 lg:hidden flex justify-end items-center h-full">
                <button
                  className="p-2"
                  onClick={() => setMenuOpen((open) => !open)}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                  {menuOpen ? (
                    /* X icon */
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    /* Hamburger icon */
                    <svg
                      className="w-7 h-7 text-[#FFFFFF]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Full screen mobile menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gradient-to-r from-[#0F0C29] via-[#0F0C29] to-[#1C1A3B] z-50 flex flex-col">
          <div className="w-full px-19 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <span className="font-[700] text-[20px] text-white">
                TrakLinks.
              </span>
            </div>
            <button
              className="p-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-start px-19 py-8 space-y-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-white text-3xl font-medium no-underline hover:text-gray-300 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Sticky navbar that appears when scrolling down */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled && !menuOpen
            ? "translate-y-4 opacity-100"
            : "translate-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="h-[60px] w-full flex items-center px-6">
              <div className="flex justify-between items-center w-full">
                {/* Logo */}
                <div className="flex items-center">
                  <a
                    href="#landingPage"
                    className="font-[700] text-[18px] text-[#312E41]"
                  >
                    TrakLinks.
                  </a>
                </div>

                {/* Nav Items for md+ screens */}
                <div className="hidden lg:flex items-center space-x-6">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item)}
                      className={
                        `font-[500] text-[#312E41] transition no-underline text-[15px] px-[8px] py-[5px] duration-150 hover:text-[#695BC4] cursor-pointer` +
                        (item.label === "Sign Up"
                          ? " border border-black rounded-[5px] hover:border-[#695BC4]"
                          : "")
                      }
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Hamburger for small screens */}
                <div className="lg:hidden">
                  <button
                    className="p-2"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Menu"
                  >
                    <svg
                      className="w-6 h-6 text-[#312E41]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
