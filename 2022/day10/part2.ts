import { readFileSync } from 'fs';

const instructions = readFileSync('./2022/day10/input.txt', 'utf-8')
    .split('\n')
    .filter((n) => n !== '');

let pixels = new Array<Array<string>>(6);

for (let i = 0; i < pixels.length; i++) {
    pixels[i] = new Array<string>(40);
}

function getPixel(r: number, c: number, x: number) {
    return x === c || x === c + 1 || x === c - 1 ? '#' : '.';
}

let cycle = 1;
let x = 1;
let index = 0;
let overflow = false;

for (let r = 0; r < pixels.length; r++) {
    for (let c = 0; c < pixels[0].length; c++) {
        let instruction = instructions[index].split(' ');
        index += 1;

        if (!overflow) {
            pixels[r][c] = getPixel(r, c, x);
        }

        if (instruction[0] === 'addx') {
            // checks if addx began in previous row
            if (overflow) {
                overflow = false;
            } else {
                cycle += 1;
                c += 1;
            }

            // checks if cycle happens in next row
            if (c >= pixels[0].length) {
                index -= 1;
                overflow = true;
                break;
            }

            pixels[r][c] = getPixel(r, c, x);

            x += Number(instruction[1]);
        }

        cycle += 1;
    }
}

for (let r = 0; r < pixels.length; r++) {
    for (let c = 0; c < 40; c++) {
        process.stdout.write(pixels[r][c]);
    }
    process.stdout.write('\n');
}
