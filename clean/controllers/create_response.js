const express=require('express')
const fs=require('fs')
const uniqid=require('uniqid')

//const tasks=JSON.parse(fs.readFileSync('../data/task.json'));

const Message = function(body){
    this.object=
     {
         "task": body.taskname,
         "status": body.status,
         "app_user_object_uid": "",
         "created_at": new Date().toLocaleString(),
         "updated_at": "",
          "uid": uniqid(),
         "published": true,
         "ACL": {
             "can": []
         },
         "__loc": null,
         "_version": 1,
         "collaborators": [],
         "created_by": null,
         "updated_by": null,
         "tags": []
     }
  }
  


const message_print=(body)=>{
    let message =new Message(body)
    return message;

    //return body;
}

let body={
    taskname:"",
    status:"",
}

//console.log(message_print(body));




module.exports.message_print = message_print

























// const uniqid = require('uniqid');
// const newTask = function(body){
//   this.object=
//    {
//        "task": body.task,
//        "status": body.status,
//        "app_user_object_uid": "",
//        "created_at": new Date().toLocaleString(),
//        "updated_at": "",
//        "uid": uniqid(),
//        "published": true,
//        "ACL": {
//            "can": []
//        },
//        "__loc": null,
//        "_version": 1,
//        "collaborators": [],
//        "created_by": null,
//        "updated_by": null,
//        "tags": []
//    }
// }
// //use task.object
// const invalidAPI = {
//    "error_message": "Bad news! We can't find that application. Please try again.",
//    "error_code": 109,
//    "errors": {
//        "api_key": [
//            "is invalid"
//        ]
//    }
// }