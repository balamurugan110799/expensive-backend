const routers = require("express").Router()
const auth = require("../middleware/auth")
const { AddExpensive, expensiveGetAll, editExpensive , removeExpensive} = require("../controller/expensiveController")
const {getAllUsers, signUp, LoginUser} = require("../controller/user/userController")

routers.route("/addExpensive").post(AddExpensive)
routers.route("/getAllExpensive").get(expensiveGetAll)
routers.route("/editExpensive/:id").put(editExpensive)
routers.route("/removeExpensive/:id").delete(removeExpensive)

routers.route("/getAllUser").get(auth,getAllUsers)
routers.route("/user/signUp").post(signUp)
routers.route("/user/login").post(LoginUser)





module.exports = routers