import React, { useState } from 'react';
import SpotlightCard from '../../lib/SpotlightCard';
import SplitText from '../../lib/SplitText';

// Reusing the same RightSection component for the SignUp, SignIn, and Confirmation pages
export const RightSection = React.memo(() => {
    const [animationComplete, setAnimationComplete] = useState(false);
  
    const handleAnimationComplete = () => {
      setAnimationComplete(true);
    };
  
    return (
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8">
        <div className="w-full h-full rounded-lg">
          <SpotlightCard
            className="bg-[#695BC4]/20 backdrop-blur-md border-1 border-white/10 rounded-lg w-full h-full flex flex-col items-center justify-center gap-5"
            spotlightColor="rgba(105, 91, 196, 1)"
            spotlightSize={250}
          >
            <h1 className="font-bold text-xl text-[#FFFFFF]/60 z-10">
              TrakLinks.
            </h1>
            <h1 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF] mx-auto px-10 z-10 leading-tight">
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
              />
            </h1>
            <p
              className={`pt-0 max-w-sm mx-auto z-10 text-center text-[#FFFFFF]/60 sm:text-md transition-opacity duration-500 ${
                animationComplete ? "opacity-100" : "opacity-0"
              }`}
            >
              Create branded links, track clicks, and analyse analytics — all
              without writing a single line of code.
            </p>
          </SpotlightCard>
        </div>
      </div>
    );
  });