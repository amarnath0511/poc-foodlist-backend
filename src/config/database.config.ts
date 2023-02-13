import { connect, ConnectOptions } from "mongoose";
// require('dotenv').config();
// const mongoose = require('mongoose');

export const dbConnect=()=>{
    connect(process.env.MONGO_URI!,{
        useNewUrlParser : true,
        useUnifiedTopology: true,
    } as ConnectOptions).then(
        ()=> console.log("connect successfully"),
        (error) => console.log(error)
    )
}