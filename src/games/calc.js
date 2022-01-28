import randomInt from '../utils.js';
import { roundsCount, engine } from '../index.js';

const gameRules = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculate = (arg1, operation, arg2) => {
  switch (operation) {
    case '+':
      return arg1 + arg2;
    case '-':
      return arg1 - arg2;
    case '*':
      return arg1 * arg2;
    default: throw new Error('Unsupported operation');
  }
};

const roundBuilder = () => {
  const leftArg = randomInt(0, 20);
  const rightArg = randomInt(0, 20);
  const operationIndex = randomInt(0, operations.length);
  const question = `${leftArg} ${operations[operationIndex]} ${rightArg}`;
  const answer = calculate(leftArg, operations[operationIndex], rightArg).toString();
  return [question, answer];
};

export default () => {
  const gameData = [];
  for (let counter = 0; counter < roundsCount; counter += 1) {
    gameData.push(roundBuilder());
  }
  engine(gameRules, gameData);
};
