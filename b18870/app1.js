const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input.shift();

const item = input[0].split(" ").map((item) => +item).sort((a, b) => a - b);
// -10 -9 2 4 4
const set  = new Set(item);
//   -10 -9 2 4
//idx 0   1 2 3 
const map = new Map();
// 999 => 0, 1000 => 1
[...set].forEach((item, index) => {
    map.set(item, index);
});

let answer = '';

// 1000 999 1000 999 1000 999
input[0].split(' ').forEach((item) => {
    answer += map.get(+item) + ' ';
});
console.log(answer);

