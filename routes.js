const express = require('express');
const router = new express.Router();
const Quote = require('./models/quote.js');
// const path = require('path');

// random quote api route
router.route("/api.quotes/ping")
  .get((req, res) => {
    res.json('pong');
  });

// random quote api route
router.route("/api.quotes/random")
  .get((req, res) => {
    Quote.aggregate({ $sample: { size: 1 } },
      (err, quotes) => {
        if (err) console.log(err);
        else {
          res.json(quotes[0]);
        }
      }
    );
  });

// list of all authors
router.route("/api.quotes/authors")
  .get((req, res) => {
    Quote.find().distinct('author', (err, data) => {
      if (err) console.log(err);
      else {
        // TODO : sort by last name 
        // data.sort((author1, author2) => {
        // return author1.split(' ').slice(-1)[0] > author2.split(' ').slice(-1)[0];
        // });
        res.json(data);
      }
    });
  });

// array of all quotes by author search
router.route("/api.quotes/author")
  .get((req, res) => {
    Quote.find({ author: req.query.author }).exec((err, data) => {
      if (err) console.log(err);
      else {
        res.json(data);
      }
    });
  });

// list of all authors that start with string parameter
router.route("/api.quotes/author-starts-with")
  .get((req, res) => {
    Quote.find({ author: { $regex: "^" + req.query.startswith, $options: 'i' } }, { author: true, _id: false }).exec((err, data) => {
      if (err) console.log(err);
      else {
        const flatarray = data.map(x => x.author);
        const uniqueArray = flatarray.filter(function (item, pos) {
          return flatarray.indexOf(item) == pos;
        });
        res.json(uniqueArray);
      }
    });
  });

// Root address of app will display index.html with api information
router.route("/")
  .get((req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });

module.exports = router;
