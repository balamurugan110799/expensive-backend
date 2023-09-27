const mongoose = require("mongoose")

const nestedModel  = new mongoose.Schema({
    id:{
        type:String,
        require:true,
    },
    name:[
        {
            firstName:{
                type:String,
                required:true 
             },
             lastName:{
                 type:String,
                 required:true     
             }
        }
    ],
    mark:{
        type:String,
        require:true,
    }
})
module.exports = mongoose.model("nestedModel",nestedModel)