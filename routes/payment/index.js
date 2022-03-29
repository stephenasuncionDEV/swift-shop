const router = require('express').Router();
const controller = require('./controller');

router.get('/getCoupons', controller.getCoupons);
router.post('/refund', controller.refund);

module.exports = router;