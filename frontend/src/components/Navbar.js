import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <a className='logo' href='/'>
        <p className='logo'>logo</p>
      </a>
      <ul className='nav-links'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/products'>Products</a>
        </li>
        <li>
          <a href='/products'>About Us</a>
        </li>
      </ul>
      <a className='button-link' href='login'>
        <button>Login</button>
      </a>
    </nav>
  );
};

export default Navbar;
