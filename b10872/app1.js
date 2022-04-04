const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(n) {
    function factory(n) {
        if (n === 0) return 1;
        else return n * factory(n-1);
    }
    console.log(factory(n));

}