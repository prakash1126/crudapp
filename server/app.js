require("dotenv").config();
//express server
const express = require ('express');
const app = express();
const mongoose= require('mongoose');
//port
const port=8003;
//import schema from models
const user=require("./models/userSchema");
//dbconnection
require('./db/conn');
//listening port
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})
//for backend and frontend connection
const cors= require("cors");
app.use(cors());
//router
const router=require("./routes/router");
app.use(router);
app.use(express.json());

