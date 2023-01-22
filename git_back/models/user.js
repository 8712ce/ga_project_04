// DEPENDENCIES //
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// CREATE A BOOK SCHEMA //
const userSchema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        location: { type: String, required: true }
    }
)

// CREATE A BOOK MODEL USING THE BOOK SCHEMA //
const User = mongoose.model('User', userSchema)

// EXPORT THE BOOK MODEL, WILL BE ACCESSSED IN 'INDEX.JS' //
module.exports = User