import express from "express"
import mongoose from 'mongoose';
import dotenv from "dotenv"
dotenv.config();
mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("Database is connected")
}).catch(()=>{
    console.log(err)
})
const app=express();
app.listen(3000,()=>{
    console.log("server is listening on 3000!!!!")
})