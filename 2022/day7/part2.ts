import { readFileSync } from 'fs';

const commands = readFileSync('./2022/day7/input.txt', 'utf-8').split('\n');

let path = new Array<string>();
let pathSizes = new Map<string, number>();
let outerSize = 0;

for (const command of commands) {
    if (command === '$ cd /') {
        path.push('/');
        pathSizes.set('/', 0);
        continue;
    }
    if (command === '$ ls' || command === '') continue;

    let c = command.split(' ');

    if (`${c[0]} ${c[1]}` === '$ cd') {
        if (c[2] === '..') {
            let size = pathSizes.get(path.join('')) as number;
            path.pop();
            if (pathSizes.has(path.join(''))) {
                pathSizes.set(path.join(''), (pathSizes.get(path.join('')) as number) + size);
            } else {
                pathSizes.set(path.join(''), size);
            }
        } else {
            path.push(c[2]);
            if (!pathSizes.has(path.join(''))) {
                pathSizes.set(path.join(''), 0);
            }
        }
    } else if (c[0] === 'dir') {
        if (!pathSizes.has(`${path.join('')}${c[1]}`)) {
            pathSizes.set(`${path.join('')}${c[1]}`, 0);
        }
    } else {
        outerSize += Number(c[0]);
        pathSizes.set(path.join(''), (pathSizes.get(path.join('')) as number) + Number(c[0]));
    }
}

let min = Infinity;

for (const val of pathSizes.values()) {
    if (outerSize - val < 40000000) {
        min = Math.min(min, val);
    }
}

console.log(min);
