import React from "react";
import { Link } from "react-router-dom";
import Aurora from "../lib/Aurora";
import { useState } from "react";
import GoogleIcon from "../lib/icons/GoogleIcon";
import { FiEye, FiEyeOff, FiCheck, FiX } from "react-icons/fi";
import { RightSection } from "../components/SignUpInConfirmComp/RightSection";

// Add this CSS to fix autofill background color
const autofillStyle = `
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px hsl(246,55%,20%) inset !important;
    -webkit-text-fill-color: white !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Form data state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  // Validation state
  const [validation, setValidation] = useState({
    firstName: { valid: false, touched: false },
    lastName: { valid: false, touched: false },
    email: { valid: false, touched: false },
    password: { valid: false, touched: false },
    confirmPassword: { valid: false, touched: false, matches: false }
  });
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate fields on change
    validateField(name, value);
  };
  
  // Field blur handler
  const handleBlur = (e) => {
    const { name } = e.target;
    setValidation(prev => ({
      ...prev,
      [name]: { ...prev[name], touched: true }
    }));
  };
  
  // Validate individual field
  const validateField = (name, value) => {
    let isValid = false;
    let matches = false;
    
    switch (name) {
      case 'firstName':
      case 'lastName':
        isValid = value.trim().length > 0;
        break;
      case 'email':
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        break;
      case 'password':
        isValid = value.length >= 8;
        break;
      case 'confirmPassword':
        isValid = value.length >= 8;
        matches = value === formData.password;
        break;
      default:
        break;
    }
    
    if (name === 'confirmPassword') {
      setValidation(prev => ({
        ...prev,
        [name]: { ...prev[name], valid: isValid, matches }
      }));
    } else {
      setValidation(prev => ({
        ...prev,
        [name]: { ...prev[name], valid: isValid }
      }));
    }
  };
  
  // Get validation status for a field
  const getValidationStatus = (field) => {
    const { valid, touched } = validation[field];
    if (!touched) return null;
    return valid ? 'valid' : 'invalid';
  };
  
  // Get password match status
  const getPasswordMatchStatus = () => {
    const { touched } = validation.confirmPassword;
    if (!touched) return null;
    return validation.confirmPassword.matches ? 'valid' : 'invalid';
  };
  
  // Check if form is valid
  const isFormValid = () => {
    return Object.values(validation).every(field => field.valid) && 
      validation.confirmPassword.matches;
  };

  return (
    <div className="min-h-screen w-full items-center flex flex-col overflow-x-hidden overflow-y-auto relative">
      {/* Add style tag for autofill fix */}
      <style>{autofillStyle}</style>
      
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
                <h1 className="text-4xl font-bold text-white mb-2">Sign Up</h1>
                <p className="text-white/40 text-sm">
                  Sign up to enjoy the features of TrakLink
                </p>
              </div>

              <div className="space-y-3 w-full flex flex-col items-center lg:items-start">
                {/* First Name and Last Name Fields */}
                <div className="w-full flex flex-col items-center">
                  <div className="w-full flex flex-col lg:flex-row gap-4">
                    {/* First Name Field */}
                    <div className="w-full lg:w-1/2 relative">
                      <label className="block text-white text-sm font-medium mb-1 text-left">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="First name"
                        className="w-full text-sm px-4 py-2 backdrop-blur-md bg-[hsl(246,55%,20%)] rounded-lg text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[hsl(246,55%,40%)] focus:border-transparent transition-all duration-200"
                      />
                      {getValidationStatus('firstName') === 'valid' && (
                        <span className="absolute right-3 top-[34px] text-green-500">
                          <FiCheck />
                        </span>
                      )}
                      {getValidationStatus('firstName') === 'invalid' && (
                        <span className="absolute right-3 top-[34px] text-red-500">
                          <FiX />
                        </span>
                      )}
                    </div>

                    {/* Last Name Field */}
                    <div className="w-full lg:w-1/2 relative">
                      <label className="block text-white text-sm font-medium mb-1 text-left">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Last name"
                        className="w-full text-sm px-4 py-2 backdrop-blur-md bg-[hsl(246,55%,20%)] rounded-lg text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[hsl(246,55%,40%)] focus:border-transparent transition-all duration-200"
                      />
                      {getValidationStatus('lastName') === 'valid' && (
                        <span className="absolute right-3 top-[34px] text-green-500">
                          <FiCheck />
                        </span>
                      )}
                      {getValidationStatus('lastName') === 'invalid' && (
                        <span className="absolute right-3 top-[34px] text-red-500">
                          <FiX />
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col items-center lg:items-start relative">
                  <label className="block text-white text-sm font-medium mb-1 w-full text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Enter your email"
                    className="w-full px-4 text-sm py-2 backdrop-blur-md bg-[hsl(246,55%,20%)] rounded-lg text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[hsl(246,55%,40%)] focus:border-transparent transition-all duration-200"
                  />
                  {getValidationStatus('email') === 'valid' && (
                    <span className="absolute right-3 top-[34px] text-green-500">
                      <FiCheck />
                    </span>
                  )}
                  {getValidationStatus('email') === 'invalid' && (
                    <span className="absolute right-3 top-[34px] text-red-500">
                      <FiX />
                    </span>
                  )}
                  {getValidationStatus('email') === 'invalid' && validation.email.touched && (
                    <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
                  )}
                </div>

                <div className="w-full flex flex-col items-center">
                  <div className="w-full flex flex-col lg:flex-row gap-4">
                    {/* Password Field */}
                    <div className="w-full lg:w-1/2 relative">
                      <label className="block text-white text-sm font-medium mb-1 text-left">
                        Password
                      </label>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Enter a password"
                        className="w-full text-sm px-4 py-2 pr-10 backdrop-blur-md bg-[hsl(246,55%,20%)] rounded-lg text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[hsl(246,55%,40%)] focus:border-transparent transition-all duration-200"
                      />
                      <span
                        className="absolute right-3 top-[34px] text-white/70 cursor-pointer"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </span>
                      {getValidationStatus('password') === 'invalid' && validation.password.touched && (
                        <p className="text-red-500 text-xs mt-1">Password must be at least 8 characters</p>
                      )}
                    </div>

                    {/* Confirm Password Field */}
                    <div className="w-full lg:w-1/2 relative">
                      <label className="block text-white text-sm font-medium mb-1 text-left">
                        Confirm Password
                      </label>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Re-enter"
                        className="w-full text-sm px-4 py-2 pr-10 backdrop-blur-md bg-[hsl(246,55%,20%)] rounded-lg text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[hsl(246,55%,40%)] focus:border-transparent transition-all duration-200"
                      />
                      <span
                        className="absolute right-3 top-[34px] text-white/70 cursor-pointer"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                      >
                        {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                      </span>
                      {getPasswordMatchStatus() === 'invalid' && validation.confirmPassword.touched && (
                        <p className="text-red-500 text-xs mt-1">Passwords don't match</p>
                      )}
                    </div>
                  </div>
                </div>

                <button 
                  className={`w-full mt-2 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 ${
                    isFormValid() 
                      ? 'bg-[hsl(246,55%,40%)] hover:bg-[hsl(246,55%,50%)] hover:cursor-pointer' 
                      : 'bg-[hsl(246,55%,30%)] opacity-70 cursor-not-allowed'
                  }`}
                  disabled={!isFormValid()}
                >
                  Sign up
                </button>

                <div className="flex w-full items-center justify-center">
                  <div className="border-t border-white/20 flex-grow"></div>
                  <span className="px-4 text-white/60 text-sm">or</span>
                  <div className="border-t border-white/20 flex-grow"></div>
                </div>

                <button className="w-full bg-[hsl(0,0%,85%)] hover:bg-[hsl(0,0%,100%)] hover:cursor-pointer text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <GoogleIcon />
                  Sign up with Google
                </button>

                <p className="w-full text-center text-white/40 text-sm">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="text-[hsl(246,55%,50%)] hover:text-[hsl(246,55%,55%)]"
                  >
                    Sign in
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

export default SignUpPage;
