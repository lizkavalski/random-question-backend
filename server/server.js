
const express = require('express');
const notfound = require('../server/middleware/404.js');
const errorHandler = require('../server/middleware/error.js');
const {questions,randomQuestions, questionByType} = require('../server/middleware/helperRandom');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.send('You are in!');
});
app.get('/question',(req,res)=>{
  res.json(questions);
});
app.get('/question/random', (req, res) => {
  res.json(randomQuestions());
});


app.get('/question/random/:type', (req, res) => {
  res.json(questionByType(req.params.type));
});

app.use('*',notfound);
app.use(errorHandler);


module.exports = app;

