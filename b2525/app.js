const fs = require('fs');
const { parse } = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const input1 = input[0].split(' ').map((item) => +item);
const input2 = +input[1];

solution(input1[0], input1[1], input2);

function solution(A, B, C) {
    const hour = A;
    const minutes = B;
    const cookTime = C;

    const cookHour = parseInt((hour * 60 + minutes + cookTime) / 60);
    const cookMinutes = parseInt((hour * 60 + minutes + cookTime) % 60);

    console.log(cookHour >= 24 ? cookHour - 24 : cookHour, cookMinutes);
}