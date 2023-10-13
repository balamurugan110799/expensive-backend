const routers = require("express").Router()
const auth = require("../middleware/auth")
const { AddExpensive, expensiveGetAll, editExpensive, removeExpensive } = require("../controller/expensiveController")
const { getAllUsers, signUp, LoginUser } = require("../controller/user/userController")
const { addGold, getGold, updateGold, deleteGold } = require("../controller/gold/goldController")
const { getAllGoldCal } = require("../controller/gold/dashBoardGold")
const { addEstimate, getAllEstimate, updateEstimate, deleteEstimate } = require("../controller/house/estimateController")
const { addEstimatePayment, getEsitmatePayment, updateEstimatePayment, deleteEstimatePayment } = require("../controller/house/estimatePaymentController")
const { addNestData, getAllnestedModel, updateNestedModel } = require("../controller/nestedModelController")
const { AddAmount, updateAmountEntry, deleteAmount, getAmount } = require("../controller/user/amountEntry")
const { getAll } = require("../controller/expensiveDBModelController")
const { getDateTime } = require("../util.js/timeStamp")
const { AddIncome, getAllIncome, updateIncome, deleteIncome } = require("../controller/user/incomeController")
const { getAllExpensiveMothWise } = require("../controller/user/expensiveMonthWiseController")

routers.route("/addExpensive").post(AddExpensive)
routers.route("/getAllExpensive").get(expensiveGetAll)
routers.route("/editExpensive/:id").put(editExpensive)
routers.route("/removeExpensive/:id").delete(removeExpensive)

routers.route("/getAllUser").get(auth, getAllUsers)
routers.route("/user/signUp").post(signUp)
routers.route("/user/login").post(LoginUser)

routers.route("/addGold").post(addGold)
routers.route("/getGold").get(getGold)
routers.route("/updateGold/:id").put(updateGold)
routers.route("/deleteGold/:id").delete(deleteGold)

routers.route("/getGoldCal").get(getAllGoldCal,)

routers.route("/addEstimate").post(addEstimate)
routers.route("/getAllEstimate").get(getAllEstimate)
routers.route("/updateEstimate/:id").put(updateEstimate)
routers.route("/deleteEstimate/:id").delete(deleteEstimate)

//nested
routers.route("/addNestedModel").post(addNestData)
routers.route("/getnestedModel").get(getAllnestedModel)
routers.route("/updatenestedModel/:id").put(updateNestedModel)

routers.route("/addEstimatePayment").post(addEstimatePayment)
routers.route("/getEsitmatePayment").get(getEsitmatePayment)
routers.route("/updateEstimatePayment/:id").put(updateEstimatePayment)
routers.route("/deleteEstimatePayment/:id").delete(deleteEstimatePayment)

routers.route("/AddAmount").post(AddAmount)
routers.route("/getAmount").get(getAmount)
routers.route("/updateAmountEntry/:id").put(updateAmountEntry)
routers.route("/deleteAmount/:id").delete(deleteAmount)
//
routers.route("/getAll").get(getAll)

routers.route("/AddIncome").post(AddIncome)
routers.route("/getAllIncome").get(getAllIncome)
routers.route("/updateIncome/:id").put(updateIncome)
routers.route("/deleteIncome/:id").delete(deleteIncome)




routers.route("/getAllExpensiveMothWise").get(getAllExpensiveMothWise)


routers.route("/time").get(getDateTime)





module.exports = routers