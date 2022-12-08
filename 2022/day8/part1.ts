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

let visible = new Set<string>();

function dfs(r: number, c: number, max: number, direction: number[]) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return;

    if (max < grid[r][c]) {
        visible.add(`${r},${c}`);
        max = grid[r][c];
    }

    dfs(direction[0] + r, direction[1] + c, max, direction);

    return;
}

for (let r = 0; r < grid.length; r++) {
    dfs(r, 0, -1, directions[1]);
    dfs(r, grid[0].length - 1, -1, directions[3]);
}

for (let c = 0; c < grid[0].length; c++) {
    dfs(0, c, -1, directions[2]);
    dfs(grid.length - 1, c, -1, directions[0]);
}

console.log(visible.size);
