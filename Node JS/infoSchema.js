const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    CreatedTime:{
        type:Date,
        dafault:Date.now()
    }
});

module.exports = mongoose.model("info",infoSchema);