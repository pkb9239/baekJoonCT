const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const input1 = input[0];
let input2 = [];
for (let i = 0; i < input1; i++) {
    input2.push(input[i + 1].split(" ").map((item) => +item)); 
}

solution(input1, input2);

function solution(T, testArray) {
    for (let i = 0; i < T; i++) {
        const a = testArray[i];
        console.log(a[0] + a[1]);
    }
}
