const estimatePayment = require("../../model/house/estimatePaymentModel")
const estimate = require("../../model/house/estimateModel")

exports.addEstimatePayment = async (req, res) => {
    try {
        const estimate = await estimatePayment.create({
            date: req.body.date,
            name: req.body.name,
            amount: req.body.amount,
            value: req.body.amount,
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

exports.updateEstimatePayment = async (req, res) => {
    try {
        const ID = (req.params.id)
        var updateData = await estimatePayment.findByIdAndUpdate({ _id: ID }, {
            date: req.body.date,
            name: req.body.name,
            amount: req.body.amount,
            value: req.body.amount,
        }, { new: true })
        res.status(200).json({
            status: "success",
            data: updateData
        })

    } catch (err) {
        res.status(500).json({
            status: "falied",
            message: "Internal Server Error"
        })
    }
}

exports.deleteEstimatePayment = async (req, res) =>{
    try{
        const ID = (req.params.id)
        const deleteData = await estimatePayment.findOneAndDelete({_id:ID},{new:true})
        res.status(200).json({
            status: "success",
        })
    }catch(err){
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
        var addEstimateGiveFilter = addEstimateGive.filter(Number)
        const estimate_payment = addEstimate.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
        const total_estimate = addEstimateGiveFilter.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
        console.log(addEstimate, addEstimateGiveFilter, "hello")

        const cal = total_estimate - estimate_payment

        res.status(201).json({
            status: "success",
            estimate_payment: estimate_payment,
            total_estimate: total_estimate,
            need_to_give: cal,
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
