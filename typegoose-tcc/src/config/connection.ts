import mongoose from "mongoose";

export const connection = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected");
  } catch (err) {
    console.log("Error in connection", err);
  }
};
