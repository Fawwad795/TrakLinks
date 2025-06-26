import { Link } from "react-router-dom";
import Aurora from "../lib/Aurora";
import SpotlightCard from "../lib/SpotlightCard";
import { useState } from "react";
import SplitText from "../lib/SplitText";
import { Input } from "@material-tailwind/react";
import GoogleIcon from "../lib/icons/GoogleIcon";

const SignUpPage = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <div className="min-h-screen w-full items-center flex flex-col overflow-x-hidden overflow-y-auto relative">
      {/* Aurora Background - positioned absolutely behind everything */}
      <div className="absolute inset-0 z-0">
        <Aurora />
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-7xl flex-1 flex relative z-10 min-h-screen">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:pr-8 lg:pl-40 py-15">
          <div className="max-w-sm w-full flex flex-col items-center lg:items-start">
            {/* Sign Up Form */}
            <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold text-white mb-2">Sign up</h1>
                <p className="text-white/60 text-sm">
                  Sign up to enjoy the feature of TrakLink
                </p>
              </div>

              <div className="space-y-3 w-full flex flex-col items-center lg:items-start">
                <div className="w-full flex flex-col items-center lg:items-start">
                  <label className="block text-white text-sm font-medium mb-1 w-3/4 text-left">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name or a username"
                    className="w-3/4 px-4 py-2 text-sm backdrop-blur-md  border border-white/50 rounded-lg text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="w-full flex flex-col items-center lg:items-start">
                  <label className="block text-white text-sm font-medium mb-1 w-3/4 text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-3/4 px-4 text-sm py-2 backdrop-blur-md  border border-white/50 rounded-lg text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="w-full flex flex-col items-center lg:items-start">
                  <label className="block text-white text-sm font-medium mb-1 w-3/4 text-left">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter a password"
                    className="w-3/4 text-sm px-4 py-2 backdrop-blur-md  border border-white/50 rounded-lg text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                  />
                </div>

                <button className="w-3/4 bg-blue-500 mt-2 hover:cursor-pointer hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  Sign up
                </button>

                <div className="flex w-3/4 items-center justify-center">
                  <div className="border-t border-white/20 flex-grow"></div>
                  <span className="px-4 text-white/60 text-sm">or</span>
                  <div className="border-t border-white/20 flex-grow"></div>
                </div>

                <button className="w-3/4 bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <GoogleIcon />
                  Sign up with Google
                </button>

                <p className="w-3/4 text-center text-white/60 text-sm">
                  Already have an account?{" "}
                  <Link to="#" className="text-blue-500 hover:text-blue-400">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
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
                />{" "}
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
      </div>
    </div>
  );
};

export default SignUpPage;
