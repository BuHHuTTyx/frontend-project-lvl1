const gameRules = 'Find the greatest common divisor of given numbers.';
const maxIntervalBorder = 50;
const randomInt = (ceil) => Math.floor(Math.random() * ceil);
const getQuestionStr = (arg1, arg2) => `${arg1} ${arg2}`;

const getExpectedAnswer = (arg1, arg2) => {
  let leftArg = arg1;
  let rightArg = arg2;
  while (leftArg !== rightArg) {
    if (leftArg > rightArg) {
      leftArg -= rightArg;
    } else {
      rightArg -= leftArg;
    }
  }
  return leftArg;
};
const questionBuilder = () => {
  const leftArg = randomInt(maxIntervalBorder);
  const rightArg = randomInt(maxIntervalBorder);
  const question = getQuestionStr(leftArg, rightArg);
  const expectedAnswerStr = (getExpectedAnswer(leftArg, rightArg).toString());
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
