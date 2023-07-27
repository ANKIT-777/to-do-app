import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const DBconnect = async () => {
    try{
        await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser :true,
            useUnifiedTopology : true
        });

        console.log("Database CONNECTED");

    }
    catch(err){
        console.error("Error while connecting the databse:",err);
    }
}

export default DBconnect;