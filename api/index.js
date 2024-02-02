import express from "express";
//l'utiliser faire la configuration 
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./rootes/auth.js"
import usersRoute from "./rootes/users.js"
import exercisesRoute from "./rootes/exercises.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()

dotenv.config()

   //function asynchrone
  const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.")
    } catch (error) {
        throw error;
    } 
  };
 

  //si ne pas connecté   
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!")
   })
 

  //middleware
  app.use(express.json());
  app.use(cookieParser())
  app.use(cors());

  app.use("/api/auth", authRoute);
  app.use("/api/users", usersRoute);
  app.use("/api/exercises", exercisesRoute);
  
  //itha fama errer fel api ital3ou bel detaille 
  app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });


app.listen(8000, () =>{
    //appel
    connect()
    console.log("connected to backend")
})