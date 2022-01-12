const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
    for (let i = 1; i <= N; i++) {
        const starCnt = i;
        const nullCnt = N - i;
        let printString = '';
        for (let j = 0; j < nullCnt; j++) {
            printString += ' ';
        }
        for (let j = 0; j < starCnt; j++) {
            printString += '*';
        }
        console.log(printString);
    }
}