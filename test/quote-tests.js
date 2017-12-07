//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//const mongoose = require("mongoose");
//const Quote = require('../models/quote.js');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = require('chai').should();

chai.use(chaiHttp);

describe('/GET random quote', () => {
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

describe('/GET authors', () => {
  it('it should GET list of quote authors', (done) => {
    chai.request(server)
      .get('/api.quotes/authors')
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.body.should.be.an('array');
        res.body.should.have.lengthOf.above(1);
        done();
      });
  });
});

describe('/GET authors that start with ?', () => {
  it('it should GET list of quote authors that begin with letter parameter', (done) => {
    const startswithletter = 'a';
    chai.request(server)
      .get('/api.quotes/author-starts-with?startswith=' + startswithletter)
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.body.should.be.an('array');
        res.body.should.have.lengthOf.above(1);
        res.body.forEach(element => {
          element.charAt(0).toLowerCase().should.equal(startswithletter);  
        });
        done();
      });
  });
});

describe('/GET quotes by author parameter', () => {
  it('it should GET list of quotes by given author', (done) => {
    const author = 'Abraham Lincoln';
    chai.request(server)
      .get('/api.quotes/author?author=' + author)
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.body.should.be.an('array');
        res.body.should.have.lengthOf.above(1);
        res.body.forEach(element => {
          element.author.should.equal(author);  
        });
        done();
      });
  });
});
