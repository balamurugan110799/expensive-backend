const mongoose = require("mongoose")


const estimate = new mongoose.Schema({
    plan:{
        type:String,
        require:true
    },
    amount:{
        type:Number,
        require:true
    },
    value:{
        type:Number,
        require:true
    },
})
// module.exports = mongoose.model("estimate",estimate)

module.exports = mongoose.model("estimate",estimate)