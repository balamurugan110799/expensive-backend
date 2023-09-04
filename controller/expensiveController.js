const expensive = require("../model/expensiveModel")

exports.AddExpensive = (req, res) => {
    expensive.create({
        expensive: req.body.expensive,
        amount: req.body.amount
    })
        .then((data) => {
            res.status(200).json({
                status: "success",
                data: data
            })
        })
        .catch((err) => {
            res.status(500).json({
                status: "failed",
                message: err.message
            })
        })
}

exports.expensiveGetAll = async (req, res) => {
    try {
        const findData = await expensive.find()
        res.status(200).json({
            status: "success",
            data: findData
        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
}

exports.editExpensive = async (req, res) => {
    try {
        const newUpdateData = await expensive.findByIdAndUpdate(req.params.id, req.body)

        res.status(200).json({
            status: "success",
            data: newUpdateData
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            message: err.message
        })
    }
}

exports.removeExpensive =async (req,res)=>{
    try{
        await expensive.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "success",
            data: null
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            message: err.message
        })
    }
 
}