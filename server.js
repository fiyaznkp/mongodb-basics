// // // const express = require("express")

// // // const app = express()

// // // const port = 5173

// // // const mongoose = require("mongoose")

// // // const books = require("./books")

// // // const db = "mongodb://localhost/books"

// // // const bodyParser = require("body-parser")

// // // mongoose.connect(db)

// // // app.get("/",(req,res)=>{
// // //     res.send("welcome")
// // // })

// // // app.get("/books",(req,res)=>{
// // //     console.log("showing all available books")
// // //     books.find({})
// // //     .exec((err,result)=>{
// // //        if(err){
// // //         res.send("error" ,err)
// // //        }
// // //        else{
// // //         console.log(result)
// // //         res.json(result)
// // //        }
// // //     })
// // // })

// // // app.listen(port,()=>{
// // //     console.log("server connected")
// // // })

// // // const express = require("express");
// // // const app = express();
// // // const port = 5173;
// // // const mongoose = require("mongoose");
// // // const books = require("./books");

// // // const db = "mongodb://localhost/books";

// // // mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
// // //   .then(() => {
// // //     console.log("Connected to MongoDB");
// // //   })
// // //   .catch((err) => {
// // //     console.error("Error connecting to MongoDB:", err);
// // //   });

// // // app.get("/", (req, res) => {
// // //   res.send("Welcome");
// // // });

// // // app.get("/books", (req, res) => {
// // //   console.log("Showing all available books");
// // //   books.find({})
// // //     .exec((err, result) => {
// // //       if (err) {
// // //         res.status(500).send("Error: " + err);
// // //       } else {
// // //         console.log(result);
// // //         res.json(result);
// // //       }
// // //     });
// // // });

// // // app.listen(port, () => {
// // //   console.log("Server connected and running on port", port);
// // // });

// // const express = require("express");
// // const app = express();
// // const port = 5173;
// // const mongoose = require("mongoose");
// // const book = require("./book");

// // const db = "mongodb://localhost/book";

// // mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => {
// //     console.log("Connected to MongoDB");
// //   })
// //   .catch((err) => {
// //     console.error("Error connecting to MongoDB:", err);
// //   });

// // app.get("/", (req, res) => {
// //   res.send("Welcome");
// // });

// // app.get("/book", async (req, res) => {
// //   try {
// //     console.log("Showing all available books");
// //     const result = await book.find({}).exec();
// //     console.log(result);
// //     res.json(result);
// //   } catch (err) {
// //     console.error("Error:", err);
// //     res.status(500).send("Error: " + err);
// //   }
// // });

// // app.listen(port, () => {
// //   console.log("Server connected and running on port", port);
// // });

// const express = require("express");
// const app = express();
// const port = 5173;
// const mongoose = require("mongoose");
// const book = require("./book"); // Import the Book model

// const db = "mongodb://localhost/books"; // Connect to the 'books' database

// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });

// app.get("/", (req, res) => {
//   res.send("Welcome");
// });

// app.get("/books", async (req, res) => {
//   try {
//     console.log("Showing all available books");
//     const result = await book.find({}).exec(); // Retrieve data from the 'book' collection
//     console.log(result);
//     res.json(result);
//   } catch (err) {
//     console.error("Error:", err);
//     res.status(500).send("Error: " + err);
//   }
// });

// app.listen(port, () => {
//   console.log("Server connected and running on port", port);
// });

const express = require('express');
const app = express();
const port = 5173;
const mongoose = require('mongoose');
const Book = require('./book'); // Import the Book model

const db = 'mongodb://localhost/books'; // Connect to the 'books' database

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use(express.json());

// Route to create a new book
app.post('/books', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).send('Error creating a book: ' + err);
  }
});

// Route to get all books
app.get('/books', async (req, res) => {
  try {
    const allBooks = await Book.find({});
    res.json(allBooks);
  } catch (err) {
    res.status(500).send('Error fetching books: ' + err);
  }
});

// Route to get a specific book by ID
app.get('/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send('Book not found');
    }
    res.json(book);
  } catch (err) {
    res.status(500).send('Error fetching book: ' + err);
  }
});

// Route to update a book by ID
app.patch('/books/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).send('Book not found');
    }
    res.json(updatedBook);
  } catch (err) {
    res.status(400).send('Error updating book: ' + err);
  }
});

// Route to delete a book by ID
app.delete('/books/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).send('Book not found');
    }
    res.json(deletedBook);
  } catch (err) {
    res.status(500).send('Error deleting book: ' + err);
  }
});

app.listen(port, () => {
  console.log('Server connected and running on port', port);
});
