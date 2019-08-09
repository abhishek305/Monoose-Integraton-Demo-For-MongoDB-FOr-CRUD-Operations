const mongoose= require('mongoose');
const connection=require("./connectdb")
//const url='mongodb://localhost:27017/mongoose'

//User schema

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})

//user model creation

const userdata = mongoose.model('userdata',userSchema);

//////////////////////// inserting many users create method ////////////////////////////////////////////////////////////

// let newuser1=new userdata({
//     email:"akshay@gmail.com",
//     name:"akshay"
// })

// let newuser2=new userdata({
//     email:"sample@gmail.com",
//     name:"sample"
// })

// let newuser3=new userdata({
//     email:"ezhava@gmail.com",
//     name:"ezhava"
// })

// userdata.create([newuser1,newuser2,newuser3])   //we can also replace (create) with (insertMany) 
// .then((data)=>{
    
//     console.log(data);
// }).catch((err)=>{
    
//     console.log(err);
// })

////////////////////////////////////////////////////// create ends here//////////////////////////////////////////////////


////////////////////////////////////////////////////// insert using save //////////////////////////////////////////////////


// let udata2 = new userdata({
//     email:"mayur@yahoo.com",
//     name:"mayur"
  

// })

// let udata3 = new userdata({
//     email:"john@yahoo.com",
//     name:"john"
  

// })

// let udata4 = new userdata({
//     email:"fredy@yahoo.com",
//     name:"fredy"
  

// })

// udata2.save()
// udata3.save()
// udata4.save()

/////////////////////////////////////////////// using save ends here ////////////////////////////////////////////////////////


///////////////////////// find using regex/////////////////////////////////////////

// userdata.find({ name: {$regex:/abhishek/}},(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
//     //return data;
// })

///////////////////////// findbyId        /////////////////////////////////////////


// userdata.findById("5d413404f1c8f5174ae58059")
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// ///////////////////////// find all   /////////////////////////////////////////


// userdata.find()
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


///////////////////////////   deleteone method   ///////////////////////////////////////////////////


// userdata.deleteOne({name:"random"})
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


/////////////////////////////////////// deletemany ////////////////////////////////////////////////////////////

// userdata.deleteMany({email:{$regex:/@gmail.com/i}})
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


///////////////////////////////////////////// update one//////////////////////////////////////////////

// userdata.updateOne({email:{$regex:/ezhava@gmail.com/}},{email:"ezhava@yahoo.in"})
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

///////////////////////////////////////////// update many//////////////////////////////////////////////

// userdata.updateMany({email:{$regex:/@gmail.com/}},{email:"@outlook.in"})
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

///////////////////////////////////////////// findone and update //////////////////////////////////////////////

// userdata.findOneAndUpdate({name:"ezhava"},{$set:{name:"ezhavaone"}},{new:true})
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

///////////////////////////////////////////// replaceone //////////////////////////////////////////////

// userdata.findOneAndUpdate({name:"ezhavaone"},{$set:{name:"ezhavatwo"}})
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })















//////////////////////////////////////// for reference//////////////////////////////////////////////////////////////////////




// mongoose.connect(url,{useNewUrlParser:true})
// .then((connection)=>{
//     //console.log(connection);
//     console.log("connected to DB");
//     let udata1= new userdata({
//         email:"abhishek@gmail.com",
//         name:"abhishek"
//     })

//     udata1.save()   // returns a promise

// }).catch((err)=>{
//     console.log(err);
//     console.log("connection failed");
// })