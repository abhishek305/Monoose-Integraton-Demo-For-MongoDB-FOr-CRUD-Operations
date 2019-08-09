//////////////// file contains tasks functions/////////////////////////////////////////////////////////////

const express=require('express')
const fs=require('fs')
const uniqid=require('uniqid')

const tasks=JSON.parse(fs.readFileSync('../data/task.json'));
//const message = require('../controllers/create_response.js')
///////////////////////////////////////fetch all task //////////////////////////////////////////////////////////////
const getalltask=(req,res)=>{
    res.json({
        status:"susccess in fetching all task",
        data:{
            tasks
        }
    })
}
////////////////////////////////////////////// ends here////////////////////////////////////////////////////////////


///////////////////////////////////////// create task method starts here/////////////////////////////////////////////

const create_task=(req,res)=>{
    let task={
            uid:uniqid(),
            task: req.body.taskname,
            status: req.body.status,
    }
    console.log(req.body);
    tasks.push(task)
    
    fs.writeFile('../data/task.json',JSON.stringify(tasks,null,2),(err)=>{
        if(err){
                        //cosnole.log(err);// handle error
          res.json({
                message:"task creation failed",
                 error:err
           })
               return err;
        }else {
            res.status(200);
            res.json({
                message:"task created ",
                data:{
                    newTask:tasks
                } 
                })
            }
        

        
    })

 }
 //////////////////////////////////////////////////////////ends here ////////////////////////////////////////////////////////

 //////////////////////////////////////////////////////////upadate task starts here ////////////////////////////////////////////////////////


 const update_task=(req,res)=>{
    tasks.find(tasks=>tasks.uid == req.params.uid).status="compeleted";
    
    //console.log(task_update);

    fs.writeFile('../data/task.json',JSON.stringify(tasks,null,2),(err)=>{
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
  }

 ////////////////////////////////////////////////////ends here/////////////////////////////////////////////////////// 


//////////////////////////////////////////////////////delete starts here////////////////////////////////////////////


 const delete_task=(req,res)=>{
    tasks.splice(tasks.indexOf(tasks.find(tasks=>tasks.uid == `${req.params.uid}`)),1);
    fs.writeFile('../data/task.json',JSON.stringify(tasks,null,2),(err)=>{
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
                    newTask:tasks

                }
            })

        }
    })

  }

///////////////////////////////////////////////////////  ends here ///////////////////////////////////////////////////////

///////////////////////////////////////get specific user //////////////////////////////////////////////////////////////////

const get_specific_user=(req,res)=>{
    
        let task_fetch=tasks.find(tasks=>tasks.uid == `${req.params.id}`)
        res.json({
            message:"specific task fetched",
            data:{
                newTask:task_fetch

            }
        })
      }






module.exports.delete_task=delete_task;
module.exports.update_task=update_task;
module.exports.getalltask=getalltask;
module.exports.create_task=create_task;
module.exports.get_specific_user=get_specific_user