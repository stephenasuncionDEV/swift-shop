const router = require('express').Router();
const controller = require('./controller');

router.get('/getCoupons', controller.getCoupons);
router.get('/getCustomers', controller.getCustomers);
router.post('/refund', controller.refund);

module.exports = router;