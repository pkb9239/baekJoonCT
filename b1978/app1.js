const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testarray = input[1].split(' ').map((item) => +item);

solution(+input[0], testarray);
function answer(a) {
    if (a === 1) { // 소수는 1이 될 수 없다.
        return false;
    }
    for (let i = 2; i < a; i++) { // 소수는 2부터 ~ n까지모든정수로 나누었을때 나머지가 0이 될수없다
        if (a%i === 0) {
            return false;
        }
    }
    return true;
} 


function solution(n, item) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (answer(item[i])) {
            count += 1 ;
        }
    }
    console.log(count);
}