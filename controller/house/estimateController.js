const estimate = require("../../model/house/estimateModel")

exports.addEstimate = async (req, res) => {
    try {
        const estimateCreate = await estimate.create({
            plan: req.body.plan,
            amount: req.body.amount,
            value:req.body.amount
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

exports.getAllEstimate = async (req,res) =>{
    try{
        const getEstimate = await estimate.find()
        const addEstimate = []
        getEstimate.forEach((el)=>{
            addEstimate.push(el.amount)
        })
       console.log(addEstimate)

       var initialValue =0 ;
       const sumWithInitial = addEstimate.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    //    var total =await addEstimate.reduce(acc,cur => acc+cur ,initialValue )
       console.log(sumWithInitial)
        res.status(200).json({
            status: "success",
            total_amount: sumWithInitial,
            data: getEstimate,
        })
    }catch(err){
        res.status(500).json({
            status: "falied",
            message: "Internal Server Error"
        })
    }
}