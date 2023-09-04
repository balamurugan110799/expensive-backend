const mongoose = require("mongoose")

const expensive = new mongoose.Schema({
    expensive: {
        type: String,
        require: true
    }, amount: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model("expensive", expensive)