const mongoose = require("mongoose")


const usersSchema = new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        min:18,
        max:75
    },
    email:{
      type:String,
      required:true,
      lowercase:true,
      minLength:8,
      maxLength:20
    } ,
    createdAt:{ 
        type:Date,
        immutable:true,
        default:()=> Date.now()
        
    },
    updatedAt : {
       type:Date,
       default:()=> Date.now()
    },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies:[String],
    address:{
        street: String,
        pincode:Number,
        city:String
    }
})

module.exports = mongoose.model("users",usersSchema)