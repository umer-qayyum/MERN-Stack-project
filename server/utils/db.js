const mongoose=require('mongoose')
const URI=process.env.MONGODB_URI;
// moongose.connect(URI);
const connectDb=async()=>{
    try {
        await mongoose.connect(URI);
          console.log("connected successfully");
      } catch (error) {
          console.error("connection failed");
          process.exit(0);
      }
}
module.exports=connectDb;