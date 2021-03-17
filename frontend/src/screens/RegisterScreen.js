import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { register } from '../actions/userActions';

import Navbar from '../components/Navbar';
import Message from '../components/Message';

import './RegisterScreen.css';

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, success, error } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/login';

  useEffect(() => {
    if (success) {
      history.push(redirect);
    }
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <div className='register-container'>
      <Navbar />
      {error && <Message type='error'>{error}</Message>}
      <div className='register-screen'>
        <h1 className='header'>Register</h1>
        <div className='form-container'>
          <form onSubmit={onSubmitHandler}>
            <div className='form-item'>
              <label>Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type='text'
                placeholder='Enter Name'
              />
            </div>
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
              Register
            </button>
            <p>
              Already have an account? <a href='/login'>Login Here!</a>
            </p>
          </form>
        </div>
        <img src='/img/mountain.cms' alt='mountain' />
      </div>
    </div>
  );
};

export default RegisterScreen;
