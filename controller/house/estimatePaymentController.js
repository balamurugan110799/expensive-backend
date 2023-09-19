const estimatePayment = require("../../model/house/estimatePaymentModel")
const estimate = require("../../model/house/estimateModel")

exports.addEstimatePayment = async (req, res) => {
    try {
        const estimate = await estimatePayment.create({
            date: req.body.date,
            name: req.body.name,
            amount: req.body.amount,
            value:req.body.amount,
        })
        res.status(201).json({
            status: "success",
            data: estimate
        })
    } catch (err) {
        res.status(500).json({
            status: "falied",
            message: "Internal Server Error"
        })
    }
}

exports.getEsitmatePayment = async (req, res) => {
    try {
        const estimatePaymentAll = await estimatePayment.find()
        const estimateGive = await estimate.find()

        const addEstimate = []
        const addEstimateGive = []
        estimatePaymentAll.forEach((el) => {
            addEstimate.push(el.amount)
        })

        estimateGive.forEach((el) => {
            addEstimateGive.push(el.amount)
        })
        console.log(addEstimate)

        var initialValue = 0;
        const estimate_payment = addEstimate.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
        const total_estimate = addEstimateGive.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
        console.log(total_estimate)

        const cal = total_estimate - estimate_payment

        res.status(201).json({
            status: "success",
            estimate_payment: estimate_payment,
            total_estimate: total_estimate,
            need_to_give :cal, 
            data: estimatePaymentAll
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: "falied",
            message: "Internal Server Error"
        })
    }
}
