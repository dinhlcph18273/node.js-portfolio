import express from "express";
import cors from "cors"
import morgan from "morgan";
import mongoose from "mongoose";

import profileRouter from "../routes/profile"
import skillRouter from "../routes/skill"
import projectRouter from "../routes/projects"



const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

app.use("/api", profileRouter)
app.use("/api",skillRouter)
app.use("/api",projectRouter)



mongoose.connect('mongodb://localhost:27017/portfolio')
.then(()=> console.log("kết nối db thành công"))
.catch((error)=> console.log(error))

const PORT = 8000;
app.listen(PORT, ()=>{
    console.log("Server is running port",PORT);
})