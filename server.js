const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const {Db} = require("mongodb");
const {connected} = require("process")


const routes=require("./Routes/userroutes")
mongoose.connect('mongodb://localhost:27017/create_mobile',{useNewUrlParser:true},{useUnifiedTopology:true})

const db=mongoose.connection;
db.on("error",(err) =>{
    console.log(err);
});
db.once("open", () =>{
    console.log("mobile is Created");
});

const app = express();
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const PORT=3000;
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
});

app.use(routes);