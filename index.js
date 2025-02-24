import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
// const path =require('path')
import {dirname}  from 'path'
import { fileURLToPath } from 'url'
const __dirname=dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT=3500

app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan("tiny"))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})
app.post('/check',(req,res)=>{
    if(req.body.password === "ILoveProgramming"){
        res.sendFile(__dirname+"/public/secret.html")
    }else{
        res.send("Wrong password")
    }
})

app.listen(PORT,()=>{
    console.log(`Server Running on port ${PORT}`)
})