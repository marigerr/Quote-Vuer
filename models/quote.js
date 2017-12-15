const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
  _id: String,
  quote: String,
  author: String,
});

module.exports = mongoose.model('Quote', QuoteSchema);
