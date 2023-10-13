const { compareSync } = require("bcrypt")
const expensiveDB = require("../model/expensiveDBModel")

exports.getAll = async (req, res) => {
    try {
        const getAll = await expensiveDB.find()
        res.status(201).json({
            status: "success",
            data: getAll
        })
    } catch (err) {
        res.status(500).json({
            status: "falied",
            message: "Internal Server Error"
        })
    }
}