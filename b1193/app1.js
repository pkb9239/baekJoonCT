const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
    let line = 1; // 대각선 라인 1부터 시작
    let sum = 0; //대각선의 분자분모의 합

    // a + b = 라인수 + 1;
    // a = 라인수 + 1 - b;  
    while(true) {
        sum += line;
        if (N <= sum) { 
            const a = line -(sum - N); //1
            const b = line + 1 - a; // 2
            if (line % 2 == 0) {
                console.log(`${a}/${b}`);
            } else {
                console.log(`${b}/${a}`);
            }
            break;
        }
        line++;
    }
}