const { Schema, model } = require('mongoose');

const authorSchema = new Schema({
  name: String,
  lastName: String,
  birthDate: String,
});

const authorModel = model('Author', authorSchema);

module.exports = { authorModel };
