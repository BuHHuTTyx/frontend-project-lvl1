import randomInt from '../utils.js';
import { roundsCount, engine } from '../index.js';

const gameRules = 'What number is missing in the progression?';

const generateProg = (firstElem, derivation, length) => {
  const progression = [];
  for (let counter = 0; counter < length; counter += 1) {
    const elem = firstElem + (derivation * counter);
    progression.push(elem);
  }
  return progression;
};

const roundBuilder = () => {
  const progressionLength = randomInt(5, 12);
  const derivation = randomInt(-15, 15);
  const progFirstElem = randomInt(-30, 30);
  const droppedIndex = randomInt(0, progressionLength);
  const progression = generateProg(progFirstElem, derivation, progressionLength);
  const answer = progression[droppedIndex].toString();
  progression[droppedIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  const gameData = [];
  for (let counter = 0; counter < roundsCount; counter += 1) {
    gameData.push(roundBuilder());
  }
  engine(gameRules, gameData);
};
