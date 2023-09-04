const express = require("express")
const dotenv = require("dotenv")
const Router = require("./router/routers")
dotenv.config("./.env")
const db = require("./config/db")
const bodyParser = require("body-parser")
var cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())


app.use("/api",Router)

app.listen(process.env.PORT, () => {
    console.log("PORT IS RUNNInG:4000")
})