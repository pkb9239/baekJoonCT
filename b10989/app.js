const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const a = +input[0];
const item = [];
for (let i = 1; i <= a; i++) {
    item.push(input[i]);
}
solution(a, item);

function solution(N, testarray) {
    const sort = testarray.sort((a, b) => a - b);
    console.log(sort.join("\n"));
} //시간초과 나면 
// for문 대신에 console.log(sort.join('\n'));