import { connect, ConnectOptions } from "mongoose";
// require('dotenv').config();
// const mongoose = require('mongoose');

export const dbConnect=()=>{
    connect('mongodb+srv://Amarnath:amarnathN@cluster0.1e9kkdb.mongodb.net/Foods?retryWrites=true&w=majority',{
        useNewUrlParser : true,
        useUnifiedTopology: true,
    } as ConnectOptions).then(
        ()=> console.log("connect successfully"),
        (error) => console.log(error)
    )
}