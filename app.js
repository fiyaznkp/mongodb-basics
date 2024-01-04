const mongoose = require("mongoose")
const users = require("./users.js")

mongoose.connect("mongodb://localhost/users")    

run()

async function run (){
    try{
    const user = await users.create({
        name:"fiyaz",
        age:26,
        email:"fiyaznkp@gmail.com",
        hobbies:["reading" , "travelling" , " watching movies"],
        address:{
            street: "albert",
            pincode:673572,
            city:"koduvally"
        }
})

    
    console.log(user)
} catch(err){
    console.log(err.message)
}
}