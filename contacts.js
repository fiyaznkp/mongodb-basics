const mongoose = require("mongoose")



const contactsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true,
        minLength:3,
        maxLength:10,
        trim:true,
        validate: {
            validator: function(value){
                const firstNameRegex = /^[A-Za-z]+$/
                return firstNameRegex.test(value)

            },
            message:"first name must only contain alphabets"
        }
    },
    lastName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:10,
        trim:true,
        validate: {
            validator:function(value) {
                const lastNameRegex = /^[A-Za-z]+$/
                return lastNameRegex.test(value)
            }
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minLength:5,
        maxLength:20
    },
    age:{
        type:Number,
        minAge:18,
        maxAge:80,
        required:true
    }
})
const contacts = mongoose.model('contacts',contactsSchema)

module.exports = contacts