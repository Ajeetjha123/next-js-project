import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const User = mongoose.models.User || mongoose.model("User", BlogSchema);

export default User;
