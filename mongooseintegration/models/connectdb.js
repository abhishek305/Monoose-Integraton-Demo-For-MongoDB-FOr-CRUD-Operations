const mongoose = require("mongoose");

const url='mongodb://localhost:27017/mongoose'

mongoose.connect(url,{useNewUrlParser:true})
.then((connnection)=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log('error in coonecting');
})

module.exports="some data";