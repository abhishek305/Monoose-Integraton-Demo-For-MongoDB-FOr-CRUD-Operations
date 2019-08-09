// middleware demo

const express=require('express');
const app=express()

app.use((req,res,next)=>{
    console.log('this is first in middleware');
    //res.send("resposne coming from middleware");
    next();
})

// app.use((req,res,next)=>{
//     console.log("inside second new middleware");
//     next();

// })

app.get('/',(req,res)=>{
    console.log("inside the route /test");
    res.send(`<h3>hello world from middleware</h3>`)
})


app.get('/test',(req,res)=>{
    console.log("inside the route /test");
    res.send(`<h3>hello world</h3>`)
})



app.listen(3000)
console.log("gone");

