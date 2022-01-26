import { randomInt } from '../utils.js';
import { roundsCount, engine } from '../index.js';

const gameRules = 'What number is missing in the progression?';
const minProgressionLength = 5;
const maxProgressionLength = 12;
const maxProgFirstElem = 30;
const minprogFirstElem = 0;
const minDerivation = -15;
const maxDerivation = 15;

const getProgression = (firstElem, derivation, length) => {
  const progression = [];
  for (let counter = 0; counter < length; counter += 1) {
    const elem = firstElem + (derivation * counter);
    progression.push(elem);
  }
  return progression;
};

const getQuestionStr = (prog, dropedElem) => {
  let result = '';
  for (let counter = 0; counter < prog.length; counter += 1) {
    if (dropedElem === counter) {
      result += '.. ';
    } else {
      result += `${prog[counter]} `;
    }
  }
  return result;
};

const roundBuilder = () => {
  const progressionLength = randomInt(minProgressionLength, maxProgressionLength);
  const derivation = randomInt(minDerivation, maxDerivation);
  const progFirstElem = randomInt(minprogFirstElem, maxProgFirstElem);
  const dropedElemPos = randomInt(0, progressionLength);
  const progression = getProgression(progFirstElem, derivation, progressionLength);
  const question = getQuestionStr(progression, dropedElemPos);
  const answer = progression[dropedElemPos].toString();
  return [question, answer];
};

export default () => {
  const gameData = [];
  for (let counter = 0; counter < roundsCount; counter += 1) {
    gameData.push(roundBuilder());
  }
  engine(gameRules, gameData);
};
