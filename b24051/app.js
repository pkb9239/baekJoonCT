const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, k] = input[0].split(" ").map((item) => +item);
const arr = input[1].split(" ").map((item) => +item);

solution(n, k, arr);

function solution(n, k, arr) {
    let answer = arr;
    for (let i = 2; i < n; i++) {
        let temp = arr[i];
        let j;
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > temp) arr[j+1] = arr[j];
            else break;
        } 
        arr[j+1] = temp;
    }
    console.log(answer);
}