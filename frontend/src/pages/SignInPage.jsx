import React from "react";
import { Link } from "react-router-dom";
import Aurora from "../lib/Aurora";
import { useState } from "react";
import GoogleIcon from "../lib/icons/GoogleIcon";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { RightSection } from "../components/SignUpInConfirmComp/RightSection";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full items-center flex flex-col overflow-x-hidden overflow-y-auto relative">
      {/* Aurora Background - positioned absolutely behind everything */}
      <div className="absolute inset-0 z-0">
        <Aurora />
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-7xl flex-1 flex relative z-10 min-h-screen">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:px-8 py-16">
          <div className="max-w-sm w-full flex flex-col items-center lg:items-start">
            {/* Sign Up Form */}
            <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold text-white mb-2">Sign In</h1>
                <p className="text-white/40 text-sm">
                  Welcome back! Login to continue to your account.
                </p>
              </div>

              <div className="space-y-3 w-full flex flex-col items-center lg:items-start">
                <div className="w-full flex flex-col items-center lg:items-start">
                  <label className="block text-white text-sm font-medium mb-1 w-3/4 text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 text-sm py-2 backdrop-blur-md bg-[hsl(246,55%,20%)] rounded-lg text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[hsl(246,55%,40%)] focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="w-full flex flex-col items-center lg:items-start relative">
                  <label className="block text-white text-sm font-medium mb-1 w-3/4 text-left">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full text-sm px-4 py-2 pr-10 backdrop-blur-md bg-[hsl(246,55%,20%)] rounded-lg text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[hsl(246,55%,40%)] focus:border-transparent transition-all duration-200"
                  />
                  <span
                    className="absolute right-3 top-[34px] text-white/70 cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </span>
                </div>

                <button className="w-full bg-[hsl(246,55%,40%)] mt-2 hover:cursor-pointer hover:bg-[hsl(246,55%,50%)] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  Sign in
                </button>

                <div className="flex w-full items-center justify-center">
                  <div className="border-t border-white/20 flex-grow"></div>
                  <span className="px-4 text-white/60 text-sm">or</span>
                  <div className="border-t border-white/20 flex-grow"></div>
                </div>

                <button className="w-full bg-[hsl(0,0%,85%)] hover:bg-[hsl(0,0%,100%)] hover:cursor-pointer text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <GoogleIcon />
                  Sign in with Google
                </button>

                <p className="w-full text-center text-white/40 text-sm">
                  No Account yet?{" "}
                  <Link
                    to="/signup"
                    className="text-[hsl(246,55%,50%)] hover:text-[hsl(246,55%,55%)]"
                  >
                    Sign up here!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <RightSection />
      </div>
    </div>
  );
};

export default SignInPage;
