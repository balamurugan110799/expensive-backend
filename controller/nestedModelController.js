const nestedModel = require("../model/NestedModel")

exports.addNestData = async (req, res) => {
    try {
        const addNestedModel = await nestedModel.create({
            id: req.body.id,
            name: req.body.name,
            mark: req.body.mark,
        })
        res.status(201).json({
            status: "success",
            data: addNestedModel
        })

    }
    catch (err) {
        res.status(500).json({
            status: "failed",
            message: err
        })
    }
}

exports.getAllnestedModel = async (req, res) => {
    try {
        const getNestedModel = await nestedModel.find()
        res.status(200).json({
            status: "success",
            data: getNestedModel
        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err
        })
    }
}

exports.updateNestedModel = async (req, res) => {
    try {
        const nestModelID = await req.params.id
        const upNestedModel = await nestedModel.findByIdAndUpdate({ _id: nestModelID }, {
            id: req.body.id,
            name: req.body.name,
            mark: req.body.mark,
        },{new:true})
        console.log(upNestedModel)
        res.status(200).json({
            status: "success",
            data: upNestedModel
        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err
        })
    }
}