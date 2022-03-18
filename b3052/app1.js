const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const items = input.map((item) => +item);

solution(items);

function solution(item) {
    const answer = [];
    for(let i = 0; i < item.length; i++) {
        answer.push(item[i] % 42);
    }
    const set = new Set(answer);
    const ans = set.size;
    console.log(ans);
}