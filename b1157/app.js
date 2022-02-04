const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(str) {
    let obj = {};
    for (let i = 0; i <str.length; i++) {
        let nowChar = str[i].toUpperCase();
        if (obj[nowChar]) {
            obj[nowChar]++;
        } else {
            obj[nowChar] = 1;
        }
    }
    let maxValue = -1;
    let maxChar = '';
    let isDup = false;
    for (const el in obj) {
        if (obj[el] > maxValue) {
            maxValue = obj[el];
            maxChar = el;
            isDup = false;
        } else if (obj[el] === maxValue) {
            isDup = true;
        }
    }
    if (isDup) {
        console.log('?');
    } else {
        console.log(maxChar);
    }
}