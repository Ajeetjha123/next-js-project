import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://ajeet:ajeetjha@cluster0.ytu3e.mongodb.net/";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("User database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;
