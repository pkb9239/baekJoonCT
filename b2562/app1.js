const fs = require('fs');
const arr = require('jshint/data/non-ascii-identifier-start');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map((item) => +item);

solution(input);

function solution(array) {
    let max = 0;
    let maxId = 0;
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
            maxId = i + 1;
        }
    }
    console.log(max);
    console.log(maxId);
}

