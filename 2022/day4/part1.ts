import { readFileSync } from 'fs';

const pairs = readFileSync('./2022/day4/input.txt', 'utf-8')
    .split('\n')
    .filter((n) => n !== '');

let overlappingPairs = 0;

for (const pair of pairs) {
    let [firstRange, secondRange] = pair.split(',');
    let [firstStart, firstEnd] = firstRange.split('-').map(Number);
    let [secondStart, secondEnd] = secondRange.split('-').map(Number);

    if (
        (firstStart >= secondStart && firstEnd <= secondEnd) ||
        (secondStart >= firstStart && secondEnd <= firstEnd)
    ) {
        overlappingPairs += 1;
    }
}

console.log(overlappingPairs);
