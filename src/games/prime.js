const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxIntervalBorder = 20;
const randomInt = (ceil) => Math.floor(Math.random() * ceil);

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

const getQuestion = () => randomInt(maxIntervalBorder);
const getExpectedAnswerStr = (number) => {
  if (isPrime(number) === true) {
    return 'yes';
  }
  return 'no';
};

export default (questionCount) => {
  const gameData = [];
  gameData.push(gameRules);
  for (let counter = 0; counter < questionCount; counter += 1) {
    const question = getQuestion();
    gameData.push([question, getExpectedAnswerStr(question)]);
  }
  return gameData;
};
