import * as index from '../index.js';

const maxIntervalBorder = 20;
const gameRules = 'What is the result of the expression?';
const randomInt = (ceil) => Math.floor(Math.random() * ceil);
const operations = '+-*';

const getQuestionStr = (arg1, operation, arg2) => `${arg1} ${operations[operation]} ${arg2}`;

const getExpectedAnswer = (arg1, operation, arg2) => {
  let result;
  if (operation === 0) {
    result = arg1 + arg2;
  }
  if (operation === 1) {
    result = arg1 - arg2;
  }
  if (operation === 2) {
    result = arg1 * arg2;
  }
  return result;
};

const roundBuilder = () => {
  const leftArg = randomInt(maxIntervalBorder);
  const rightArg = randomInt(maxIntervalBorder);
  const sign = randomInt(operations.length);
  const question = getQuestionStr(leftArg, sign, rightArg);
  const answer = getExpectedAnswer(leftArg, sign, rightArg).toString();
  return [question, answer];
};

export default () => {
  const gameData = [];
  for (let counter = 0; counter < index.roundsCount; counter += 1) {
    gameData.push(roundBuilder());
  }
  index.gameEngine(gameRules, gameData);
};
