const express = require('express')
const Food = require("../models/Foods");
const Order = require('../models/Order');
const router = express.Router()

const publishableKey = "pk_test_51Oj7bTSELCbyUChj91gOGhwXcDEJMj4rEV9IxXt0CpDzgQhUax3rYvmkbRRfLOPD2VcEqSJKtmCBXEQSylDmXz6R002wiBpVmK";
const secretKey = "sk_test_51Oj7bTSELCbyUChjh6qkO26jREWwBFdkOOU8pzvE3ttALvgOZlp5hX4qi19BpQvGnkD9W18R9i2RmU8zpNvk0mr300OPRUQas8";
const stripe = require("stripe")(secretKey);

router.post("/orders", async function (req, res) {
    try {
        const { userId, items, totalPrice } = req.body
        console.log(typeof (totalPrice))

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: 'Food',
                        },
                        unit_amount: Math.round(totalPrice)*100,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:5173/success',
            cancel_url: 'http://localhost:5173/cancel',
        });
        if (session.id) {
            const newOrder = await Order.create({
                userId, items, totalPrice
            })
            const updateOrder = await Order.findByIdAndUpdate(newOrder._id, {
                payment: true,
            })
            res.json({ success: true, message: "order created succefully", order: updateOrder, session })
        }
        else {
            res.json({ success: false, message: "order created failed" })
        }
    } catch (error) {
        console.log(error.message)
        res.status(404).json({ message: "internal server error", status: false });
    }
});

router.get("/allorders", async (req, res) => {
    try {
        const orders = await Order.find().populate("items.food").populate("user");
        res.json({ success: true, orders })
    } catch (error) {
        console.log(error.message);
        res.status(404).json({ message: "internal server error", status: false });
    }

})
router.get("/get-single-order", async (req, res) => {
    try {
        const { userId } = req.body
        const orders = await Order.find({ user: userId }).populate("items.food").populate("user");
        res.json({ success: true, orders })
    } catch (error) {
        console.log(error.message);
        res.status(404).json({ message: "internal server error", status: false });
    }
})
router.get("/markasdelivered", async (req, res) => {
    try {
        const { orderId } = req.body
        const order = await Order.find(orderId)
        order.status = "delivered"
        await order.save()
        res.json({ success: true, order })
    } catch (error) {
        console.log(error.message);
        res.status(404).json({ message: "internal server error", status: false });
    }

})






module.exports = router
