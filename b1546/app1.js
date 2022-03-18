const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const input1 = +input[0];
const Array = input[1].split(" ").map((item) => +item);

solution(input1, Array);

function solution(N, array) {
    let M = 0;
    let sum = 0;
    for (let i = 0; i < N; i++) {
        if (M < array[i]) {
            M = array[i];
        }
    }
    for (let i = 0; i < N; i++) {
        sum = sum + array[i];
    }
    const answer = (sum / M * 100) / N;
    console.log(answer);
}