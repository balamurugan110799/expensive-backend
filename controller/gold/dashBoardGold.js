const gold = require("../../model/gold/goldModel")

exports.getAllGoldCal =async (req,res)=>{
    try{
        const getGold =await gold.find()
        var total ;
        var gram =[];
        var boun=[];
        var prize =[];
        getGold.forEach(element => {
            if(element.weight==="gram"){
                gram.push(element.total) 
                prize.push(element.price) 
            }else if(element.weight==="boun"){
                boun.push(element.total).total
                prize.push(element.price) 
            }
        });
        var initialValue = 0;
        console.log(prize)
        

        var data = [42, 21, undefined, 50, 40, undefined, 9];

         removeUndefiend = prize.filter((el)=>{
            return el !== undefined
        })
        console.log(removeUndefiend)
data = prize.filter(function( element ) {
   return element !== undefined;
});
        console.log(data, "jjhh")
        var totalGrams = gram.reduce((acc,currentValue)=> acc +currentValue,initialValue)
        var totalBouns = boun.reduce((acc,currentValue)=> acc +currentValue,initialValue)
        var totalGoldPrice = removeUndefiend.reduce((acc,currentValue)=>acc+currentValue ,initialValue)
        console.log(totalGoldPrice)

        var garmCal = totalGrams*12.5/100

        var total = totalBouns + garmCal

        console.log(totalGrams, totalBouns, garmCal, total)
        // console.log(boun)
        res.status(200).json({
            status:"success",
            totalGrams : garmCal,
            totalBouns :totalBouns,
            totalGold: total,
            totalBuyPrize:totalGoldPrice
        })
    }catch(err){
        res.status(500).json({
            status: "failed",
            message: err
        })
    }
}