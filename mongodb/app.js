const express =require('express')
const app=express()

const taskcontroller=require('../mongodb/controller');

const router=express.Router();

//  get all tasks

router.route('/')
.get(taskcontroller.getalldetails)


router.route('/:id')
.get(taskcontroller.specificusers)

module.exports=router;