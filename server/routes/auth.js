const router = require('express').Router();
const User = require('../models/User');

router.get('/users', async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

// const { signup, signin, forgotPassword, resetPassword } = require('../controllers/auth')

// router.get('/', (req, res) => {
//   return res.json({
//     data: 'Hello World'
//   })
// })

// router.post('/signup', signup);
// router.post('/signin', signin);
// router.post('/forgot-password', forgotPassword)
// router.post('/reset-password', resetPassword)
