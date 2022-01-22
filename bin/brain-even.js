#!/usr/bin/env node
import readlineSync from 'readline-sync';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const minIntervalBorder = 1;
const maxIntervalBorder = 100;
let rightAnswerCount = 0;

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);
console.log(rules);

do {
  const question = Math.floor(Math.random()
                  * (maxIntervalBorder - minIntervalBorder + 1))
                  + minIntervalBorder;
  const expectedAnswer = isEven(question);
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  const isCorrectAnswer = (answer === expectedAnswer);

  if (isCorrectAnswer) {
    console.log('Correct!');
    rightAnswerCount += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    rightAnswerCount = -1;
  }
} while (rightAnswerCount > 0 && rightAnswerCount < 3);

if (rightAnswerCount === 3) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`);
}
