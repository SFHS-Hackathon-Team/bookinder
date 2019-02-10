const express = require ('express');
const path = require ('path');
const bodyParser = require('body-parser');

const app = express();
const Book = require('./models.js').Book;

const mongoose = require('mongoose');
mongoose.connection.on('connected', function(){
  console.log('Connected to MongoDb!')
});
mongoose.connect(process.env.MONGODB_URI);

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

// app.get('/viewMap', function(req, res){
//   Note.find({}, function(err, notes){
//     if (err){
//       console.log(err);
//     } else {
//       console.log("hello", notes);
//       res.json(notes);
//     }
//   })
// })
//
// app.get('/viewNote', function(req, res){
//   Note.find({latitude: req.query.latitude,
//              longitude: req.query.longitude}, function(err, note){
//     if (err){
//       console.log(err);
//     } else {
//       console.log(note);
//       res.json(note[0]);
//     }
//   })
// });
//
app.get('/getBooksOwned', function(req, res){
  Book.find({owned: 'true'}, function(err, trees){
    if (err){
      console.log(err);
    } else {
      console.log("hello");
      res.json(trees);
    }
  })
})

app.post('/addBook', function(req, res){
  var book = new Book({
    title: req.body.title,
    author: req.body.author,
    isbn: req.body.isbn,
    url: req.body.url,
    owned: req.body.owned
  });
  book.save(function(err){
    if(err){
      console.log(err);
    } else {
      console.log('success')
    }
  })
})

console.log('Express started. Listening on port', process.env.PORT || 3000);
app.listen(process.env.PORT || 3000);
