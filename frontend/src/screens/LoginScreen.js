import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../actions/userActions';

import Navbar from '../components/Navbar';
import Message from '../components/Message';
import './LoginScreen.css';

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, loggedUser, error } = userLogin;
  const userRegister = useSelector((state) => state.userRegister);
  const { success } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/profile';

  useEffect(() => {
    if (loggedUser) {
      history.push(redirect);
    }
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className='login-container'>
      <Navbar />
      {error ? (
        <Message type='error'>{error}</Message>
      ) : success ? (
        <Message type='success'>User registered, go ahead a Login.</Message>
      ) : null}
      <div className='login-screen'>
        <h1 className='header'>Login</h1>
        <div className='form-container'>
          <form onSubmit={onSubmitHandler}>
            <div className='form-item'>
              <label>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type='email'
                placeholder='Enter Password'
              />
            </div>
            <div className='form-item'>
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type='password'
                placeholder='Enter Password'
              />
            </div>
            <button type='submit' className='submit-button'>
              Login
            </button>
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
