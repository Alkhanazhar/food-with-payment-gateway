const mongoose = require('mongoose')




const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    items: [{
        food: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
        qty: { type: Number, required: true, min: 1, }
    }],
    totalPrice: { type: Number, required: true },
    payment: {
        type: Boolean, default: false,
    },
    status: { type: String, default: "pending", enum: ["pending", "delivered", "failed"] }
}, { timestamps: true, versionKey: false })
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;