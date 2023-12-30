// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://localhost:27017/users'
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   if (err) {
//     console.error('Error connecting to MongoDB:', err);
//     return;
//   }
//   console.log('Connected to MongoDB');
//   // Perform database operations
// });

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/users';
const client = new MongoClient(uri});

client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');
  // Perform database operations
});
