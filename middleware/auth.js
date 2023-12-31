const jwt = require("jsonwebtoken");

const auth =async (req,res,next)=>{
    console.log("Auth")
    try{
        var token =await req.headers.authorization;
        console.log(token)
        if(token===undefined){
            return res.status(404).json({ msg: "Unauthroized" })
        }
        var split_token = await token.substring(7, token.length)
        if(!split_token|| token===undefined){
            res.status(404).json({ msg: "Unauthroized" })
        }else{
            var user = jwt.verify(split_token,process.env.SERECT)
            user = user.body
            next()
        }
    }catch(err){
        res.status(500).json({
            status: "failed",
            message: err
        })
    }
}
module.exports = auth
