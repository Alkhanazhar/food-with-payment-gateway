const express = require('express')
const Food = require('../models/Foods')
const router = express.Router()
router.get("/recommendations", async (req, res) => {
    try {
        const foods = await Food.find()
        return res.json({ success: true, foods: foods.slice(0, 4) })

    } catch (error) {
        console.error(error.message)
        res.json({ success: false })
    }
})
module.exports = router