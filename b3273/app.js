const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const arr = input[1].split(" ").map((item) => +item);
const n = Number(input[0]); //9
const x = Number(input[2]); //13

solution(n, x, arr); 

function solution(n, x, arr) {
    let answer = 0;
    let lt = 0;    
    let rt = n - 1;
    arr.sort((a, b) => a- b);
      while (lt !== rt) {
        if (arr[lt] + arr[rt] == x) {
            answer++;
            lt++;
          } else if (arr[lt] + arr[rt] > x) {
            rt--;
          } else {
            lt++;
          }
        }
        console.log(answer);
}