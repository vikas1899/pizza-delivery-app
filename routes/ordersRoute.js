const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_tR3PYbcVNZZ796tH88S4VQ2u'); // Replace with your actual Stripe secret key
const { v4: uuidv4 } = require('uuid');
const Order = require('../models/orderModel')


router.post('/placeorder', async (req, res) => {
    const { token, subtotal, currentUser, cartItems } = req.body;

    try {

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const payment = await stripe.charges.create({
            amount: subtotal * 100, // Amount in cents
            currency: 'inr',
            customer: customer.id,
            receipt_email: token.email,
            description: 'Order placed by ' + currentUser.name
        }, {
            idempotencyKey: uuidv4()
        });

        if (payment) {

            const neworder = new Order({
                name: currentUser.name,
                email: currentUser.email,
                userid: currentUser._id,
                orderItems: cartItems,
                orderAmount: subtotal,
                shippingAddress: {
                    street: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    pincode: token.card.address_zip
                },
                transactionId: payment.source.id

            })
            neworder.save()

            res.status(200).send('Order Placed Successfully');

        } else {
            res.status(500).send('Payment Failed');
        }
    } catch (error) {
        console.error('Payment error:', error);
        res.status(400).json({ message: "Something went wrong: " + error.message });
    }
});

router.post("/getuserorders", async (req, res) => {
    const { userid } = req.body;
    try {
        const orders = await Order.find({ userid: userid }).sort({ _id: -1 });
        res.send(orders);
    } catch (error) {
        return res.status(400).json({ message: "Something went wrong" });
    }
});

router.get("/getallorders", async (req, res) => {

    try {
        const orders = await Order.find({})
        res.send(orders)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/deliverorder", async (req, res) => {

    const orderid = req.body.orderid
    try {
        const order = await Order.findOne({ _id: orderid })
        order.isDelivered = true
        await order.save()
        res.send('Order Delivered Successfully')
    } catch (error) {

        return res.status(400).json({ message: error });

    }

});

module.exports = router;
