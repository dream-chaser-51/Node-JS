//Third Party Modules
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const infoRouter = require('./router');
const morgan = require("morgan");

//middelware
app.use(morgan("common"));
app.use(express.json());
//Router Start
app.use("/info",infoRouter);


app.listen(5000, () => {
    console.log("The server Running on 5000");
})

mongoose.connect('mongodb://localhost/firsttest', { useNewUrlParser: true , useUnifiedTopology: true },(err) => {
    if(!err)
    {
        console.log("DB CONNECTED");
    }
    else
    {
        console.log("DB NOT CONNECTED");
    }
});