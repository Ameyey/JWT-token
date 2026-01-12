import express from 'express'
import cookie_parser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { conntion } from './config/db.js'
import User from './model/UserSch.js'
import { profile  ,save} from './Controller/Auth_Controller.js'
conntion()

const app =express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookie_parser())


app.get('/',(req,res)=>{
  res.render('from.ejs')
})

app.get('/login',(req,res)=>{
  res.render('index.ejs')
})

app.post('/profile',profile)

app.post('/save',save)

app.get('/profile',(req,res)=>{
  res.send('ok')
})

app.get('/ver',(req,res)=>{
  if(req.cookies.token){
    res.send('ok')
  }
  else{
    res.send('not')
  }
})

app.get('/logout',(req,res)=>{
  res.cookie("token","")
  res.redirect('/')
})

app.listen(3000,()=>{
  console.log('Server Run ...')
})



