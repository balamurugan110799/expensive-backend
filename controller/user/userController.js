const users = require("../../model/users/usersModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
exports.getAllUsers = (req, res) => {
    res.send("Hello")
}

exports.signUp = async (req, res) => {
    try {
        const { username, password, email } = req.body
        var hash = await bcrypt.hash(password, 10)
        var createUser = await users.create({
            username: username,
            email: email,
            password: hash,
        })
        res.status(201).json({
            status: "success",
            data: createUser
        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err
        })
    }
}

exports.LoginUser = async (req, res) => {
    try {
        const ExistMail = await users.findOne({email:req.body.email})
        const data = ExistMail
        // console.log(data)
        if(!ExistMail){
           return  res.status(400).json({message_email:"Email not Exist"})
        }else{
            console.log("true")
            console.log(req.body.password, data)
        }

        const ExistPassword = await bcrypt.compare(req.body.password, ExistMail.password)
        console.log(ExistPassword)
        if (!ExistPassword) {
            return res.status(500).json({
                status: "failed",
                message_password: "Password not In vaild"
            })
        }
        // var serect ="hello"
        const token = jwt.sign({email:req.body.email,},process.env.SERECT)
        res.status(200).json({
            email: req.body.email,
            role: ExistMail.role,

            token: token
        })


    } catch (err) {
        console.log("HEllo")
        res.status(500).json({
            status: "failedeee",
            message: err
        })
    }
}