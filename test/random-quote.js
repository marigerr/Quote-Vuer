//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//const mongoose = require("mongoose");
//const Quote = require('../models/quote.js');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = require('chai').should();

chai.use(chaiHttp);

describe('/GET quote', () => {
  it('it should GET a random quote', (done) => {
    chai.request(server)
      .get('/api.quotes/random')
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('quote');
        done();
      });
  });
});
