import React, { useState, useEffect } from "react";
import SplitText from "../../lib/SplitText";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Get the section element
      const section2 = document.getElementById("section-2");
      if (!section2) return;

      // Get its position relative to the viewport
      const rect = section2.getBoundingClientRect();
      // Check if 1/4th of the section is visible
      const isOneQuarterVisible = rect.top < window.innerHeight * 0.75;

      setScrolled(isOneQuarterVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const handleBuildWithUsClick = () => {
    navigate("/signup");
  };

  return (
    <div className="w-full relative mb-7.5">
      <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-12 h-full relative">
        {/* Notification image - Positioned within its grid cell */}
        <div className="col-start-1 col-span-2 h-full relative">
          <img
            src="/Notifications.png"
            alt="Notification Preview"
            className="hidden lg:block absolute left-1/4 w-full max-w-[200px]"
          />
        </div>

        {/* Mobile image - Positioned within its grid cell */}
        <div className="col-start-2 col-span-2 h-full relative">
          <img
            src="/Mobile.png"
            alt="Mobile Preview"
            className="hidden lg:block absolute top-70 left-1/4 w-full max-w-[180px] -rotate-10"
          />
        </div>

        {/* PC image - Positioned within its grid cell */}
        <div className="col-start-10 col-span-2 h-full relative">
          <img
            src="/PC.png"
            alt="PC Preview"
            className="hidden lg:block absolute top-24 left-1/4 w-full max-w-[280px]"
          />
        </div>

        {/* Center content - spans columns 3-10 */}
        <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8 h-full relative flex items-center">
          <div className="w-full mx-auto text-center py-16 lg:py-28">
            <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mx-auto px-20 leading-tight">
              <SplitText
                text="The No-Code Tool for Click-Worthy Links."
                splitType="words, chars"
                delay={50}
                duration={0.8}
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                ease="power4.out"
                threshold={0.2}
                textAlign="center"
                className="inline-block"
                onLetterAnimationComplete={handleAnimationComplete}
              />{" "}
            </h1>
            <p
              className={`pt-0 max-w-md mx-auto text-center text-[#FFFFFF]/60 sm:text-md transition-opacity duration-500 ${
                animationComplete ? "opacity-100" : "opacity-0"
              }`}
            >
              Create branded links, track clicks, and analyse analytics — all
              without writing a single line of code.
            </p>

            <button
              onClick={handleBuildWithUsClick}
              className={`group relative inline-flex items-center px-5 sm:px-6 py-2 sm:py-3 mt-8 sm:mt-12 bg-[hsl(0,0%,90%)] text-black text-sm sm:text-base rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:pl-6 hover:pr-10 cursor-pointer ${
                animationComplete ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="absolute inset-0 w-0 bg-[hsl(0,0%,100%)] z-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>

              <span className="relative z-10 whitespace-nowrap">
                Build with us
              </span>

              <span className="relative z-10 ml-2 transform translate-x-0 group-hover:translate-x-4 transition-all duration-300 ease-in-out">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Section 2 */}
        <div
          id="section-2"
          className={`col-start-2 col-span-10 backdrop-blur-md h-full relative flex items-center p-5 rounded-lg transition-colors duration-500 ${
            scrolled ? "bg-[#695BC4]/20" : "bg-[#695BC4]/0"
          }`}
        >
          <div className="text-center w-full">
            <div className="relative inline-block">
              <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-[600] mx-auto text-center pb-4 text-white">
                Streamlined Simplicity. Robust Results.
              </h1>
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-1500 ease in ease-out ${
                  scrolled ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
            <p className="pt-2 sm:w-4/5 lg:w-3/4 mx-auto text-center sm:text-md text-white/60">
              TrakLinks lets you shorten, personalize, and monitor your links —
              all in just a few clicks. Built to help you drive engagement, no
              matter where your links go.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
