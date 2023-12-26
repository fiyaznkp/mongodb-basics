const express = require("express");
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 5173;

MongoClient.connect('mongodb://localhost:27017/store', (err, client) => {
  if (err) throw err;

  const db = client.db('store');

  // MongoDB query moved inside the route handler
  app.get("/", (req, res) => {
    db.collection('products').find().toArray((err, result) => {
      if (err) throw err;

      console.log(result); // Logging the result to the terminal
      res.send(result); // Sending the result as the response
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
