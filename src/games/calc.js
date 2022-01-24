const maxIntervalBorder = 20;
const gameRules = 'What is the result of the expression?';
const randomInt = (ceil) => Math.floor(Math.random() * ceil);
const operationArray = '+-*';
const getQuestionStr = (arg1, operation, arg2) => `${arg1} ${operationArray[operation]} ${arg2}`;
const getExpectedAnswer = (arg1, operation, arg2) => {
  let result;
  if (operation === 0) {
    result = arg1 + arg2;
  }
  if (operation === 1) {
    result = arg1 - arg2;
  }
  if (operation === 2) {
    result = arg1 * arg2;
  }
  return result;
};
const questionBuilder = () => {
  const leftArg = randomInt(maxIntervalBorder);
  const rightArg = randomInt(maxIntervalBorder);
  const sign = randomInt(3);
  const question = getQuestionStr(leftArg, sign, rightArg);
  const expectedAnswerStr = (getExpectedAnswer(leftArg, sign, rightArg).toString());
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
