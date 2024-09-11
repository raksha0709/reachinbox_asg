// src/components/LoginPage.js

import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc'; // Google icon from react-icons
import './LoginPage.css';

const LoginPage = () => {
  const [theme, setTheme] = useState('dark');

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`login-page ${theme}`}>
      <header className="header">
        <h1>REACHINBOX</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <div className="login-box">
        <h2>Create a new account</h2>

        {/* Google Login Button */}
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
          <GoogleLogin
            onSuccess={(response) => console.log(response)}
            onError={() => console.log('Login Failed')}
            render={({ onClick }) => (
              <button className="google-btn" onClick={onClick}>
                <FcGoogle className="google-icon" />
                Sign Up with Google
              </button>
            )}
          />
        </GoogleOAuthProvider>

        <button className="create-account-btn">Create an Account</button>
        <p>
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>

      {/* <footer>© 2023 ReachInbox. All rights reserved.</footer> */}
    </div>
  );
};

export default LoginPage;
