const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const answer = input[0].split(" ");
console.log(answer);
console.log(answer[0] === "" ? answer.length - 1 : answer.length);