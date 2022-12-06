import { readFileSync } from 'fs';

const datastream = readFileSync('./2022/day6/input.txt', 'utf-8');

let start = 0;
let seen = new Set<string>();
let total = 0;

for (const c of datastream) {
    while (seen.has(c)) {
        seen.delete(datastream.charAt(start));
        start += 1;
    }

    seen.add(c);
    total += 1;

    if (seen.size === 14) {
        break;
    }
}

console.log(total);
