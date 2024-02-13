const express = require('express')
const Food = require("../models/Foods")
const router = express.Router()

router.post("/create-foods", async (req, res) => {
    try {
        const { name, image, price, isVegetarian, cuisine, description, category } = req.body
        const food = await Food.create({
            name: name,
            image: image,
            price: price,
            isVegetarian: isVegetarian, 
            cuisine: cuisine,
            description: description,
            category: category

        })
        return res.json({ success: true, food })
    } catch (error) {
        console.error(error.message)
    }
})

router.get("/allfoods", async (req, res) => {
    try {
        const foods = await Food.find()
        return res.json({ success: true, foods })

    } catch (error) {
        console.error(error.message)
        res.json({ success: false })
    }
})
module.exports = router