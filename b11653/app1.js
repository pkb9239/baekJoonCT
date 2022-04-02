const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
solution(+input[0]);


function solution(n) {
    let i = 2;
    let primes = [];
    while (true) {
        if (n % i === 0) {
            n = n / i;
            primes.push(i);
            i = 1;
        }
        i++;
        if (i > n) {
            break;
        }
    }
    console.log(primes.join("\n"));
}
