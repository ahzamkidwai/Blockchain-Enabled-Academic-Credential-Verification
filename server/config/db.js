import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;

        if (!uri) {
            throw new Error("No MongoDB URI found in environment variables");
        }

        await mongoose.connect(uri);

        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Error : ", error);
        console.error(error.message);
        process.exit(1); // stop app if DB fails
    }
};