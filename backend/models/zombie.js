// DEPENDENCIES //
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// CREATE A BOOK SCHEMA //
const zombieSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, default: 0  },
        image: { type: String, default: "/assets/no_image.jpg" },
        eye_color: { type: String, enum: [ "amber", "blue", "brown", "gray", "green", "hazel" ] },
        appetite: { type: String, enum: [ "Picky Eater", "Always Hungry", "Would Totally Eat Everyone's Brain" ] },
        personality_type: { type: String, enum: [ "Bruiser", "Close Talker", "Codependent", "Cry Baby", "Drama Queen", "Disappointment to Family", "Entitled", "Extroverted", "Introverted", "Narcissist", "Selfish", "Untrusting" ] },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }
)

// CREATE A BOOK MODEL USING THE BOOK SCHEMA //
const Zombie = mongoose.model('Zombie', zombieSchema)

// EXPORT THE BOOK MODEL, WILL BE ACCESSSED IN 'INDEX.JS' //
module.exports = Zombie