const expensiveDBModel = require("../../model/expensiveDBModel");
const { getDateTime } = require("../../util.js/timeStamp");

exports.getAllExpensiveMothWise = async(req,res) =>{
    try{
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
    }catch(err){
        res.status(404).json({
            status: "failed",
            message: err
        })
    }
}