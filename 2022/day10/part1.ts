import { readFileSync } from 'fs';

const instructions = readFileSync('./2022/day10/input.txt', 'utf-8')
    .split('\n')
    .filter((n) => n !== '');

let cycle = 1;
let x = 1;
let total = 0;

let needed = new Set<number>([20, 60, 100, 140, 180, 220]);

for (const i of instructions) {
    let instruction = i.split(' ');

    if (instruction[0] === 'addx') {
        if (needed.has(cycle)) {
            total += cycle * x;
        }
        cycle += 1;
        if (needed.has(cycle)) {
            total += cycle * x;
        }
        cycle += 1;
        x += Number(instruction[1]);
    } else {
        if (needed.has(cycle)) {
            total += cycle * x;
        }
        cycle += 1;
    }
}

console.log(total);
