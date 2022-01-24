import readlineSync from 'readline-sync';

const gameDescription = 'What is the result of the expression?';
const gameRounds = [['2+2', '4'], ['3+3', '6']];
const roundsCount = 2;

const gameProcess = (description, rounds) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let counter = 0; counter < roundsCount; counter += 1) {
    const [question, expectedAnswer] = rounds[counter];
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
gameProcess(gameDescription, gameRounds);
/*
const startGame = (rules) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  return name;
};

const quiz = (data, maxRounds) => {
  let rightAnswerCount = 0;
  do {
    const [question, expectedAnswer] = data[rightAnswerCount];
    const answer = readlineSync.question(
      `Question: ${question}\nYour answer: `,
    );
    const isCorrectAnswer = answer === expectedAnswer;

    if (isCorrectAnswer) {
      console.log('Correct!');
      rightAnswerCount += 1;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`,
      );
      rightAnswerCount = -1;
    }
  } while (rightAnswerCount > 0 && rightAnswerCount < maxRounds);
  return rightAnswerCount;
};

const endGame = (name, gameResult, maxRounds) => {
  if (gameResult === maxRounds) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default (game, roundsCount) => {
  // const [rules, ...questions] = game;
  const rules = game[0];
  const questions = [];
  for (let counter = 1; counter < game.length; counter += 1) {
    questions.push(game[counter]);
  }
  const name = startGame(rules);
  const quizResult = quiz(questions, roundsCount);
  endGame(name, quizResult, roundsCount);
};
*/
