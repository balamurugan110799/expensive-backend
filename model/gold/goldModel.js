const mongoose = require("mongoose")

const gold = mongoose.Schema({
    date:{
        type:String,
        require:true,
        // unique:true,
    },
    weight:{
        type:String,
        enum:["gram","boun"],
        require:true,
        // unique:true,
    },
    total:{
        type:Number,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    eachPrice:{
        type:Number,
        require:true,
    },
    gst:{
        type:Number,
        require:true,
    }
})

module.exports = mongoose.model("gold",gold)