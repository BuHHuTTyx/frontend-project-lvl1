import { randomInt } from '../utils.js';
import { roundsCount, engine } from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const roundBuilder = () => {
  const question = randomInt(1, 100).toString();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const gameData = [];
  for (let counter = 0; counter < roundsCount; counter += 1) {
    gameData.push(roundBuilder());
  }
  engine(gameRules, gameData);
};
