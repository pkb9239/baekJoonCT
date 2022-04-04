const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
    let sum = 1;
    if (N === 0) {
        console.log(1);
    } else {
        for(let i = 1; i <= N; i++) {
            sum = i * sum;
         }
         console.log(sum);
    }
}