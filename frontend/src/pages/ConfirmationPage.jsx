import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Aurora from '../lib/Aurora';
import { RightSection } from '../components/SignUpInConfirmComp/RightSection';

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const inputRefs = useRef([]);

  // Set up refs for each input
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  // Handle input change
  const handleChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;

    // Update the verification code array
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode);
    
    // Clear any previous errors
    setError('');

    // Auto-focus next input if current input is filled
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle key press for backspace
  const handleKeyDown = (index, e) => {
    // Move to previous input when backspace is pressed on an empty input
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle paste event
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').trim();
    
    // Check if pasted content is 6 digits
    if (/^\d{6}$/.test(pastedData)) {
      const newVerificationCode = pastedData.split('');
      setVerificationCode(newVerificationCode);
      
      // Focus the last input
      inputRefs.current[5].focus();
    }
  };

  // Verify the code
  const verifyCode = () => {
    // Check if all digits are entered
    if (verificationCode.some(digit => digit === '')) {
      setError('Please enter all 6 digits of your verification code');
      return;
    }

    setIsVerifying(true);
    setError('');

    // Simulate verification process
    setTimeout(() => {
      // For demo purposes, any code is accepted
      setSuccess(true);
      
      // Redirect to dashboard after a brief delay to show success message
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    }, 1000);
  };

  // Resend code functionality
  const resendCode = () => {
    // Simulate resending code
    setError('');
    setSuccess(false);
    
    // Show success message for resending
    setTimeout(() => {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 500);
  };

  return (
    <div className="min-h-screen w-full items-center flex flex-col overflow-x-hidden overflow-y-auto relative">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora />
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-7xl flex-1 flex relative z-10 min-h-screen">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:px-8 py-16">
          <div className="max-w-sm w-full flex flex-col items-center lg:items-start">
            {/* Confirmation Form */}
            <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold text-white mb-2">Verify Your Email</h1>
                <p className="text-white/40 text-sm">
                  We've sent a 6-digit verification code to your email address
                </p>
              </div>

              <div className="space-y-6 w-full flex flex-col items-center lg:items-start mt-4">
                {/* Verification Code Input */}
                <div className="w-full">
                  <label className="block text-white text-sm font-medium mb-3 w-full text-center lg:text-left">
                    Enter verification code
                  </label>
                  <div className="flex justify-center lg:justify-start gap-2">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        maxLength={1}
                        value={verificationCode[index]}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={index === 0 ? handlePaste : undefined}
                        className="w-12 h-12 text-center text-white text-xl font-semibold bg-[hsl(246,55%,20%)] backdrop-blur-md rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(246,55%,40%)] focus:border-transparent transition-all duration-200"
                      />
                    ))}
                  </div>
                  
                  {/* Error message */}
                  {error && (
                    <p className="text-red-500 text-sm mt-2 text-center lg:text-left">{error}</p>
                  )}
                  
                  {/* Success message */}
                  {success && (
                    <p className="text-green-500 text-sm mt-2 text-center lg:text-left">
                      {isVerifying ? 'Verification successful! Redirecting...' : 'Code has been resent to your email.'}
                    </p>
                  )}
                </div>

                {/* Verify Button */}
                <button
                  onClick={verifyCode}
                  disabled={isVerifying}
                  className={`w-full mt-2 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 ${
                    isVerifying
                      ? 'bg-[hsl(246,55%,30%)] opacity-70 cursor-not-allowed'
                      : 'bg-[hsl(246,55%,40%)] hover:bg-[hsl(246,55%,50%)] hover:cursor-pointer'
                  }`}
                >
                  {isVerifying ? 'Verifying...' : 'Verify Email'}
                </button>

                {/* Resend Code */}
                <div className="w-full text-center">
                  <p className="text-white/40 text-sm">
                    Didn't receive the code?{' '}
                    <button
                      onClick={resendCode}
                      className="text-[hsl(246,55%,50%)] hover:text-[hsl(246,55%,55%)] focus:outline-none"
                    >
                      Resend
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RightSection />
      </div>
    </div>
  );
};

export default ConfirmationPage;