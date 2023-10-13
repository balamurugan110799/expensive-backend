
const expensiveDB = require("../../model/expensiveDBModel")


exports.addEstimatePayment = async (req, res) => {
    try {
    
        const estimateCreate = await expensiveDB.create({
            year:req.body.year,
            estimatePayment:req.body.estimatePayment
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

exports.updateEstimatePayment = async (req, res) => {
    try {
        const EstimateId = req.params.id
        console.log(EstimateId)
        const updateEstimate = await expensiveDB.findOneAndUpdate({ _id: EstimateId },{
            year:req.body.year,
            estimatePayment:req.body.estimatePayment
        },{new:true})
        // var estimate = delete updateEstimate.update.estimate
      
        res.status(200).json({
            status: "success",
        //  estimate : delete updateEstimate.update.estimate,
            update: updateEstimate,
        })

    } catch (err) {
        res.status(500).json({
            status: "falied",
            message: "Internal Server Error"
        })
    }
}

exports.deleteEstimatePayment = async (req, res) =>{
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

exports.getEsitmatePayment = async (req, res) => {
    try {
        const getEst = await expensiveDB.find()
        const estimatePaymentAll = []
        const Estimate =[]
        getEst.forEach((el)=>{
            if(el.estimatePayment.length===1){
                estimatePaymentAll.push(el)
            }else if(el.estimate.length===1){
                Estimate.push(el.estimate[0].amount)
            }
        })
        var amount =[]
        estimatePaymentAll.forEach((el)=>{
            amount.push(el.estimatePayment[0].amount)
        })
        var initaialValue = 0;
        var total = amount.reduce((acc,currentValue)=>acc+currentValue ,initaialValue)
        console.log(total,Estimate)
        var Esttotal = Estimate.reduce((acc,currentValue)=>acc+currentValue ,initaialValue)
        var give =  Esttotal -total

        // var eatimateAmount=[]
        // getEst.forEach((el)=>{
        //     amount.push(el.estimate[0].amount)
        // })
        // console.log(Esttotal)
        res.status(200).json({
            status:"success",
            total:total,
            need_to_give:give,
            totel_estimate: Esttotal,
            data:estimatePaymentAll
        })
    } catch (err) {
        res.status(500).json({
            status: "falied",
            message: "Internal Server Error"
        })
    }
}
