const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const foodRoutes = require("./routes/food")
const reviewRoutes = require("./routes/review")
const imageRoutes = require("./routes/images")
const userRoutes = require("./routes/user")
const orderRoutes = require("./routes/orders")
const recommendationRoutes = require("./routes/recommendation")
const cors = require('cors')

const dotenv = require('dotenv')
app.use(morgan("dev"))
dotenv.config()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
//mongo connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to Mongoose")
})

//routes
app.use(foodRoutes)
app.use(recommendationRoutes)
app.use(imageRoutes)
app.use(userRoutes)
app.use(reviewRoutes)
app.use(orderRoutes)
// console.log(imageRoutes)

app.get('/', (req, res) => {
    res.json({ success: true })
})

//PORT
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("started listening on port " + PORT)
})