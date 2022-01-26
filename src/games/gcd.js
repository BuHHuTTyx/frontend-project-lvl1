import { randomInt } from '../utils.js';
import { roundsCount, engine } from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
const maxIntervalBorder = 50;
const minIntervalBorder = 1;

const getExpectedAnswer = (arg1, arg2) => {
  let numberOne = arg1;
  let numberTwo = arg2;
  while (numberOne !== numberTwo) {
    if (numberOne > numberTwo) {
      numberOne -= numberTwo;
    } else {
      numberTwo -= numberOne;
    }
  }
  return numberOne;
};
const roundBuilder = () => {
  const leftArg = randomInt(minIntervalBorder, maxIntervalBorder);
  const rightArg = randomInt(minIntervalBorder, maxIntervalBorder);
  const question = `${leftArg} ${rightArg}`;
  const answer = getExpectedAnswer(leftArg, rightArg).toString();
  return [question, answer];
};
export default () => {
  const gameData = [];
  for (let counter = 0; counter < roundsCount; counter += 1) {
    gameData.push(roundBuilder());
  }
  engine(gameRules, gameData);
};
