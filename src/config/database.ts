import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try{
        await mongoose.connect(process.env.MONGO_URI!);

        console.log("MongoDB connected");
    }catch(err){
        console.log(err);
    }
};