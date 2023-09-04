const mongoose = require("mongoose")

const users = mongoose.Schema({
    username:{
        type:String,
        require:true,
        // unique:true,
    },
    email:{
        type:String,
        require:true,
        // unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        enum:["admin","super-admin","user"],
        default:"user"
    }
})


module.exports = mongoose.model("users",users)