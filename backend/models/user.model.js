import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        minlength: [7, "Username must be at least 7 characters long"]
    },
    password:{
        type:String,
        required:true,
        minlength: [7, "Password must be at least 7 characters long"]
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    }
},{timestamps:true})

const User=mongoose.model("User",userSchema);

export default User;