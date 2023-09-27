const estimate = require("../../model/house/estimateModel")
const expensiveDB = require("../../model/expensiveDBModel")

exports.addEstimate = async (req, res) => {
    try {
        const getEstimateAll = await expensiveDB.find()
        const getEst = []
        getEstimateAll.forEach((el) => {
            getEst.push(el.house.estimate)
        })
        const estimateCreate = await expensiveDB.create({
            year:req.body.date,
            house: {
                estimate: {
                    plan: req.body.plan,
                    amount: req.body.amount,
                    value: req.body.amount,
                    date: req.body.date
                }
            }
        })
        res.status(201).json({
            status: "success",
            data: estimateCreate
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: "falied",
            message: "Internal Server Error"
        })
    }
}

exports.getAllEstimate = async (req, res) => {
    try {
        const getEstimateAll = await expensiveDB.find()
        const getEst = []
        getEstimateAll.forEach((el) => {
            getEst.push(el.house.estimate)
        })
        console.log(getEst)
        res.status(200).json({
            status: "success",
            getEst: getEst,
        })
    } catch (err) {
        res.status(500).json({
            status: "falied",
            message: "Internal Server Error"
        })
    }
}

exports.updateEstimate = async (req, res) => {
    try {
        const EstimateId = req.params.id
        const updateEstimate = await expensiveDB.findOneAndUpdate({ id: EstimateId }, {
            house: {
                estimate: {
                    plan: req.body.plan,
                    amount: req.body.amount,
                    date: req.body.date
                }
            }
        }, { new: true })
        res.status(200).json({
            status: "success",
            update: updateEstimate,
        })
        console.log(updateEstimate)

    } catch (err) {
        res.status(500).json({
            status: "falied",
            message: "Internal Server Error"
        })
    }
}

exports.deleteEstimate = async (req, res) => {
    try {
        const EstimateId = req.params.id
        const deleteEstimate = await expensiveDB.findByIdAndDelete({_id:EstimateId})
        res.status(200).json({
            status: "success",
        })
    } catch (err) {
        res.status(500).json({
            status: "falied",
            message: "Internal Server Error"
        })
    }
}