import { useState, useEffect } from "react";
import { FeatureCard } from "../assets/FeatureCard";
import { featureCards } from "../constants/features";
import { AnimatePresence, motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import SpotlightCard from "../lib/SpotlightCard";

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    let interval;

    if (isAutoPlaying && !isPaused) {
      interval = setInterval(() => {
        setDirection(1);
        setActiveIndex((prevIndex) => (prevIndex + 1) % featureCards.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused]);

  // Pause auto-play when user interacts with carousel
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  const handleNext = () => {
    pauseAutoPlay();
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % featureCards.length);
  };

  const handlePrev = () => {
    pauseAutoPlay();
    setDirection(-1);
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + featureCards.length) % featureCards.length
    );
  };

  const handleDotClick = (index) => {
    pauseAutoPlay();
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }

    if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  };

  // Variants for framer-motion animations
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1], // Custom ease curve for smooth animation
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      rotateY: direction < 0 ? 15 : -15,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <div id="features" className="w-full relative py-7.5">
      <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-12 relative">
        {/* Background container */}
        <div className="w-full h-auto col-span-10 col-start-2 rounded-lg">
          <SpotlightCard
            className="bg-[#695BC4]/20 rounded-lg"
            spotlightColor="rgba(105, 91, 196, 1)"
            spotlightSize={250}
          >
            <div className="grid grid-cols-1 md:grid-cols-10">
              {/* Left Content container - positioned in the grid */}
              <div className="col-span-full md:col-start-1 md:col-span-5 top-[0px] h-auto z-10 pt-[30px] pl-6 md:pl-[57px] grid md:place-content-end ">
                <h1 className="text-3xl md:text-4xl lg:text-6xl md:font-bold font-medium text-white mx-auto md:mx-0 sm:text-center md:text-left leading-tight">
                  Smarter Links Start Here
                </h1>
              </div>

              {/* Right Content container - positioned in the grid */}
              <div className="col-span-full md:col-start-6 md:col-span-5 top-[0px] h-auto z-10 pt-[15px] px-6 grid place-content-end">
                <p className="w-90/100 max-w-md mx-auto md:mx-0 text-center md:text-left text-white/60 text-base md:text-[11px] lg:text-base lg:pb-2">
                  TrakLinks gives you full control over every click with
                  powerful tools for creators, marketers, and businesses -
                  offering real-time analytics, customizable URLs, and dynamic
                  QR codes for smarter link management.
                </p>
              </div>

              {/* Features Card Carousel */}
              <div
                className="col-span-full mt-5 mb-9 px-4 md:px-10 relative"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Carousel container */}
                <div className="relative sm:h-[420px] md:h-[250px] lg:h-[320px] overflow-hidden rounded-xl perspective">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-xl pointer-events-none z-10"></div>

                  <AnimatePresence initial={false} custom={direction}>
                    {featureCards.map((card, index) =>
                      index === activeIndex ? (
                        <motion.div
                          key={index}
                          custom={direction}
                          variants={variants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          className="absolute w-full h-full preserve-3d"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <FeatureCard card={card} />
                        </motion.div>
                      ) : null
                    )}
                  </AnimatePresence>

                  {/* Navigation arrows */}
                  <button
                    onClick={handlePrev}
                    className="absolute sm:top-45/100 left-4 md:top-1/2 -translate-y-1/2 z-20 bg-[#27215B]/80 text-[#27215B] rounded-full w-10 h-10 flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                    aria-label="Previous slide"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 12H5M5 12L12 19M5 12L12 5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-4 sm:top-45/100 md:top-1/2 -translate-y-1/2 z-20 bg-[#27215B]/80  text-[#27215B] rounded-full w-10 h-10 flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                    aria-label="Next slide"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Dots navigation */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-20">
                  {featureCards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`transition-all duration-300 ${
                        activeIndex === index
                          ? "w-10 h-2.5 bg-white rounded-full"
                          : "w-2.5 h-2.5 bg-white/50 rounded-full hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
