import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully!");
    });
    connection.on("error", (error) => {
      console.log(
        "MongoDB connection error, make sure MongoDB is running" + error
      );
      process.exit();
    });
  } catch (error) {
    console.log("DB Connect Error", error);
  }
};
