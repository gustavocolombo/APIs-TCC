import mongoose from "mongoose";

export const connection = async () => {
  try {
    mongoose.connect(String(process.env.MONGO_URL));
    console.log("Database connected");
  } catch (err) {
    console.log("Error in connection", err);
  }
};
