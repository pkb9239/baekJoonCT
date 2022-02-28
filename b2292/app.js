const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

// function solution(A) {
//     let a = 1;
//     for (let i = 1; i < A; i++) {
//         i += 6 * a;
//         a++;
//     }
//     console.log(a);
// }

 function solution(A) {
     let a = 1; let b = 1;
     while (b < A) {
         b += 6 * a;

         a++;
    }
    console.log(a);
 }