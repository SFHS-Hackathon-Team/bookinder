const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  isbn: {
    type: String
  },
  url: {
    type: String
  },
  owned: {
    type: Boolean
  }
})

// const UserSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   owned: {
//     type: Array,
//     required: true,
//   },
//   want: {
//     type: Array,
//     required: true,
//   },
// });
const Book = mongoose.model('Book', BookSchema);
// const User = mongoose.model('User', UserSchema);

module.exports = {
  // User: User,
  Book: Book,
};
