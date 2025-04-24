import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import coffeeBeansImg from '../../assets/login/coffee-beans.png';
import logoImg from '../../assets/login/logo.svg';
import beansImg from '../../assets/login/beans.png';
import heartImg from '../../assets/login/heart.png';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      // For demonstration, we'll just check for a simple validation
      if (email === 'admin@example.com' && password === 'password') {
        await login({ email, role: 'admin' });
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Failed to sign in');
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left Section with Logo and Background */}
      <div className="hidden md:flex md:w-1/2 flex-col items-center justify-start pt-12 pl-12 relative bg-cover bg-center" style={{ backgroundImage: `url(${coffeeBeansImg})` }}>
        <img src={logoImg} alt="Mood Coffee Bar" className="w-40 z-10 mt-[100px]" />
        <div className="flex flex-col items-center">
        </div>
        
        {/* Heart image positioned to be half under the left section */}
        <div className="absolute right-[-200px] bottom-[-18px] z-[-10]">
          <img src={heartImg} alt="Coffee Heart" className="w-[300px]" />
        </div>
      </div>

      {/* Right Section with Login Form */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center relative">
        <div className="absolute top-0 right-0 p-4">
          <img src={beansImg} alt="Coffee Beans" className="w-[320px]" />
        </div>

        {/* Back to Home button */}
        <div className="absolute top-4 left-4">
          <Link to="/" className="flex items-center text-[#8D6E63] hover:text-[#7D5E53] transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="w-full max-w-md p-6">
          <h1 className="text-4xl font-bold text-[#8D6E63] mb-6">Welcome!</h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-8">Please Login To Admin Panel</h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
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

            <div className="mb-2">
              <label htmlFor="password" className="block text-gray-700 mb-1">
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8D6E63]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end mb-6">
              <Link to="/forgot-password" className="text-sm text-[#8D6E63] hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#8D6E63] text-white py-3 rounded-md font-medium hover:bg-[#7D5E53] transition duration-300"
            >
              Login
            </button>

            <div className="mt-4 text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <Link to="/register" className="text-[#8D6E63] hover:underline">
                Register here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login; 