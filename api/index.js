import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.connect("mongodb+srv://tangevvacse:qwert2004@mern-blog.rpq6m.mongodb.net/mern-blog?retryWrites=true&w=majority&appName=mern-blog")
.then(()=>{
    console.log("Mongodb is connected");
})
.catch((err)=>{
    console.log(err);
})
const app=express();

app.listen(3000,()=>{
    console.log(`server listening on port 3000`);
})