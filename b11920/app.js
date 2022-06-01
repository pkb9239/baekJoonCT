const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, k] = input[0].split(" ").map((item) => +item);
const arr = input[1].split(" ").map((item) => +item);

solution(n, k, arr);

function solution(n, k, arr) {
    let answer = arr;
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < n - k - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log(answer);
}