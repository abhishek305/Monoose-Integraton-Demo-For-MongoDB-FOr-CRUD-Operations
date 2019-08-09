const express=require('express')
const app=express()

const taskRouter=require('./controllers/taskrouters');

const user_handlers=require('../clean/controllers/users');

app.use(express.urlencoded({extended:true}))
app.get('/users',(req,res)=>{
    res.sendFile('/home/abhishek/Desktop/express server/src/create.html');
})

app.get('/users',(req,res)=>{
    res.json(users);
})

app.post('/users',user_handlers.user_create)


app.get(`/users/:id`,(req,res)=>{
  let user_index=users.find(users=>users.id == `${req.params.id}`)
  res.send(user_index)
  }) 


app.get('/task',(req,res)=>{
    res.sendFile('/home/abhishek/Desktop/express server/src/task.html');
})  

app.use('/task',taskRouter)


app.listen(4000)
console.log("server started at 4000");