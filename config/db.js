import mongoose from "mongoose";

export const conntion =async ()=>{
  try {
     await mongoose.connect('mongodb://localhost:27017/JWT_login')
     console.log('Db conntion ')
  } catch (error) {
    console.log('error they conntion')
  }
}