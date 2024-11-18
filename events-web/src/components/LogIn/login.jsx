import React, { useState, useEffect } from 'react';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { BsChevronRight } from "react-icons/bs";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate();

  // Load saved email and password from localStorage on component mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('savedEmail');
    const savedPassword = localStorage.getItem('savedPassword');

    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    let item = { email, password };

    try {
      let response = await fetch('https://crowdhive.onrender.com/api/v1/login', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server Error:', errorData);
        alert('Error: ' + errorData.message);
      } else {
        let result = await response.json();
        // Redirect to home page on successful login
        if (result.token) {
          // Save user data and token in localStorage
          localStorage.setItem('userToken', JSON.stringify({
            username: result.username,
            email: result.email,
            token: result.token,
          }));

          // If "Remember Me" is checked, save email and password in localStorage
          if (rememberMe) {
            localStorage.setItem('savedEmail', email);
            localStorage.setItem('savedPassword', password);
          } else {
            // Clear saved email and password if "Remember Me" is unchecked
            localStorage.removeItem('savedEmail');
            localStorage.removeItem('savedPassword');
          }

          navigate('/'); // Redirect to home page
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSocialLogin = (provider) => {
    // Implement social login logic here
    console.log(`Sign in with ${provider}`);
  };

  return (
    <>
      <header className="fixed left-0 w-full h-16 bg-[#5ed6e8] text-white flex items-center justify-center z-50">
        <div className="container mx-auto ml-3">
          <Link to='/' className='text-blue-700 flex items-center'>
            Home<BsChevronRight className='h-7 w-5 ml-2' />Log In
          </Link>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#b6f1fde7] py-12 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or sign in with your favorite social media
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm">
              <div className='relative'>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded relative block w-full px-3 mt-4 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </div>
          </form>

          <div>
            <h2 className='text-center text-black'>If You Do not have an Account, Please</h2>
            <Link to='/SignUp'>
              <h2 className='text-blue-800 text-center font-bold'>Signup</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
