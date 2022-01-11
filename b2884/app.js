const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);  //+item 은 Number(item)과 같은 효과
solution(input[0], input[1]);

function solution(H, M) {
    M = M-45; //-1 
    if (M < 0) {
        M = M + 60;
        H = H - 1; // -1 
    }
    if (H < 0) {
        H = 23;
    }
    console.log(H, M);
}