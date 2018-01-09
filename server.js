require('dotenv').config(); 
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const graphqlSchema= require('./graphql/Schema.js');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, { useMongoClient: true,}, (err) => {
  if(err) {
    console.log(err);
  }
});
//Or with promise
// mongoose.connect(process.env.DATABASE, { useMongoClient: true,}).then(
//   err => {
//     console.log(err);
//   }
// );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

/**** Middleware ****/

//  Cross origin resource sharing (CORS)
app.use(cors());
// Serves static files from public folder
app.use(express.static('public'));

/**** Routes ****/
app.use('/graphql', graphqlHTTP ({
  schema: graphqlSchema,
  graphiql:true
}));

app.use('/', routes);

// start the server
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

module.exports = app; // used for testing
