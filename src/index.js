import readlineSync from 'readline-sync';

export const roundsCount = 3;

export const engine = (description, rounds) => {
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
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
