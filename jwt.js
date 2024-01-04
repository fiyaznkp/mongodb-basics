const express = require("express")

require('dotenv').config()

const app = express()

const jwt = require("jsonwebtoken")

const port =5173


app.use(express.json())

const posts = [{
    userName:"fiyaz",
    age:26
},
{
    userName:"faris",
    age:23
}

]

app.get("/", tokenAuthentication ,(req,res)=>{
    res.json("welcome")
})

app.get("/posts",(req,res)=>{
    res.json(posts.filter(post => post.userName === req.user.name))
})

app.post("/login",(req,res)=>{
    const userName = req.body.userName

    const user = {name:userName}

    const token = jwt.sign(user, process.env.myToken)

    res.json({token:token})
})
const tokenAuthentication = (req,res,next)=>{
  const authHeader = req.headers["authorization"]

  const token = authHeader  && authHeader.split('')[1]
  if(token === null) 
  return res.sendStatus(401)

  jwt.verify(token, process.env.myToken, (err,user)=>{
    if(err) return res.sendStatus(403)

    req.user = user
    next()
  })
}


app.listen(port,()=>{
    console.log("server connected")
})