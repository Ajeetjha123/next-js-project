import mongoose from "mongoose";

const connectToDB = async () => {
  const mongoDBURL = "mongodb+srv://ajeet:ajeetjha@cluster0.ytu3e.mongodb.net/";
  await mongoose
    .connect(mongoDBURL)
    .then(() => console.log("monogDB Connected Successfully"))
    .catch((e) => console.log(`Some Error Not Connected to databse ${e}`));
};
export default connectToDB;
