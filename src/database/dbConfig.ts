import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    const connection: mongoose.Connection = mongoose.connection;
    connection.on('connected', () => {
    console.log("Database connected successfully");
    })
      connection.on('error', (e) => {
          console.log("Database connection error "+e);
          process.exit(1);
      })
  } catch (error) {
    console.log("Database connection failed", error);
  }
};
