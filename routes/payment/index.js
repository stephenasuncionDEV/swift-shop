const router = require('express').Router();
const controller = require('./controller');

router.get('/getCoupons', controller.getCoupons);

module.exports = router;