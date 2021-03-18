const express = require('express');
const router = express.Router();

const jwtMiddleware = require('../middleware/jwtMiddleware');

const {
  userLogin,
  registerUser,
  getUserProfile,
} = require('../controllers/userControllers');

router.post('/login', userLogin);
router.post('/register', registerUser);
router.route('/profile').get(jwtMiddleware, getUserProfile);

module.exports = router;
