const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const item = input[0].split(" ").map((item) => +item);
const x = item[0];
const y = item[1];
const w = item[2];
const h = item[3];

let answer = [x, y, w-x, h-y];
answer.sort((a,b) => a - b);
console.log(answer[0]);
