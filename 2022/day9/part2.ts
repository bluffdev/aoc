import { readFileSync } from 'fs';

const motions = readFileSync('./2022/day9/input.txt', 'utf-8')
    .split('\n')
    .filter((n) => n !== '');

type pos = {
    x: number;
    y: number;
};

let rope = new Array<pos>();

for (let i = 0; i < 10; i++) {
    rope[i] = { x: 0, y: 0 };
}

let visited = new Set<string>(['0,0']);

for (const motion of motions) {
    let [dir, amount] = motion.split(' ');

    for (let i = 0; i < Number(amount); i++) {
        switch (dir) {
            case 'U':
                rope[0].y += 1;
                break;
            case 'D':
                rope[0].y -= 1;
                break;
            case 'L':
                rope[0].x -= 1;
                break;
            case 'R':
                rope[0].x += 1;
                break;
        }

        for (let j = 0; j < rope.length - 1; j++) {
            let dx = rope[j].x - rope[j + 1].x;
            let dy = rope[j].y - rope[j + 1].y;

            if (dx === 0 && Math.abs(dy) > 1) {
                rope[j + 1].y += dy > 0 ? 1 : -1;
            } else if (dy === 0 && Math.abs(dx) > 1) {
                rope[j + 1].x += dx > 0 ? 1 : -1;
            } else if (
                (Math.abs(dx) > 1 && Math.abs(dy) !== 0) ||
                (Math.abs(dy) > 1 && Math.abs(dx) !== 0)
            ) {
                rope[j + 1].x += dx > 0 ? 1 : -1;
                rope[j + 1].y += dy > 0 ? 1 : -1;
            }
        }

        visited.add(`${rope[9].x},${rope[9].y}`);
    }
}

console.log(visited.size);
