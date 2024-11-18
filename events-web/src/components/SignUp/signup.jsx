import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { BsChevronRight } from "react-icons/bs";
import { Link, useNavigate  } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.trim() !== confirmPassword.trim()) {
      alert("Passwords do not match");
      return;
    }

    let item = { username, email, password };
    
    try {
      let response = await fetch('https://crowdhive.onrender.com/api/v1/signup', {
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
        console.log(result);

        // Save user data and token in localStorage
        localStorage.setItem('userToken', JSON.stringify({
          username: result.username,
          email: result.email,
          token: result.token
        }));

        alert('Signup successful!');
        navigate('/logIn');
        // Redirect to a different page if needed
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#a7f0f0f3] py-12 px-4 sm:px-6 lg:px-8">
      <Link to='/' className='text-blue-700 mr-[400px] flex flex-wrap p-2'>Home<BsChevronRight className='h-7 w-5'/>Sign up</Link>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Sign Up
          </h2>
          {/* <p className="mt-2 text-center text-sm text-gray-600">
            Sign up with
          </p>
          <div className="flex justify-center mt-3 space-x-3">
            <button className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700">
              <FontAwesomeIcon icon={faGoogle} />
            </button>
            <button className="p-2 rounded-full bg-blue-800 text-white hover:bg-blue-900">
              <FontAwesomeIcon icon={faFacebook} />
            </button>
            <button className="p-2 rounded-full bg-blue-400 text-white hover:bg-blue-600">
              <FontAwesomeIcon icon={faTwitter} />
            </button>
          </div> */}
          <p className="mt-6 text-center text-sm text-[green]">
             *Use your email for registration
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-500" />
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded relative block w-full mb-4 px-3 py-2 pl-10 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 :text-sm"
                placeholder="Username"
              />
            </div>
            <div className="relative">
              <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-gray-500" />
              <input
                id="email-address"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded relative mb-4 block w-full px-3 py-2 pl-10 border border-gray-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 :text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-500" />
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded relative mb-4 block w-full px-3 py-2 pl-10 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 :text-sm"
                placeholder="Password"
              />
            </div>
            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-500" />
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="appearance-none rounded relative mb-4 block w-full px-3 py-2 pl-10 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 :text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
          <div>
            <h2 className='text-center text-black'>Already have an Account </h2>
            <Link to='/LogIn'><h2 className='text-blue-800 text-center font-bold'>login</h2></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
