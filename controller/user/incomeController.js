const auth = require("../../middleware/auth");
const expensiveDBModel = require("../../model/expensiveDBModel");
const { getDateTime } = require("../../util.js/timeStamp");

exports.AddIncome = async (req, res) => {
    try {
        const timestamp = await req.body.timestamp;
        const time = await getDateTime(timestamp)
        // console.log(time)
        const addincome = await expensiveDBModel.create({
            timestamp: req.body.timestamp,
            amount: req.body.amount,
            income: req.body.income,
            duration: time
        })
        res.status(200).json({
            status: "success",
            data: addincome
        })
    }
    catch (err) {
        res.status(404).json({
            status: "failed",
            message: err
        })
    }
}


exports.getAllIncome = async (req, res) => {
    try {
       
        const getIncome = await expensiveDBModel.find()
        var income = []
        var amount = []
        var timer = getDateTime(req.body.timestamp)
        getIncome.forEach((el) => {
            if (el.income.length === 1) {
                if (el.duration[0]?.year === timer.year) {
                    if (el.duration[0]?.monthof === timer.monthof) {
                        amount.push(el.income[0]?.amount)
                        income.push(el)
                    }
                }
            }
        })
        const initialValue = 0;
        var sumamonut = amount.reduce((acc,currentValue) => acc + currentValue , initialValue)
        console.log(sumamonut)
        res.status(200).json({
            status: "success",
            amount:sumamonut,
            data: income,
        })
    }
    catch (err) {
        res.status(404).json({
            status: "failed",
            message: err
        })
    }
}

// exports.updateIncome =async (req,res)=>{
exports.updateIncome = async (req, res) => {

    try {
        const ID = req.params.id;
        const time = await getDateTime(req.body.timestamp)
        console.log(ID)
        const updateAmount = await expensiveDBModel.findByIdAndUpdate({ _id: ID }, {
            timestamp: req.body.timestamp,
            amount: req.body.amount,
            income: req.body.income,
            duration: time
        }, { new: true })
        res.status(200).json({
            status: "success",
            data: updateAmount
        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            status: "failed",
            message: err.message
        })
    }

}

exports.deleteIncome = async (req, res) => {
    try {
        const ID = req.params.id
        const deleteAmount = await expensiveDBModel.findOneAndDelete({ _id: ID })
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