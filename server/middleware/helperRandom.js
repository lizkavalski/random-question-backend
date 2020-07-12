const questions = require('../data/data.json');
/**
* Pulls a random object from the data.json
*/
const randomQuestions = () => {
  return questions[Math.floor(Math.random() * questions.length)];
};

/**
 * Get N random question from a questionArray
 */
const randomN = (questionArray, n) => {
  const limit = questionArray.length < n ? questionArray.length : n;
  const randomIndicesSet = new Set();

  while (randomIndicesSet.size < limit) {
    const randomIndex = Math.floor(Math.random() * questionArray.length);
    if (!randomIndicesSet.has(randomIndex)) {
      randomIndicesSet.add(randomIndex);
    }
  }

  return Array.from(randomIndicesSet).map(randomIndex => {
    return questionArray[randomIndex];
  });
};

/**
 * @param {*} type, refers to the type of question
 * @param {*} n, how many random question
 */
const questionByType = (type, n) => {
  return randomN(questions.filter(question => question.type === type), n);
};

module.exports = { questions, randomQuestions, questionByType };