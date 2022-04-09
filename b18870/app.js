const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input.shift();

const setArr = input[0].split(" ").map((item) => +item).sort((a,b) => a - b);
const set = new Set(setArr);
const map = new Map();

[...set].forEach((item, index) => {
    map.set(item, index);
});

let answer = '';
input[0].split(' ').forEach((item) => {
   answer += map.get(+item) + ' ';
});

console.log(answer);


