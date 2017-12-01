const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
  quoteText: String,
  quoteAuthor: String,
});

module.exports = mongoose.model('Quote', QuoteSchema);
