const express = require('express');
const router = express.Router();
const infoSchema = require("./infoSchema");


//create
router.post("/create" , async (req,res) => {
    var data = new infoSchema({
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City
    });
    await data.save();
    res.json(data);
});

//GetAll
router.all("/getAll" , async (req,res) => {
    var infoFind = await infoSchema.find();
    res.json(infoFind);
});

router.get('/' , (req,res) => {
    res.send('Router From NEW JS');
})

module.exports = router;
