require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const app = express();
const Quote = require('./models/quote.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {
  useMongoClient: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

/**** Middleware ****/

//  Cross origin resource sharing (CORS)
app.use(cors());

// Serves static files from public folder
app.use(express.static('public'));

/**** Routes ****/

// Root address of app will display index.html with api information
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// random quote api route
app.get("/api.quotes/random", function (request, response) {
    
  Quote.count().exec(function (err, count) {
    
    var random = Math.floor(Math.random() * count);
    Quote.findOne().skip(random).exec(
      function (err, result) {
        if(err) console.log(err);
        else {
          response.json(result);
        }
      });
  });  
});


// start the server
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

module.exports = app; // used for testing
