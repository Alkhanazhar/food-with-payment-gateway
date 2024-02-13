const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, },
    email: { type: String, required: true, validate: [validator.isEmail, "must be a valid email"] },
    image: { type: String},
    password: { type: String, required: true, minlength: 8 },
    role: { type: String, default: 'user', enum: ['admin', 'user'] },
})
const User = mongoose.model('User', userSchema)
module.exports = User