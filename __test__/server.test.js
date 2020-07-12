const app = require('../server/server.js');
const request = require('supertest');
// const { response } = require('express');
// const request = supertest(app);

describe('testing endpoints', () => {

  it('GET all the question', done => {
    request(app)
      .get('/question')
      .then( res => {
        expect(res.status).toBe(200);
        done();
      });
  });

  it('GET a random question', done => {
    request(app)
      .get('/question/random')
      .then( res => {
        expect(res.status).toBe(200);
        done();
      });
  });

  it('GET a random question by type', done => {
    request(app)
      .get('/question/:type/random')
      .then( res => {
        expect(res.status).toBe(200);
        done();
      });
  });

});

describe('testing error', () => {

  it('send an 404 message', done => {
    request(app)
      .get('/question/ranom')
      .then( res => {
        expect(res.status).toBe(404);
        expect(res.body.message).toBe('Cannot find the page your looking for');
        done();
      });
  });

});