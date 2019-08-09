const express=require('express')
const app=express()


// const middleware=[middleware1,middleware2];
// middleware.forEach((i)=>{
//     app.use
// })

const middleware1=(req,res,next)=>{
    console.log('middleware route 1');
}

const middleware2=(req,res,next)=>{
    console.log('middleware route 1');
}

app.get('/test',middleware1,middleware2,(req,res)=>{
    console.log("main toute handler");
    res.send('main handler');
})

app.listen(3000)
console.log("server stared 3000");
