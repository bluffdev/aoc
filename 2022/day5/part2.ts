import { readFileSync } from 'fs';

const input = readFileSync('./2022/day5/input.txt', 'utf-8').split('\n');

let containers = input.slice(0, 8);
let steps = input.slice(10).filter((n) => n !== '');
let stacks = new Array<Array<string>>();

for (let i = 0; i < 9; i++) {
    stacks.push(new Array());
}

for (let i = containers.length - 1; i >= 0; i--) {
    let container = containers[i];

    for (let j = 1, sp = 0; j < container.length; j += 4, sp += 1) {
        if (container.charAt(j) !== ' ') {
            stacks[sp].push(container.charAt(j));
        }
    }
}

for (const step of steps) {
    const [amount, from, to] = step
        .split(' ')
        .filter((n) => !isNaN(Number(n)))
        .map(Number);

    let removed = stacks[from - 1].splice(
        stacks[from - 1].length - amount,
        stacks[from - 1].length
    );

    stacks[to - 1].push(...removed);
}

let result = '';

for (let i = 0; i < stacks.length; i++) {
    let top = stacks[i].pop();
    if (top !== undefined) {
        result += top;
    }
}

console.log(result);
