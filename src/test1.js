const express = require('express')
const path = require('path')
const app=express()



let scriptpath=path.join(__dirname,'../public/scripts');
let imagepath=path.join(__dirname,'../public/images');
let stylepath=path.join(__dirname,'../public/styles');



app.use('/home',express.static(scriptpath));
app.use('/home',express.static(imagepath));
app.use('/home',express.static(stylepath));


app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html/homepage.html'));
    // res.sendFile(path.join(__dirname,'../public/scripts'));
    // res.sendFile(path.join(__dirname,'../public/styles'));
})


app.listen(3000);
// console.log(__dirname);

// console.log(path.join(__dirname,'../public/html'));