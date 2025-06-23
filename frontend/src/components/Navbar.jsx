import { useState } from "react";
import { navItems } from "../constants/navItems";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="z-20 relative w-full">
      <div
        className={`h-[66px] w-full flex items-center ${
          menuOpen ? "border-b border-[#312E41]" : ""
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 grid grid-cols-12 items-center h-full">
          {/* Logo: columns 1-6 */}
          <div className="col-start-2 col-span-5 flex items-center">
            <span className="font-[700] text-[20px] text-[#312E41]">
              TrakLinks.
            </span>
          </div>

          {/* Nav Items for md+ screens: columns 7-11 */}
          <div className="col-span-5 h-full pr-[10px] flex items-center justify-end">
            <div className="hidden lg:flex pt-[3px] justify-end items-center h-full space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={
                    `font-[500] transition no-underline text-[16px] px-[8px] py-[6px] duration-150 hover:text-[#695BC4]` +
                    (item.label === "Sign Up"
                      ? " border border-black rounded-[5px] hover:border-[#695BC4]"
                      : "")
                  }
                >
                  {item.label}
                </a>
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
                    className="w-7 h-7 text-[#312E41]"
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
                    className="w-7 h-7 text-[#312E41]"
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

      {/* Dropdown menu for small screens - pushes content down */}
      {menuOpen && (
        <div className="lg:hidden w-full shadow-md">
          <div className="w-full max-w-[1400px] mx-auto px-4 grid grid-cols-12">
            <div className="col-start-2 col-span-8 flex flex-col items-start py-4 space-y-4">
              {navItems.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={
                    `block font-[400] no-underline text-[16px] px-[8px] py-[6px] text-[#312E41] hover:text-[#695BC4]` +
                    (idx === navItems.length - 1
                      ? " border border-black rounded-[5px] hover:border-[#695BC4]"
                      : "")
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
