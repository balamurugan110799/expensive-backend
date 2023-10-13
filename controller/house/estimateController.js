const estimate = require("../../model/house/estimateModel")
const expensiveDB = require("../../model/expensiveDBModel")

exports.addEstimate = async (req, res) => {
    try {
    
        const estimateCreate = await expensiveDB.create({
            year:req.body.year,
            estimate:req.body.estimate
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
        const getEst = await expensiveDB.find()
        const estimate = []
        
        getEst.forEach((el)=>{
            if(el.estimate.length===1){
                estimate.push(el)
            }
        })
        var amount =[]
        estimate.forEach((el)=>{
            amount.push(el.estimate[0].amount)
 
        })
        var initaialValue = 0;
        var total = amount.reduce((acc,currentValue)=>acc+currentValue ,initaialValue)
        console.log(total)
        
        // console.log(getEst)
        res.status(200).json({
            status:"success",
            total_Amount :total,
            estimate:estimate
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
        console.log(EstimateId)
        const updateEstimate = await expensiveDB.findOneAndUpdate({ _id: EstimateId },{
            year:req.body.year,
            estimate:req.body.estimate
        },{new:true})
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