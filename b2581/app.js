const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0], input[1]);


function solution(n, m) {
  let primeNum = [];
  let sum = 0;
  
  for (let i = n; i <= m; i++) { 
   for (let j = 2; j <= i; j++) {
     if (j * j > i) {
      primeNum.push(i);
      sum += i;
      break;
     }
     if (i % j === 0) {
       break;
     }
   }
  }
  if (primeNum.length === 0) {
    console.log(-1);
  } else {
    console.log(sum);
    console.log(primeNum[0]);
  }
}