const express = require('express');
const router = new express.Router();
const Quote = require('./models/quote.js');
// const path = require('path');

// random quote api route
router.route("/api.quotes/random")
  .get((req, res) => {
    Quote.count().exec(function (err, count) {
      const random = Math.floor(Math.random() * count);
      Quote.findOne().skip(random).exec(
        (err, quote) => {
          if (err) console.log(err);
          else {
            res.json(quote);
          }
        });
    });
  });

router.route("/api.quotes/authors")
  .get((req, res) => {
    Quote.find().distinct('author', (err, data) => {
      if (err) console.log(err);
      else {
        console.log(data.length);
        res.json(data);
      }
    });
  });

// Root address of app will display index.html with api information
router.route("/")
  .get((req, res) => {
    console.log('hi');
    res.sendFile(__dirname + '/views/index.html');
  });

module.exports = router;
