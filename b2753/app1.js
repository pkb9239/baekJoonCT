const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(year) {
    //윤년은 4의 배수이면서 100의 배수가 아닐떄 또는 400의 배수일떄 
    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
        console.log(1);
    } else {
        console.log(0);
    }
}