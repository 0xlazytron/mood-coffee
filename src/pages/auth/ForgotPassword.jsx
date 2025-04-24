import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import coffeeBeansImg from '../../assets/login/coffee-beans.png';
import logoImg from '../../assets/login/logo.svg';
import beansImg from '../../assets/login/beans.png';
import heartImg from '../../assets/login/heart.png';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setMessage('');
    
    try {
      // This would be the actual password reset logic in a real app
      // For demonstration purposes, we'll simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Password reset instructions have been sent to your email');
    } catch (err) {
      setError('Failed to send reset email');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left Section with Logo and Background */}
      <div className="hidden md:flex md:w-1/2 flex-col items-center justify-start pt-12 pl-12 relative bg-cover bg-center" style={{ backgroundImage: `url(${coffeeBeansImg})` }}>
        <img src={logoImg} alt="Mood Coffee Bar" className="w-40 z-10 mt-[100px]" />
        
        {/* Heart image positioned to be half under the left section */}
        <div className="absolute right-[-200px] bottom-[-18px] z-[-10]">
          <img src={heartImg} alt="Coffee Heart" className="w-[300px]" />
        </div>
      </div>

      {/* Right Section with Forgot Password Form */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center relative">
        <div className="absolute top-0 right-0 p-4">
          <img src={beansImg} alt="Coffee Beans" className="w-[320px]" />
        </div>

        <div className="w-full max-w-md p-6">
          <h1 className="text-4xl font-bold text-[#8D6E63] mb-6">Forgot Password</h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Reset Your Password</h2>
          <p className="text-gray-600 mb-8">Enter your email address and we'll send you instructions to reset your password.</p>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          {message && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8D6E63]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#8D6E63] text-white py-3 rounded-md font-medium hover:bg-[#7D5E53] transition duration-300 flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : "Send Reset Instructions"}
            </button>

            <div className="mt-6 text-center">
              <Link to="/login" className="text-[#8D6E63] hover:underline">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 