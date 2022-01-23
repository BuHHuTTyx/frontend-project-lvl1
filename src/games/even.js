const minIntervalBorder = 1;
const maxIntervalBorder = 100;
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

export default (questionCount) => {
  const gameData = [];
  gameData.push(gameRules);
  for (let counter = 0; counter < questionCount; counter += 1) {
    const question = Math.floor(Math.random()
                    * (maxIntervalBorder - minIntervalBorder + 1))
                    + minIntervalBorder;
    const expectedAnswer = isEven(question);
    gameData.push([question, expectedAnswer]);
  }
  return gameData;
};
