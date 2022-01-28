import randomInt from '../utils.js';
import { roundsCount, engine } from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
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
