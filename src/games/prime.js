import { randomInt } from '../utils.js';
import { roundsCount, engine } from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  if (number % 2 === 0) {
    return number === 2;
  }
  let divisor = 3;
  while ((divisor * divisor <= number) && (number % divisor !== 0)) {
    divisor += 2;
  }
  return divisor * divisor > number;
};

const roundBuilder = () => {
  const question = `${randomInt(1, 50)}`;
  const answer = isPrime(Number(question)) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const gameData = [];
  for (let counter = 0; counter < roundsCount; counter += 1) {
    gameData.push(roundBuilder());
  }
  engine(gameRules, gameData);
};
