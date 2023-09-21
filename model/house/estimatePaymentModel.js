const mongoose = require("mongoose")

const estimatePayment = new mongoose.Schema({
    date:{
        type:Number,
        require:true
    },
    name:{
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

module.exports = mongoose.model("estimatePayment",estimatePayment)