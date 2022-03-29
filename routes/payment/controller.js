const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET);

exports.getCoupons = async (req, res, next) => {
    try {
        const coupons = await stripe.coupons.list();
        res.status(200).send(coupons.data);

    } catch (err) {
        next(err);
    }
}