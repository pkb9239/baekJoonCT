const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0].split(' ').map((item => +item));

solution(input[0], input[1], input[2]);

function solution(A, B, C) {
   const fir = A;
   const sec = B;
   const thr = C;
   if (fir == sec && fir == thr && sec == thr) {
       console.log(10000 + (fir * 1000));
   } else if (fir == sec || fir == thr) {
       console.log(1000 + fir * 100);
   } else if (sec == thr) {
       console.log(1000 + sec * 100);
   } else {
      console.log(Math.max(...[fir, sec, thr]) * 100);
   }
}