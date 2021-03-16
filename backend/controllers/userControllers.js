const express = require('express');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModels');
const genWebToken = require('../config/genJwtToken');

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
