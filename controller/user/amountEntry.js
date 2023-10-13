const expensiveDB = require("../../model/expensiveDBModel")

exports.AddAmount = async (req, res) => {
    try {
        var addAmount = await expensiveDB.create({
            year: req.body.year,
            amount: req.body.amount
        })
        res.status(201).json({
            status: "success",
            data: addAmount
        })
    } catch (err) {
        res.status(500).json({
            status: "falied",
            message: "Internal Server Error"
        })
    }
}


exports.updateAmountEntry = async (req, res) => {
    try {
        const ID = req.params.id;
        const updateAmount = await expensiveDB.findByIdAndUpdate({ _id: ID }, {
            year: req.body.year,
            amount: req.body.amount
        }, { new: true })
        res.status(200).json({
            status: "success",
            update: updateAmount,
        })
    } catch (err) {
        res.status(500).json({
            status: "falied",
            message: "Internal Server Error"
        })
    }
}

exports.deleteAmount = async (req, res) => {
    try {
        const ID = req.params.id
        const deleteAmount = await expensiveDB.findOneAndDelete({ _id: ID })
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

exports.getAmount = async (req, res) => {
    try{
        const getData = await expensiveDB.find()
        const data =[]
        getData.forEach((el)=>{
            if(el.amount!==undefined){
                data.push(el)
            }
        })
        res.status(200).json({
            status: "success",
            data:data
        })
    }catch(err){
        res.status(500).json({
            status: "falied",
            message: "Internal Server Error"
        })
    }
}