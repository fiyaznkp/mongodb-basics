const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    }
    ,
    price:{
        type:Number,
        required:true
    },
    authorName:String,
    publshed:{
        type:Date,
        default:Date.now
    },
    category:String
})

module.exports= mongoose.model("book",bookSchema)