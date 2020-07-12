
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

app.get('/random_question', (req, res) => {
  res.json(randomQuestions());
});


app.get('/question/random', (req, res) => {
  res.json(randomQuestions());
});


app.get('/question/:type/random', (req, res) => {
  res.json(questionByType(req.params.type, 1));
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
