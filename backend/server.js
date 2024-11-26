import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import messageRoutes from "./routes/message.routes.js"

import connectToDB from "./db/connectToDB.js";

dotenv.config();
const app=express();
const PORT=process.env.port || 2213;

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.get("/",(req,res)=>{
    // Root Route
    res.send("Welcome Here")
})


 
app.listen(PORT,()=>{
    connectToDB()
    console.log(`Server Running On Port ${PORT}`)
})