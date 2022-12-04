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
        (firstEnd >= secondStart && firstEnd <= secondEnd) ||
        (secondEnd >= firstStart && secondEnd <= firstEnd) ||
        (firstStart >= secondStart && firstStart <= secondEnd) ||
        (secondStart >= firstStart && secondStart <= firstEnd)
    ) {
        overlappingPairs += 1;
    }
}

console.log(overlappingPairs);
