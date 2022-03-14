const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const input1 = +input[0];
const input2 = [];
for (let i = 1; i <= input1; i++) {
    input2.push( input[i].split(" ").map((item) => +item));
}

solution(input1, input2);

function solution(T, testCaseArray) {
    for(let i = 0; i < T; i++) {
        const a = testCaseArray[i];
        const b = a[0];
        const c = a[1];
        console.log(`Case #${i+1}: ${b} + ${c} = ${b+c}`);
    }
}
