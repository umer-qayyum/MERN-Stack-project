const Contact=require('../models/contact-model');
const contactForm=async(req,res)=>{
    try {
        const response=req.body;
        await Contact.create(response);
        res.status(200).json({ message: "message received" });
    } catch (error) {
        res.status(400).json({ message: "error in contact-controller" });
    }
};
module.exports=contactForm;