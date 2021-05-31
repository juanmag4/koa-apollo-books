const { Schema, model } = require('mongoose');
const { Types: { ObjectId } } = Schema;

const bookSchema = new Schema({
  title: String,
  year: Number,
  edition: Number,
  pages: Number,
  author: { type: ObjectId, ref: 'Author' }
});

const bookModel = model('Book', bookSchema);

module.exports = { bookModel };
