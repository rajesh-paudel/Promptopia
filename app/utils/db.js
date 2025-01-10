import mongoose from "mongoose";

let isConnected = false;
export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("mongo db is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Promptopia",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connceted");
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
