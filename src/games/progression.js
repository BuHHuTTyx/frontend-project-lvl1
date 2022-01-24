const gameRules = 'What number is missing in the progression?';
const minProgressionLength = 5;
const maxProgressionLength = 12;
const maxProgFirstElem = 30;
const minprogFirstElem = 0;
const minDerivation = -15;
const maxDerivation = 15;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getProgression = (firstElem, der, length) => {
  const progression = [];
  for (let counter = 0; counter < length; counter += 1) {
    const elem = firstElem + (der * counter);
    progression.push(elem);
  }
  return progression;
};

const getQuestionStr = (prog, drop) => {
  let result = '';
  for (let counter = 0; counter < prog.length; counter += 1) {
    if (drop === counter) {
      result += '.. ';
    } else {
      result += `${prog[counter]} `;
    }
  }
  return result;
};

const getExpectedAnswer = (prog, drop) => prog[drop];

const questionBuilder = () => {
  const progressionLength = randomInt(minProgressionLength, maxProgressionLength);
  const derivation = randomInt(minDerivation, maxDerivation);
  const progFirstElem = randomInt(minprogFirstElem, maxProgFirstElem);
  const dropedElemPos = randomInt(0, progressionLength);
  const progression = getProgression(progFirstElem, derivation, progressionLength);
  const question = getQuestionStr(progression, dropedElemPos);
  const expectedAnswerStr = (getExpectedAnswer(progression, dropedElemPos).toString());
  return [question, expectedAnswerStr];
};

export default (questionCount) => {
  const gameData = [];
  gameData.push(gameRules);
  for (let counter = 0; counter < questionCount; counter += 1) {
    gameData.push(questionBuilder());
  }
  return gameData;
};
