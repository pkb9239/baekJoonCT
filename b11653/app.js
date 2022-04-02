const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) { ///8.4
        while (n % i === 0) { //  
            console.log(i);
            n = n / i;
        } 
    }
    if (n !== 1) {
        console.log(n);
    }
}