const express = require('express');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModels');
const genWebToken = require('../config/jsonWebToken');

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genWebToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid Email or Password...');
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    res.status(400);
    throw new Error('User Already Exists, login instead...');
  }
  const user = await User.create({ name, email, password });
  if (user) {
    res.status(201).json({
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genWebToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data...');
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('Error 404: User Not found...');
  }
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (!user) {
    res.status(404);
    throw new Error('Error 404: User not found...');
  } else {
    res.json(user);
  }
});

module.exports = { userLogin, registerUser, getUserProfile, getUserById };
