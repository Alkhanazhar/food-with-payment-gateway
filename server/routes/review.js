const express = require('express')
const Food = require("../models/Foods")
const User = require('../models/User')
const router = express.Router()

router.post("/foods/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { comment, user } = req.body
        const food = await Food.findById(id)
        const currentUser = await User.findById(user)

        food.reviews.push({ user: currentUser._id, comment: comment, id: id._id })
        await food.save()
        res.json({ food })
    } catch (error) {
        console.log(error.message)
    }


}
)
router.get("/test", async (req, res) => {
    res.json({ rating: 4.4 })
})

module.exports = router