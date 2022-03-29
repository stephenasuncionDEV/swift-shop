const router = require('express').Router();
const payment = require('./payment');

router.use('/payment', payment);

module.exports = router;