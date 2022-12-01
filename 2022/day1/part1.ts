import { readFileSync } from 'fs';

const input = readFileSync('./2022/day1/input.txt', 'utf-8');
const items = input.split('\n');
let count = 0;
let max = 0;

for (const item of items) {
    if (item === '') {
        max = Math.max(max, count);
        count = 0;
        continue;
    }

    count += Number(item);
}

console.log(max);
