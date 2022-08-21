const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  title: String,
  Difficulty: String,
  think: Number,
  code: Number,
  debug: Number,
  comments: String,
});

problemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Problem', problemSchema);
