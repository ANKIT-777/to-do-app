import mongoose from "mongoose";
import User from "../Models/UserModel.js";
import bcrypt from "bcrypt";

export const RegisterUser = async(req,res) => {
    
        const {firstname , lastname , username , password} = req.body; 
        const salt = await bcrypt.genSalt(10);
        const hashedPasswrod = await bcrypt.hash(password,salt);

        const newUser = new User ({
            firstname,
            lastname,
            username,
            password : hashedPasswrod
        });

    try {
       await newUser.save();
       res.status(200).json(newUser);
    }
    catch(err)
    {
        res.status(500).json({ message: err.message });
    }
};

const login = async(req,res) => {
    const {username,password} = req.body;

    try {
        const user = await User.findOne({username: username});

        if(user){
            const validity = bcrypt.compare(password, user.password);

            validity? res.status(200).json(user):res.status(400).json({message:"inccorect password"});
        }
        else{
            res.status(400).json({message:"invalid username"});
        }

    }
    catch(err){
        res.status(500).json({message:err});
    }

}
