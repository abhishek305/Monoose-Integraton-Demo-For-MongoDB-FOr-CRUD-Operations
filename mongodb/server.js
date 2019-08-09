//const dotenv=require('dotenv')
const express =require('express')

//const MongoClient=require('mongodb').MongoClient;

const approute=require('../mongodb/app')
const app=express()


app.use('/users',approute)
app.listen(3000)
console.log("server started on 3000");
   

    








































    // var myobj = [
    //     { name: 'John', address: 'Highway 71'},
    //     { name: 'Peter', address: 'Lowstreet 4'},
    //     { name: 'Amy', address: 'Apple st 652'},
    //     { name: 'Hannah', address: 'Mountain 21'},
    //     { name: 'Michael', address: 'Valley 345'},
    //     { name: 'Sandy', address: 'Ocean blvd 2'},
    //     { name: 'Betty', address: 'Green Grass 1'},
    //     { name: 'Richard', address: 'Sky st 331'},
    //     { name: 'Susan', address: 'One way 98'},
    //     { name: 'Vicky', address: 'Yellow Garden 2'},
    //     { name: 'Ben', address: 'Park Lane 38'},
    //     { name: 'William', address: 'Central st 954'},
    //     { name: 'Chuck', address: 'Main Road 989'},
    //     { name: 'Viola', address: 'Sideway 1633'}
    //   ];
//     collection.find().toArray((err,data)=>{
//         if(err){
//             console.log(err);
//             return err;
//         }
//         console.log("inserted successfull");
//         console.log(data);
//     })
// })
// collection.insertMany(myobj,(err,data)=>{
//             if(err){
//                 console.log(err);
//                 return err;
//             }
//             console.log("inserted successfull");
//             console.log(data);
//         })
//     })
    
    



// myoldquery=({"name":"Random user"});
// mynewvalue={$set:{"name":"abhishek ezhava"}};

// collection.updateOne(myoldquery,mynewvalue,(err,data)=>{
//     if(err){
//         console.log(err);
//         return err;

//     }
//     console.log(data);
//     console.log("update done");
// })
// })

// myoldquery=({"name":"Sagar Kamble"});
// mynewvalue={$set:{"personal.interests":["guitar"]}};

// collection.updateMany(myoldquery,mynewvalue,(err,data)=>{
//     if(err){
//         console.log(err);
//         return err;

//     }
//     console.log(data);
//     console.log("update done all");
// })
// })


// myoldquery=("personal.interests":["guitar"]});
// mynewvalue={$set:{"personal.interests":["guitar"]}};

// collection.updateMany(myoldquery,mynewvalue,(err,data)=>{
//     if(err){
//         console.log(err);
//         return err;

//     }
//     console.log(data);
//     console.log("update done all");
// })
// })



// myoldquery=({"name":"Rando"});


// collection.deleteOne(myoldquery,(err,data)=>{
//     if(err){
//         console.log(err);
//         return err;

//     }
//     console.log(data);
//     console.log("delete done");
// })
// })

//console.log(Mongodb);



//console.log(process.env);