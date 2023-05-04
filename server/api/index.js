const router = require('express').Router()

router.use('/users', require('../routes/auth'))

// error handling for non existent routes
router.use(async (req, res, next) => {
    const err = new Error('Cannot find API route!');
    err.status = 404;
    next(err);
  });

module.exports = router