const mongoose = require("mongoose")

const estimatePayment = new mongoose.Schema({
    year:{
        type: Number,
        require: true,
    },
    amount:{
        type: Number,
        require: true,
    },
    estimate: [
        {
            date: {
                type: Number,
                require: true,
            },
            plan: {
                type: String,
                require: true,
            },
            amount: {
                type: Number,
                require: true,
            }
        }
    ],
    estimatePayment: [
        {
            date: {
                type: Number,
                require: true,
            },
            details: {
                type: String,
                require: true,
            },
            amount: {
                type: Number,
                require: true,
            }
        }
    ],
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