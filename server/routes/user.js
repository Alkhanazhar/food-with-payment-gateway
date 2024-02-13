const bcrypt = require('bcrypt');
const JWT = require("jsonwebtoken");
const express = require('express');
const User = require('../models/User');
const router = express.Router()
const dotenv = require("dotenv").config();

router.post('/register', async (req, res) => {
    try {
        const { name, email, password, image } = req.body;
        //validation
        if (!name || !email || !password || !image) {
            return res.status(400).send({
                success: false,
                message: "Please Fill all fields",
            });
        }
        //exisiting user
        const exisitingUser = await User.findOne({ email });
        if (exisitingUser) {
            return res.status(401).send({
                success: false,
                message: "user already exists",
            });
        }
        if (password && password.length < 6) {
            return res.json({ error: "Passsword is required and 6 character long" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        //save new user
        const user = new User({ name, email, password: hashedPassword, image });
        await user.save();
        return res.status(201).send({
            success: true,
            message: "New User Created",
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error In Register",
            success: false,
            error,
        });
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
            return res.status(401).send({
                success: false,
                message: "Please provide email or password",
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(200).send({
                success: false,
                message: "email is not registered",
            });
        }
        //password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: "Invlid email or password",
            });
        }
        const token = JWT.sign({ _id: user._id, }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
        return res.status(200).send({
            success: true,
            messgae: "login successfully",
            user,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In Login  ",
            error,
        });
    }

})

router.post("/profile", async function (req, res) {
    try {

        const { token } = req.body;
        const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findById(decoded._id);
        res.json(user)
    } catch (error) {
        console.error(error.message);
    }

})
module.exports = router