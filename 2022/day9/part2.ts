import { readFileSync } from 'fs';

const motions = readFileSync('./2022/day9/input.txt', 'utf-8')
    .split('\n')
    .filter((n) => n !== '');

type pos = {
    r: number;
    c: number;
};

let rope = new Array<pos>();

for (let i = 0; i < 10; i++) {
    rope[i] = { r: 0, c: 0 };
}

let visited = new Set<string>(['0,0']);

for (const motion of motions) {
    let [dir, amount] = motion.split(' ');

    for (let i = 0; i < Number(amount); i++) {
        let newHead = { ...rope[0] } as pos;
        switch (dir) {
            case 'U':
                newHead.r -= 1;
                break;
            case 'D':
                newHead.r += 1;
                break;
            case 'L':
                newHead.c -= 1;
                break;
            case 'R':
                newHead.c += 1;
                break;
        }

        rope[0] = newHead;

        // I got some help from Theo Browne on this one
        for (let j = 0; j < 9; j++) {
            let dr = rope[j].r - rope[j + 1].r;
            let dc = rope[j].c - rope[j + 1].c;

            if (Math.abs(dr) > 1) {
                rope[j + 1].r += dr > 0 ? 1 : -1;
                if (Math.abs(dc) !== 0) {
                    rope[j + 1].c += dc > 0 ? 1 : -1;
                }
            } else if (Math.abs(dc) > 1) {
                rope[j + 1].c += dc > 0 ? 1 : -1;
                if (Math.abs(dr) !== 0) {
                    rope[j + 1].r += dr > 0 ? 1 : -1;
                }
            }
        }
        visited.add(`${rope[9].r},${rope[9].c}`);
    }
}

console.log(visited.size);
