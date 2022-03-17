const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const testArray = input[1].split(" ").map((item) => +item);

solution(testArray);

function solution(testarray) {
    const min = testarray.sort((a, b) => a - b)[0];
    const max = testarray.sort((a, b) => b - a [0]);
    console.log(`${min} ${max}`);
}