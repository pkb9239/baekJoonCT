const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const input1 = input[0].split(" ").map((item) => +item);
const input2 = +input[1];

solution(input1[0], input1[1], input2);
 // a = 24 , b + c = 52
function solution(A, B, C) {
    let minutes = (B + C) % 60;
    let a = Math.floor((B + C) / 60);
    let hour = A;
    if (a >= 1) {
       hour = hour + a;
       if ( hour > 23) {
         hour = hour - 24;
       }
   } 
   console.log(hour, minutes);
}