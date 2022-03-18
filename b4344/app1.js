const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const input1 = +input[0];
const item = [];
for (let i = 1; i <= input1; i++) {
    const testarrray = input[i].split(" ").map((item) => +item);
    item.push(testarrray);
}
const b = [];
for (let i = 0; i < item.length; i++) {
    const a = item[i];
    b.push(a[0]);
}

solution(b, item);

function solution(N, score) {
    for (let i = 0; i <= N[i]; i++) {
        const item = score[i].slice(1);
        const sum = item.reduce((a, b) => a + b);
        const average = sum / N[i];
        console.log(item);
        let count =
        if (average > item[i])
    }
}

