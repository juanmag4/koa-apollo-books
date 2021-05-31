const { bookModel } = require('../models/book.model');

const allBooks = () => {
  return bookModel.find().populate('author').exec();
};

const books = (root, { title }) => {
  return bookModel.find({ title }).populate('author').exec();
};

const addBook = async (root, { title, pages, edition, year, author }) => {
  const book = new bookModel({ title, pages, edition, year, author });

  try {
    const savedBook = await book.save();
    return savedBook;
  } catch (error) {
    console.log('ERROR', error);
  }
};

module.exports = {
  bookQueryResolvers: { books, allBooks },
  bookMutationResolvers: { addBook }
};
