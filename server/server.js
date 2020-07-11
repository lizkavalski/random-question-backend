
const express = require('express');
const notfound = require('../server/middleware/404.js');
const errorHandler = require('../server/middleware/error.js');
const {randomQuestions, randomTen, questionByType} = require('../server/middleware/helperRandom');

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.send('Try /random_question, /random_ten, /question/random, or /question/ten');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/random_question', (req, res) => {
  res.json(randomQuestions());
});

app.get('/random_ten', (req, res) => {
  res.json(randomTen());
});

app.get('/question/random', (req, res) => {
  res.json(randomQuestions());
});

app.get('/question/ten', (req, res) => {
  res.json(randomTen());
});

app.get('/question/:type/random', (req, res) => {
  res.json(questionByType(req.params.type, 1));
});

app.get('/question/:type/ten', (req, res) => {
  res.json(questionByType(req.params.type, 10));
});
app.use('*',notfound);
app.use(errorHandler);

module.exports = {
  server:app,
  start: port =>{
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
  },
};
