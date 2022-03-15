const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
    let num = N;
    let makeNum = 0;
    let count = 0;
    let isNotSame = true;
    while(isNotSame) {
        makeNum = Math.floor(num / 10) + num % 10;
        num = (num % 10) * 10 + makeNum % 10;
        count++;
        if (num == N) {
            console.log(count);
            isNotSame = false;
        }
    }
}