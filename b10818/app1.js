const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const input1 = input[0];
const testArray = input[1].split(" ").map((item) => +item);

solution(input1, testArray);

function solution(N, testarray) {
    const answer = [];
   const a = Math.max([...testarray]);
   const b = Math.min([...testarray]);
   answer.push(b[0]);
   answer.push(a[0]);
   answer.join(' ');
   console.log(answer);
}