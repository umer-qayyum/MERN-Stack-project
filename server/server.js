require("dotenv").config();
const express= require('express');
const cors=require('cors');
const app=express();
const authRouter=require('./router/auth-router');
const contactRouter=require('./router/contact-router');
const serviceRouter=require('./router/service-router');
const connectDb=require('./utils/db');
const errorMiddleware = require("./middleware/errorMiddleware");
const corsOption={
    origin:'http://localhost:5173',
    methods:"GET,POST,PUT,DELETE,HEAD,PATCH",
    credentials:true
}
app.use(cors(corsOption));
app.use(express.json());
app.use("/api/auth",authRouter);
app.use("/api/form",contactRouter);
app.use("/api/data",serviceRouter);
app.use(errorMiddleware)
const PORT=5000;
connectDb().then(()=>{
app.listen(PORT,(req,res)=>{
    console.log(`server is running at ${PORT}`);    
})
})