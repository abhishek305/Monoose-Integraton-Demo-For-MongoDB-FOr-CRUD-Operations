const express=require('express')
const fs=require('fs')
const uniqid=require('uniqid')
const app=express()



const users=JSON.parse(fs.readFileSync('../data/users.json'));
const tasks=JSON.parse(fs.readFileSync('../data/task.json'));


app.use(express.urlencoded({extended:true}))
//app.use(express.json())
app.get('/users',(req,res)=>{
    res.sendFile('/home/abhishek/Desktop/express server/src/create.html');
})

app.get('/users',(req,res)=>{
    res.json(users);
})

//adding users through the form in html

app.post('/users',(req,res)=>{
   console.log(req.body);
   let user={
       id:users.length,
       name:req.body.name,
       email:req.body.email,
   }
   
  
   //req.body.id=users.length+1;
   users.push(user);
   //res.send("form gone");
   //console.log(users);
    fs.writeFile('../data/users.json',JSON.stringify(users),(err)=>{
        if(err){
                        //cosnole.log(err);// handle error
          res.json({
                message:"user registration failed",
                 error:err
           })
               return err;
        }else {
            res.status(200);
            res.json({
                message:"user registration success",
                data:{
                    newTask:user

                }
            })

        }
    })

})

// app.get('/test/:somename/:id',(req,res)=>{
//     console.log(req.params)
//     res.send('paramaters are accpeted');

// })

//  getting data based on url entry

app.get(`/users/:id`,(req,res)=>{
  let user_index=users.find(users=>users.id == `${req.params.id}`)
  res.send(user_index)
  }) 


//get all data task

app.get('/taskall',(req,res)=>{
    res.json(tasks)
})

app.get('/task',(req,res)=>{
    res.sendFile('/home/abhishek/Desktop/express server/src/task.html');
})  
  
app.post('/task',(req,res)=>{
    let task={
        uid:uniqid(),
        task:req.body.taskname,
        status:req.body.status,
    }
    console.log(req.body);
    tasks.push(task)
    
    fs.writeFile('../data/task.json',JSON.stringify(tasks),(err)=>{
        if(err){
                        //cosnole.log(err);// handle error
          res.json({
                message:"task failed",
                 error:err
           })
               return err;
        }else {
            res.status(200);
            res.json({
                message:"task updated",
                data:{
                    newTask:task

                }
            })

        }
    })

 })

  app.get('/task/:id',(req,res)=>{  //append task to the json
    let task_fetch=tasks.find(tasks=>tasks.uid == `${req.params.id}`)
    res.send(task_fetch)
  })

  app.put('/task/update/:uid',(req,res)=>{
    tasks.find(tasks=>tasks.uid == req.params.uid).status="compeleted";
    
    //console.log(task_update);

    fs.writeFile('../data/task.json',JSON.stringify(tasks),(err)=>{
        if(err){
                        //cosnole.log(err);// handle error
          res.json({
                message:"task status failed",
                 error:err
           })
               return err;
        }else {
            res.status(200);
            res.json({
                message:"task status updated ",
                data:{
                     newTask:tasks

                }
            })

        }
    })
  })

  app.delete('/task/delete/:uid',(req,res)=>{
    tasks.splice(tasks.indexOf(tasks.find(tasks=>tasks.uid == `${req.params.uid}`)),1);
    fs.writeFile('../data/task.json',JSON.stringify(tasks),(err)=>{
        if(err){
                        //cosnole.log(err);// handle error
          res.json({
                message:"task delete failed",
                 error:err
           })
               return err;
        }else {
            res.status(200);
            res.json({
                message:"task deleted",
                data:{
                    newTask:task

                }
            })

        }
    })

  })

 
 


    

app.listen(4000)
console.log("server started at 4000");