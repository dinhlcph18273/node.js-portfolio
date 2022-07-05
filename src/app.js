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



// mongoose.connect('mongodb+srv://dinhlcph18273:dinh28102002@cluster0.1p7hl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://dinhlcph18273:dinh28102002@cluster0.gmqlr.mongodb.net/node-port?retryWrites=true&w=majority')
.then(()=> console.log("kết nối db thành công"))
.catch((error)=> console.log(error))

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log("Server is running port",PORT);
})