import { readFileSync } from 'fs';

const gridString = readFileSync('./2022/day8/input.txt', 'utf-8')
    .split('\n')
    .filter((n) => n !== '');

let grid = new Array<Array<number>>();

for (const g of gridString) {
    grid.push(g.split('').map(Number));
}

const directions = [
    [-1, 0], // up
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
];

function dfs(r: number, c: number, max: number, direction: number[], start: boolean): number {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return -1;

    if (start === true) {
        start = false;
    } else if (max <= grid[r][c]) {
        return 0;
    }

    return 1 + dfs(direction[0] + r, direction[1] + c, max, direction, start);
}

let highest = 0;

for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
        let view = 1;
        for (const d of directions) {
            view *= dfs(r, c, grid[r][c], d, true);
        }
        highest = Math.max(highest, view);
    }
}

console.log(highest);
