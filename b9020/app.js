const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 2부터 10000까지의 숫자 중 소수 구하기
const n = 2;
const m = 10000;
// 에라토스테네스의 체 사용
let prime = [];
for (let i = n; i <= m; i++) {
  prime[i] = i;
}

for (let i = 2; i <= m; i++) {
  if (prime[i] === 0) continue;
  for (let j = i + i; j <= m; j += i) {
    prime[j] = 0;
  }
}
prime = prime.filter(n => n !== 0);
console.log(prime);