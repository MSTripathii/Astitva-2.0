import mongoose from "mongoose";

const connectOwnerDB = async () => {
  console.log("hello potty")
  try {
    const conn = await mongoose.connect("mongodb+srv://madhusudan12tripathi:hello@astitva.ww4gw.mongodb.net/?retryWrites=true&w=majority&appName=astitva");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectOwnerDB;