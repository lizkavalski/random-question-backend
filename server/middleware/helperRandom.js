const questions = require('../data/data.json');
/**
* Pulls a random object from the data.json.
*/
const randomQuestions = () => {
  return questions[Math.floor(Math.random() * questions.length)];
};
/**
 * Pulls a random object based on 'type' from the data.json.
 */
const questionByType = (type) => {
  let filterType = questions.filter(question => question.type === type);
  return filterType[Math.floor(Math.random() * filterType.length)];
};
module.exports = { questions, randomQuestions, questionByType};