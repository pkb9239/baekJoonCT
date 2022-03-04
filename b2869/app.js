const fs = require('fs');
const { val } = require('jshint/src/options');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ').map((item) => +item);  //+item 은 Number(item)과 같은 효과
// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

solution(input[0],input[1], input[2]);
function solution(A, B, V) {
    console.log(Math.ceil( (V - B ) / (A - B) ));
}