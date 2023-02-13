import dotenv from "dotenv"
dotenv.config({path:"backend/config/.env"});

import passport from "passport";


import express from "express";

const app = express();


import cors from "cors";
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))
 

import User from "./Views/user.js";
import msRoute from "./Controllers/studentLoginController.js";

import sessions from "express-session";
import cookieParser from "cookie-parser";

import cokkieSession from "cookie-session";

import student from "./Views/student.js";
import project from "./Views/projects.js";


app.use(express.json());

import mongoose from "mongoose";
import Student from "./Models/Student.js";

//mongoose connection
import connectDatabase from "./config/database.js"
import authRouter from "./Views/msAuth.js";
connectDatabase();


app.use("/user",User);


const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));



app.use(passport.initialize());
app.use(passport.session());

// app.use("",msRoute);
app.use(authRouter)
app.use("/student",student)
app.use("/project",project);

app.get("/",async (req,res)=>{
    if(req.user){
        const student = await Student.findById(req.user._id);
        res.send(student);   
    }
    else{
        res.send("Hey");
    }
})



app.listen(process.env.PORT,(req,res,err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server listening on PORT ",5000);
    }
})