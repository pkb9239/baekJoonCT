const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let n = input[0].split('');
const answer = n.sort((a, b) => b - a);
console.log(answer.join(''));

