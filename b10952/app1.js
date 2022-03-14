const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 0; ; i++) {
    const a = input[i].split(' ').map((item) => +item);
    testCaseArray.push({A: a[0], B: a[1]});
    if (a[0] === 0 && a[1] === 0) {
        break;
    }
}

solution(testCaseArray);

function solution(tsa) {
    let A = 0;
    let B = 0;
    let idx = 0;
    while (true) {
        A = tsa[idx].A;
        B = tsa[idx].B;
        console.log(A + B);
        idx++;
    }
}