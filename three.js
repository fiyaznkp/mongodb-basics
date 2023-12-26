// 
const express = require("express");
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 5173;

MongoClient.connect('mongodb://localhost:27017/store', (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  const db = client.db('store');

  app.get("/", (req, res) => {
    db.collection('products').find().toArray((err, result) => {
      if (err) {
        res.status(500).send('Error retrieving data from the database');
        return;
      }

      console.log(result); // Logging the result to the terminal
      res.json(result); // Sending the result as a JSON response
    });
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
