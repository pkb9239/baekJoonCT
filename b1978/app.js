const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testarray = input[1].split(' ').map((item) => +item);

solution(+input[0], testarray);
function isPrime(num) {
  if (num === 2 || num === 3) {
    return true;
  }
  if (num <= 1 || num % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(N, item) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (isPrime(item[i])) {
      count += 1;
    }
  }
  console.log(count);
}