import express from "express";
import mongoose from 'mongoose';
import  cors from 'cors';

const app =express();

const PORT = 4000;

app.use(cors);

await mongoose.connect(
    "mongodb+srv://dinuka:mern@cluster0.9kdpc8j.mongodb.net/?retryWrites=true&w=majority"
);

console.log("Mongo Db Connection is successful");

app.get('/',(req,res)=>{
    res.send("Hello Dinuk")
});

app.listen(PORT,()=>{
    console.log("server is running at http://localhost:4000")
})