import { readFileSync } from 'fs';

const motions = readFileSync('./2022/day9/input.txt', 'utf-8')
    .split('\n')
    .filter((n) => n !== '');

type pos = {
    x: number;
    y: number;
};

let head = { x: 0, y: 0 } as pos;
let tail = { x: 0, y: 0 } as pos;

function isTouching(head: pos, tail: pos) {
    return (
        Math.abs(head.x - tail.x) + Math.abs(head.y - tail.y) === 1 ||
        (Math.abs(head.x - tail.x) === 1 && Math.abs(head.y - tail.y) === 1) ||
        (head.x === tail.x && head.y === tail.y)
    );
}

let visited = new Set<string>(['0,0']);

for (const motion of motions) {
    const [dir, amount] = motion.split(' ');

    for (let i = 0; i < Number(amount); i++) {
        let prev = { x: head.x, y: head.y } as pos;
        switch (dir) {
            case 'U':
                head.y += 1;
                break;
            case 'D':
                head.y -= 1;
                break;
            case 'L':
                head.x -= 1;
                break;
            case 'R':
                head.x += 1;
                break;
        }

        if (!isTouching(head, tail)) {
            tail.x = prev.x;
            tail.y = prev.y;
            visited.add(`${tail.x},${tail.y}`);
        }
    }
}

console.log(visited.size);
