const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(num) {
    if (89 < num) {
        console.log('A');
    } else if (79 < num) {
        console.log('B');
    } else if (69 < num) {
        console.log('C');
    } else if (59 < num) {
        console.log('D');
    } else {
        console.log('F');
    }
}