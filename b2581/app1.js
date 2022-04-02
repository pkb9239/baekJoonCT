const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0], input[1]);

function isprimenum(a) {
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(n, m) {
    let sum = 0;
    let primeNum = [];
    for (let i = n; i <= m; i++) {
        if (isprimenum(i)) {
            primeNum.push(i);
            sum += i;
        }
    }
    console.log(primeNum);
    if (primeNum.length === 0) {
        console.log(-1);
    } else {
        console.log(sum);
    }
}