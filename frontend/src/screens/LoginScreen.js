import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../components/Navbar';
import './LoginScreen.css';

const onSubmitHandler = () => {};

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='login-container'>
      <Navbar />
      <div className='login-screen'>
        <h1>Login</h1>
        <div className='form-container'>
          <form onSubmit={onSubmitHandler}>
            <div className='form-item'>
              <label>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='Enter Password'
              />
            </div>
            <div className='form-item'>
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='Enter Password'
              />
            </div>
            <button className='submit-button'>Login</button>
            <p>
              Don't have an account? <a href='/register'>Register Here!</a>
            </p>
          </form>
        </div>
        <img src='/img/mountain.cms' alt='mountain' />
      </div>
    </div>
  );
};

export default LoginScreen;
