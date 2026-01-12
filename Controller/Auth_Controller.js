import User from "../model/UserSch.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const profile = async(req,res)=>{
  let email = req.body.email;
  let password = req.body.password
  let pass = await User.findOne({email})  
  if(!pass){
    res.send('they are not Email id')
  }
  let incode = await bcrypt.compare(password ,pass.password )
  if(!incode){
    res.send('they are not password')
  }
  let token_Ver= jwt.verify(req.cookies.token,"Secret_key")
  if(pass && incode && token_Ver){ // they are Check token 
    res.redirect('/profile')
  }
}


export const save = async (req,res)=>{
  // await User.create(req.body)
  // console.log('User insert Databases')  // they are same

  let { name , email ,password , age} = req.body;

  let hashPass =await bcrypt.hash(password,10)
  console.log(hashPass)

  let data = new User({name , email ,password:hashPass , age})
  let token = jwt.sign({email:email},"Secret_key");
  res.cookie("token",token)
  await data.save()
  res.redirect('/login')

}