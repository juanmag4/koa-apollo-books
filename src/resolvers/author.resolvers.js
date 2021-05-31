const { authorModel } = require('../models/author.model');

const allAuthors = () => {
  return authorModel.find().exec();
};

const authors = (root, { name, lastName }) => {
  return authorModel.find({ name, lastName }).exec();
};

module.exports = {allAuthors, authors};
