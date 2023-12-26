const express = require("express")

const app = express()

const port = 5173

let db;

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/users', (err, client) => {
  if (err) throw err

   db = client.db('users')

})

app.get("/",(req,res)=>{

    
  db.collection("userslist").find().toArray((err, result) => {
    if (err) throw err
    res.send(result)
    console.log(result)
  })
    
})

app.listen(port) 