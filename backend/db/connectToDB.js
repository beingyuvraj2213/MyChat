import mongoose from "mongoose";

const connectToDB=async()=>{
    try{
        console.log('Connected To The Database');
        
        await mongoose.connect(process.env.MONGO_DB_URI)
    }
    catch(error){
        console.log("Error Connecting To Database",error.message);
        
    }
}

export default connectToDB