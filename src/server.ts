import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors"
import foodRouter from './routers/food.router'
import userRouter from './routers/user.router'
import { dbConnect } from './config/database.config';
dbConnect();

const app = express();
app.use(express.json());
app.use( cors({
    credentials:true,
    origin:["https://poc-foodlist-frontend-4t9cnt6tp-amarnath0511.vercel.app/"]
}));


app.use("/api/foods", foodRouter)
app.use("/api/users", userRouter)


const port = 5000;
app.listen(port, ()=>{
    console.log("website served on http://localhost:" + port);
})