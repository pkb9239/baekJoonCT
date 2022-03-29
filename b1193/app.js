const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(a) {
    let value = 1;
    while(true) {
        a -= value;
        if (a <= 0) {
            a += value;
            break;
        }
        value++;
    }
    if (value % 2 === 1) {
        console.log(`${value - (a - 1)}/${1 + (a - 1)}`);
    } else {
        console.log(`${1 + (a - 1)}/${value - (a - 1)}`);
    }
}