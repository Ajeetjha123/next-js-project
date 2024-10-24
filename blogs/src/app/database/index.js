import mongoose from "mongoose";

const connectDB = async () => {
  const mongodbURL = "mongodb+srv://ajeet:ajeetjha@cluster0.ytu3e.mongodb.net/";

  mongoose
    .connect(mongodbURL)
    .then(() => console.log("blog database connection is successful..."))
    .catch((e) => console.log("Mongo DB not connected", e));
};

export default connectDB;
