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

exports.refund = async (req, res, next) => {
    try {
        const { chargeId } = req.body;

        await stripe.refunds.create({
            charge: chargeId,
        });

        res.status(200).send({ message: 'Successfully created a refund' });

    } catch (err) {
        next(err);
    }
}