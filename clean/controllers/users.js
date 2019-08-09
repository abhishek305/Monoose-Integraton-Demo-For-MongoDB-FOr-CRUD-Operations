

//const express=require('express')
const fs=require('fs')
//const uniqid=require('uniqid')
//const app=express()


const users=JSON.parse(fs.readFileSync('../data/users.json'));

////////////////////////////////// create user route function//////////////////////////////////////////////////



const user_create=(req,res)=>{
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
 
 }

 ////////////////////////////////////////ends here//////////////////////////////////////////////////////////

 module.exports.user_create=user_create;