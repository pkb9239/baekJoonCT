const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);
function solution(N) {
    let five = 0;
    let three = 0;
    while (true) {
        if (N % 5 === 0) {
            five = N / 5;
            console.log(five + three);
            break;
        }
        if (N < 0) {
            console.log(-1);
            break;
        }
        N = N - 3;
        three++;
    }
}