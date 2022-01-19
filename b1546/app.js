const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arrayLength = +input[0];
const items = input[1].split(' ').map((item) => +item);

solution(arrayLength, items);

function solution(arrayLength, items) {
    const M = Math.max(...items);
    let sum = 0;
    for (let i = 0; i < arrayLength; i++) {
        sum = sum + items[i] / M * 100;
    }
    console.log(sum / arrayLength);
}
