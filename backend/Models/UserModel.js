import express from "express";
import mongoose from "mongoose";

const UserModel = mongoose.Schema(
    {
        firstname :{
            type : String,
            required : true
        },

        lastname :{
            type : String, 
            required : true
        },
        
        username :{
            type : String,
            required : true
        },

        password :{
            type : String, 
            required : true
        }
        
    })

const User = mongoose.model("User",UserModel);
export default User;