const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    comment: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true, versionKey: false })


const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    reviews: [reviewSchema],

    isVegetarian: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true, versionKey: false })
const Food = mongoose.model('Food', foodSchema);
module.exports = Food