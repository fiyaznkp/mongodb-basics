const mongoose = require("mongoose")
const users = require("./users.js")

mongoose.connect("mongodb://localhost/users")    

run()

async function run (){
    const user = await users.create({name:"fiyaz",age:26})

    console.log(user)
}