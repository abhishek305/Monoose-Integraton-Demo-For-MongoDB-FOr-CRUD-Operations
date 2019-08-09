const express =require('express')
const app=express()

const tasks=require('../controllers/tasks');

const router=express.Router();

//  get all tasks

router.route('/')
.get(tasks.getalltask)
.post(tasks.create_task)

router.route('/:id')
.delete(tasks.delete_task)
.put(tasks.update_task)
.get(tasks.get_specific_user);

module.exports=router;
