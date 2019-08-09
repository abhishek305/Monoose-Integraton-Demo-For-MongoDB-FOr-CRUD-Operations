const express = require('express')
//const fs=require('fs')
//let rawdata=fs.readFileSync('raw.json','utf-8');
const app = express()   // creating new server


const users=[]
app.use(express.urlencoded({extended:true}))
 
app.post('/users',(req,res)=>{
  console.log(" post req received");
  console.log(req.body);
  res.send("thank for registering");
  users.push(req.body)
  console.log(users);

})



 
app.listen(3000)
console.log("server started at 3000");


































































//app.get('/',(req, res)=> {
  //   res.send('Hello World kkiijj')
  // })
  
  // app.get('/home',(req,res)=>{
  //     let homedata=
  //     `<div>
  //     <h1> Traniess </h1>
  //     <p><a href="/raw">Raw data</a></p>
  //     <p><a href="/cse">cse data</a></p>
  //     </div>
  //     `
  //     res.send(homedata)
  // })
  //  app.get('/raw',(req,res)=>{
  //     // res.send(rawdata)
  //     res.sendFile('/home/abhishek/Desktop/23-7-19 Node part/express server/data/raw.json')
  //     })
  // app.get('/cse',(req,res)=>{
  //         // res.send(rawdata)
  //         res.sendFile('/home/abhishek/Desktop/23-7-19 Node part/express server/data/cse.json')
  // })
      