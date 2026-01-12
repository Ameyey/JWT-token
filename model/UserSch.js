import mongoose from "mongoose";

const UserSch = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  age:Number
})

const User = mongoose.model("User",UserSch,"User")
export default User;