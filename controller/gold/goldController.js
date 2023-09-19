const { findOne } = require("../../model/expensiveModel")
const gold = require("../../model/gold/goldModel")

exports.addGold = async (req, res) => {
    try {
        const createGold = await gold.create({
            date:req.body.date,
            weight:req.body.weight,
            total:req.body.total,
            price:req.body.price,
            eachPrice:req.body.eachPrice,
            gst: req.body.gst,
        })

        res.status(201).json({
            status:"success",
            data:createGold,
            // eachPrice:
        })

    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err
        })
    }
}

exports.getGold =async(req,res)=>{
    try{
        var getAllGold = await gold.find()
        res.status(201).json({
            status:"success",
            data:getAllGold,
            // eachPrice:
        })
        
    }catch(err){
        res.status(500).json({
            status: "failed",
            message: err
        })
    }
}

exports.updateGold =async (req,res) =>{
    try{
        var id= (req.params.id)
      
            // res.status(404).json({
            //     status: "failed",
            //     message: "Id not Founded"
            // })
     
        var updateGoldData = await gold.findByIdAndUpdate(id,{$set:{
            date:req.body.date,
            weight:req.body.weight,
            total:req.body.total,
            price:req.body.price,
            eachPrice:req.body.eachPrice,
            gst: req.body.gst,
        }},{new: true,})
        res.status(201).json({
            status:"success",
            data:updateGoldData,
        })
    }catch(err){
        res.status(500).json({
            status: "failed",
            message: err
        })
    }
}

exports.deleteGold=async(req,res)=>{
    try{
        var goldId = (req.params.id)
        var deleteData = await gold.findOneAndDelete(goldId,{new:true})
        res.status(200).json({
            status:"success",
        })
    }catch(err){
        res.status(500).json({
            status: "failed",
            message: err
        })
    }
}