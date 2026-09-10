import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI not set in environment variables");
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "beyownd_c_test",
    });
    isConnected = db.connections[0].readyState === 1;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
};