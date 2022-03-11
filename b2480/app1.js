const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0].split(' ').map((item => +item));

solution(input[0], input[1], input[2]);

function solution(A, B, C) {
         // 3 3 6
    if (A === B && B === C && A == C) { //A = B = C
        console.log(10000 + A * 1000);
    }
    if ( A !== C || B !== C || C !== B) {
        if (A === B || A === C) {
            console.log(1000 + A * 100);
        }
        if (B === C) {
            console.log(1000 + B * 100);
        }
    } else {
        console.log(Math.max(...[A, B, C]) * 100);
    }
}