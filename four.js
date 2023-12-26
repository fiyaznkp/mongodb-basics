const express = require("express");
const app = express();
const port = 5173;

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; // MongoDB URL
const dbName = 'users'; // Database name
const collectionName = 'userslist'; // Collection name

app.get("/", (req, res) => {
  MongoClient.connect(url, (err, client) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      res.status(500).send('Error connecting to MongoDB');
      return;
    }

    const db = client.db(dbName);

    db.collection(collectionName).find().toArray((err, result) => {
      if (err) {
        console.error('Error fetching data from MongoDB:', err);
        res.status(500).send('Error fetching data from MongoDB');
        client.close();
        return;
      }

      console.log(result); // Log the fetched data
      res.send(result); // Send fetched data as response to the browser
      client.close();
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
