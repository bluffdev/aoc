import { readFileSync } from 'fs';

const input = readFileSync('./2022/day2/input.txt', 'utf-8');
const rounds = input.split('\n');

let score = 0;

for (const round of rounds) {
    if (round === '') continue;

    let a = round.charAt(0);
    let b = round.charAt(2);

    score += (87 - b.charCodeAt(0)) * -1;

    // A, X = Rock
    // B, Y = Paper
    // C, Z = Scissors

    if ((a === 'A' && b === 'X') || (a === 'B' && b === 'Y') || (a === 'C' && b === 'Z')) {
        score += 3;
    } else if ((a === 'C' && b === 'X') || (a === 'A' && b === 'Y') || (a === 'B' && b === 'Z')) {
        score += 6;
    }
}

console.log(score);
