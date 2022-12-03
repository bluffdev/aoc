import { readFileSync } from 'fs';

const rucksacks = readFileSync('./2022/day3/input.txt', 'utf-8')
    .split('\n')
    .filter((n) => n !== '');

let rucksackGroups = new Array<Array<string>>();

for (let i = 0; i < rucksacks.length; i += 3) {
    rucksackGroups.push(rucksacks.slice(i, i + 3));
}

let badges = new Array<string>();

for (const group of rucksackGroups) {
    let first = group[0].split('');
    let second = group[1].split('');
    let third = group[2].split('');

    let badge = first.filter((n) => second.includes(n) && third.includes(n));

    badges = badges.concat([...new Set(badge)]);
}

let priorties = 0;

for (const item of badges) {
    if (item === item.toUpperCase()) {
        priorties += item.charCodeAt(0) - 38;
    } else {
        priorties += item.charCodeAt(0) - 96;
    }
}

console.log(priorties);
