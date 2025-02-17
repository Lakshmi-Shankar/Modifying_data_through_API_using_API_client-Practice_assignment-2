const Mongoose = require("mongoose")

const userSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    }
})

const User = Mongoose.model("User", userSchema);

module.exports = User;