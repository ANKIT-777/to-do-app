
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
            required : true,
            unique : true
        },

        password :{
            type : String, 
            required : true
        }
        
    },
    {timestamps: true}
    )

const User = mongoose.model("User",UserModel);
export default User;