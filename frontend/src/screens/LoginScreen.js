import React from 'react';
import Navbar from '../components/Navbar';

import './LoginScreen.css';

const onSubmitHandler = () => {
  console.log('clicked');
};

const LoginScreen = () => {
  return (
    <div className='login-container'>
      <Navbar />
      <div className='login-screen'>
        <h1>Login</h1>
        <div className='form-container'>
          <form type='submit'>
            <div className='form-item'>
              <label>Email</label>
              <input type='email' placeholder='Enter Password' />
            </div>
            <div className='form-item'>
              <label>Password</label>
              <input type='password' placeholder='Enter Password' />
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
