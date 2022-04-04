const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(n) {
    function fibonacci(n) {
        if (n == 0) return 0;
        else if (n == 1) return 1;
        else return fibonacci(n-1) + fibonacci(n-2);
    }
    console.log(fibonacci(n));
}