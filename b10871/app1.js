const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const a = input[0].split(" ").map((item) => +item); // 10 5
const b = input[1].split(" ").map((item) => +item); // b = [1, 10, 4, 9, 2, 3, 8, 5, 7, 6]

solution(a, b);

function solution(N, X) {
    const answer = [];
    for (let i = 0; i < N[0]; i++) {
        if (X[i] < N[1]) {
            answer.push(X[i]);
        }
    } // answer = [1, 4, 2, 3];
   console.log(answer.join(' ')); //배열을 스트링으로 만듬
}