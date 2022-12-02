import { readFileSync } from 'fs';

const input = readFileSync('./2022/day2/input.txt', 'utf-8');
const rounds = input.split('\n');

// A = Rock, X = Loss
// B = Paper, Y = Draw
// C = Scissors, Z = Win

const results = new Map<string, number>([
    ['A X', 3],
    ['B X', 1],
    ['C X', 2],
    ['A Y', 4],
    ['B Y', 5],
    ['C Y', 6],
    ['A Z', 8],
    ['B Z', 9],
    ['C Z', 7],
]);

let score = 0;

for (const round of rounds) {
    if (round === '') continue;
    score += results.get(round)!;
}

console.log(score);
