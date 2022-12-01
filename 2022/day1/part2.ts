import { readFileSync } from 'fs';

const input = readFileSync('./2022/day1/input.txt', 'utf-8');
const items = input.split('\n');
const caloriesPerElf = new Array<number>();
let count = 0;

for (const item of items) {
    if (item === '') {
        caloriesPerElf.push(count);
        count = 0;
        continue;
    }

    count += Number(item);
}

let sortedCalories = caloriesPerElf.sort((a, b) => b - a);

console.log(sortedCalories[0] + sortedCalories[1] + sortedCalories[2]);
