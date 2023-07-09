const mongoose = require('mongoose')


const Schema = mongoose.Schema

const userSchema = new Schema({
    phoneNumber:{
        type:Number,
        required:true,
        unique:true
    },email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    rentedCars:{
        type:String,
        required:false
    }
},{timestamps:true})


module.exports = mongoose.model("User",userSchema)