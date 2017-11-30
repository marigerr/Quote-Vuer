require('dotenv').config(); 
const express = require('express');
//const http = require('http');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
    quoteText: String,
    quoteAuthor: String,
});
const Quote = mongoose.model('Quote', QuoteSchema);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {
    useMongoClient: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


//  Cross origin resource sharing (CORS)
// Limits cross origin requests to only those listed in orgins array
const corsOptions = {
    origin:  ["http://localhost:8080", "https://marigerr.github.io", /(chrome-extension:\/\/)\w+/] ,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};

// Middleware //

// Enables cross origin
app.use(cors(corsOptions));

// Serves static files from public folder
app.use(express.static('public'));

// Routes //

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
