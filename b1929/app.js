const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const item = input[0].split(" ").map((item) => +item);

solution(item[0], item[1]);

function isprimes(a) {
    for (let i = 2; i < Math.sqrt(a); i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(m, n) {
    for (let i = m; i <= n; i++) {
        if (isprimes(i)) {
            console.log(i);
        }
    } 
}



