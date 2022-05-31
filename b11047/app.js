const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, K] = input.shift().split(" ").map((item) => +item);
const arr = input.map((item) => +item);
console.log(arr);

solution(N, K, arr);

function solution(n, k, item) {
    let answer = 0;
    item.reverse();
    for (let i = 0; i < n; i++) {
        if (k === 0) break;
        if (k >= item[i]) {
            answer += Math.floor(k / item[i]);
            k = k % item[i];
        }
    }
    console.log(answer);
}


