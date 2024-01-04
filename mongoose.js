const express = require("express")

const app = express()

const port =5173

const bodyParser = require("body-parser")

const mongoose = require("mongoose")



const contacts = require("./contacts")

const connectToDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/contacts",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        
        console.log("connected to server")

    }catch(err){
        console.log("failed to connnect to server",err)
        process.exit(1)
    }
}

connectToDB()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port,()=>{
    console.log("server connected")
})