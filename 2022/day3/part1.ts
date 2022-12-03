import { readFileSync } from 'fs';

const rucksacks = readFileSync('./2022/day3/input.txt', 'utf-8')
    .split('\n')
    .filter((n) => n !== '');

let duplicateItems = new Array<string>();

for (const rucksack of rucksacks) {
    let first = rucksack.slice(0, rucksack.length / 2).split('');
    let second = rucksack.slice(rucksack.length / 2, rucksack.length).split('');

    let duplicates = first.filter((i) => second.includes(i));

    duplicateItems = duplicateItems.concat([...new Set(duplicates)]);
}

let priorties = 0;

for (const item of duplicateItems) {
    if (item === item.toUpperCase()) {
        priorties += item.charCodeAt(0) - 38;
    } else {
        priorties += item.charCodeAt(0) - 96;
    }
}

console.log(priorties);
