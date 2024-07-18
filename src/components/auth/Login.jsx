import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/login/', {
      username: username,
      password: password
    })
    .then((res) => {
      console.log(res.data);
      if (res.data) {
        const user = {
          username: username,
          role: res.data.role,
          accessToken: res.data.access,
          refreshToken: res.data.refresh
        };

        sessionStorage.setItem('userData', JSON.stringify(user));

        if (user.role === 'admin') {
          navigate('/admin');
        } else if (user.role === 'unituser') {
          navigate('/unityuser');
        } else if (user.role === 'head of department') {
          navigate('/departement');
        } 
        else if (user.role === 'head of division') {
          navigate('/division');
        }else {
          console.log('Unknown user role. Please contact support.');
        }
      } else {
        console.log("No data");
      }
    })
    .catch((error) => {
      console.error('Error during login:', error);
    });
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <h2 className="mt-10 text-center text-xl font-semibold leading-9 tracking-tight text-gray-900">
            Welcome Back
          </h2> */}
        </div>
        <small className="mt-1.5 text-center font-extrabold text-gray-900">Sign in to your account</small>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={e => setUserName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <Link to="/passwordreset" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-purple-400 group-hover:text-indigo-400 aria-hidden:true" />
                </span>
                Sign In
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign Up
            </Link>
            <Link to="/" className="primary-btn ml-2">Back home</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;