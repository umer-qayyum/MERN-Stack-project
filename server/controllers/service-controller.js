const Service=require('../models/service-model');
const services=async(req,res)=>{
    try {
        const response=await Service.find();
        console.log("response is ",response);
        if(!response){
            res.status(404).json({msg:"response not found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`error from catch of controller is ${error}`)
    }
}
module.exports=services;