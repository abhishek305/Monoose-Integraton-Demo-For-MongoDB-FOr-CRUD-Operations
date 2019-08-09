const mongoose= require('mongoose');
const connection=require("./connectdb")
//const url='mongodb://localhost:27017/mongoose'

//User schema

const userSchema=mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:[true,'Incomplete']
    }
})
