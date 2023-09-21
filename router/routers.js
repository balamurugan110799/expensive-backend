const routers = require("express").Router()
const auth = require("../middleware/auth")
const { AddExpensive, expensiveGetAll, editExpensive , removeExpensive} = require("../controller/expensiveController")
const {getAllUsers, signUp, LoginUser} = require("../controller/user/userController")
const {addGold,getGold, updateGold,deleteGold} = require("../controller/gold/goldController")
const {getAllGoldCal} = require("../controller/gold/dashBoardGold")
const {addEstimate, getAllEstimate} = require("../controller/house/estimateController")
const {addEstimatePayment, getEsitmatePayment, updateEstimatePayment, deleteEstimatePayment} = require("../controller/house/estimatePaymentController")


routers.route("/addExpensive").post(AddExpensive)
routers.route("/getAllExpensive").get(expensiveGetAll)
routers.route("/editExpensive/:id").put(editExpensive)
routers.route("/removeExpensive/:id").delete(removeExpensive)

routers.route("/getAllUser").get(auth,getAllUsers)
routers.route("/user/signUp").post(signUp)
routers.route("/user/login").post(LoginUser)

routers.route("/addGold").post(addGold)
routers.route("/getGold").get(getGold)
routers.route("/updateGold/:id").put(updateGold)
routers.route("/deleteGold/:id").delete(deleteGold)

routers.route("/getGoldCal").get(getAllGoldCal,)

routers.route("/addEstimate").post(addEstimate)
routers.route("/getAllEstimate").get(getAllEstimate)

routers.route("/addEstimatePayment").post(addEstimatePayment)
routers.route("/getEsitmatePayment").get(getEsitmatePayment)
routers.route("/updateEstimatePayment/:id").put(updateEstimatePayment)
routers.route("/deleteEstimatePayment/:id").delete(deleteEstimatePayment)


module.exports = routers