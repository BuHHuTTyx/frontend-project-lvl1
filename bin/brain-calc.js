#!/usr/bin/env node
import getGameData from '../src/games/calc.js';
import game from '../src/index.js';

const maxRounds = 3;

game(getGameData(maxRounds), maxRounds);
