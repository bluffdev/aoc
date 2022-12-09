import { readFileSync } from 'fs';

const motions = readFileSync('./2022/day9/input.txt', 'utf-8')
    .split('\n')
    .filter((n) => n !== '');

type pos = {
    r: number;
    c: number;
};

let head = { r: 0, c: 0 } as pos;
let tail = { r: 0, c: 0 } as pos;

function isTouching(head: pos, tail: pos) {
    return (
        Math.abs(head.r - tail.r) + Math.abs(head.c - tail.c) === 1 ||
        (Math.abs(head.r - tail.r) === 1 && Math.abs(head.c - tail.c) === 1) ||
        (head.r === tail.r && head.c === tail.c)
    );
}

let visited = new Set<string>(['0,0']);

for (const motion of motions) {
    const [dir, amount] = motion.split(' ');

    for (let i = 0; i < Number(amount); i++) {
        let prev = { r: head.r, c: head.c } as pos;
        switch (dir) {
            case 'U':
                head.r -= 1;
                break;
            case 'D':
                head.r += 1;
                break;
            case 'L':
                head.c -= 1;
                break;
            case 'R':
                head.c += 1;
                break;
        }

        if (!isTouching(head, tail)) {
            tail.r = prev.r;
            tail.c = prev.c;
            visited.add(`${tail.r},${tail.c}`);
        }
    }
}

console.log(visited.size);
