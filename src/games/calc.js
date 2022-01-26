import { randomInt } from '../utils.js';
import { roundsCount, engine } from '../index.js';

const maxIntervalBorder = 20;
const gameRules = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getExpectedAnswer = (arg1, operation, arg2) => {
  let result = 0; // переменная введена для удовлетворения правила линтера consistent-return
  switch (operation) {
    case 0:
      result = arg1 + arg2;
      break;
    case 1:
      result = arg1 - arg2;
      break;
    case 2:
      result = arg1 * arg2;
      break;
    // no default
  }
  return result;
};

const roundBuilder = () => {
  const leftArg = randomInt(0, maxIntervalBorder);
  const rightArg = randomInt(0, maxIntervalBorder);
  const sign = randomInt(0, operations.length);
  const question = `${leftArg} ${operations[sign]} ${rightArg}`;
  const answer = getExpectedAnswer(leftArg, sign, rightArg).toString();
  return [question, answer];
};

export default () => {
  const gameData = [];
  for (let counter = 0; counter < roundsCount; counter += 1) {
    gameData.push(roundBuilder());
  }
  engine(gameRules, gameData);
};
