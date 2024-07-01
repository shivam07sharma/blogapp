import express from 'express';
import blogsdata from "./blogposts.js";
import cors from 'cors';
const app=express();
app.use(cors());
const PORT=3000;
app.get('/',(req,res)=>{
    res.send(blogsdata);
})
app.listen(PORT,()=>{
    console.log("server listening on Port ",PORT);
})