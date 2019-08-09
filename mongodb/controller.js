const express=require('express')
const MongoClient=require('mongodb').MongoClient
const dotenv=require('dotenv')
const mongodb=require('mongodb').ObjectId


dotenv.config({path:'./config.env'});

const url=process.env.DATABASE;

const getalldetails=(req,res)=>{
    MongoClient.connect(url,{ useNewUrlParser: true },(err,connection)=>{
        if(err){
            console.log(err);
            return err;
        }
        console.log("successfull connected to db");
        console.log(connection);
        const database=connection.db('cse');
        console.log(database);
        const collection=database.collection('csedata');
        //console.log(collection);
        collection.find().toArray((err,data)=>{
                    if(err){
                        console.log(err);
                        return err;
                    }
                    console.log("fetched details");
                    res.send(data);
                    
                })
            })
         }
    
 const specificusers=(req,res)=>{
    MongoClient.connect(url,{ useNewUrlParser: true },(err,connection)=>{
        if(err){
            console.log(err);
            return err;
        }
        console.log("successfull connected to db");
        console.log(connection);
        const database=connection.db('cse');
        console.log(database);
        const collection=database.collection('csedata');
       // var obj_id = new ObjectID('5d3fdafe92a5bde39a684782');
        var id = req.params.id

        //console.log(collection);
        //myquery=({"_id":new mongodb.ObjectId("5d3fdafe92a5bde39a684782")})
        collection.findOne({_id:mongodb.ObjectId(id)},(err,data)=>{
                    if(err){
                        console.log(err);
                        return err;
                    }
                    //let task_fetch=collection.find(collection=>collection._id == `${req.params.id}`)
                    console.log("fetched specfic user details");
                    res.send(data);
                    
                })
            })
         }

         

module.exports.getalldetails=getalldetails
module.exports.specificusers=specificusers