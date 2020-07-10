const questions = require('../data.JSON');

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

const randomTen = () => randomN(questions, 10);

const questionByType = (type, n) => {
  return randomN(questions.filter(question => question.type === type), n);
};

module.exports = { questions, randomQuestions, randomN, randomTen, questionByType };