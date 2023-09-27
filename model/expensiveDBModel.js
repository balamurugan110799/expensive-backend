const mongoose = require("mongoose")

const expensiveDB = new mongoose.Schema({
    year:{
        type:Number,
        require:true,
    },
    house:{
        estimate:{
            _id:{
                type:Number,
                require:true,
            },
            date:{
                type:Number,
                require: true
            },
            plan:{
                type:String,
                require: true
            },
            amount:{
                type:Number,
                require: true
            },
            value:{
                type:Number,
                require: true
            },
        },
        estimatePayment:{
            date:{
                type:Number,
                require: true
            },
            name:{
                type:String,
                require: true
            },
            amount:{
                type:Number,
                require: true
            },
            value:{
                type:Number,
                require: true
            },
        }

    }
})

module.exports = mongoose.model("expensiveDB", expensiveDB)