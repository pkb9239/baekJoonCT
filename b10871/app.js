const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N , X] = input[0].split(' ').map((item) => +item);
const arrayA = input[1].split(' ').map((item) => +item);
solution(N, X, arrayA);

function solution(N, X, A) {
    const answerArray = [];
    for (let i = 0; i < N; i ++) {
        if (X > A[i]) {
            answerArray.push(A[i]);
        }
    }
    console.log(answerArray.join(' '));
}

